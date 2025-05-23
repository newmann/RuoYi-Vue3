<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import 'amis/sdk/sdk.js';
import 'amis/sdk/json-view.js';
import 'amis/sdk/rest.js';
import 'amis/sdk/sdk.css';
import 'amis/sdk/iconfont.css';
import 'amis/sdk/helper.css';
import 'amis/sdk/dark.css';

import { useRouter } from 'vue-router';
// import { useAuthStore } from '@/stores/auth';
import useUserStore from '@/store/modules/user';
import { DIRECTUS_URL,MOQUI_TOKEN_KEY } from '@/constants';
import { fileIdToURL } from '@/utils/file-id-to-url';
import useSettingsStore from '@/store/modules/settings';

const props = defineProps({
  /** The amis JSON schema */
  schema: {
    type: Object,
    required: true,
  },
  /** 赋予 amis 顶层数据域的值 */
  locals: {
    type: Object,
    default: () => ({}),
  },
  /** 控制 amis 的属性，一般都用不上 */
  props: {
    type: Object,
    default: () => ({}),
  },
  /** 环境变量，用于控制 amis 的行为，需要使用 amis 用户实现部分接口 */
  env: {
    type: Object,
    default: () => ({}),
  },
});

/** The amis component is ready */
const emit = defineEmits(['ready']);

let amisInstance: any;

onMounted(() => {
  const scoped = window.amisRequire('amis/embed');
  const { normalizeLink, registerFilter } = window.amisRequire('amis');
  
  const router = useRouter();
  const auth = useUserStore();

  // 这种方法无效，还需要找其他办法来切换
  // function loadCSS(url: string) {
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = url;
  //   document.head.appendChild(link);
  // }

  // if(useSettingsStore().isDark){
  //   loadCSS('amis/sdk/dark.css');
  // };


  // let propsEnv; 

  // if(isDark){
  //   propsEnv = {...props.env,theme:'dark'}
  // }else{
  //   propsEnv = {...props.env,theme:'default'}
  // }

  registerFilter('fileIdToURL', (fileId: string) => fileIdToURL(fileId, auth.token));
  const instance = scoped.embed(
    '#amis-component',
    props.schema,
    {
      // 3.1.0 开始可以传入 context 数据，无论哪层都可以使用到这个里面的数据。适合用来传递一些平台数据。
      context: {
        DIRECTUS_URL,
      },
      // 可以通过 props 里的 locals 属性来赋予 amis 顶层数据域的值
      data: {
        ...props.locals,
      },
      // 	其它的初始 props，一般不用传。
      ...props.props,
      // locale: 'en-US' // props 中可以设置语言，默认是中文
    },
    {
      // 环境变量，可以理解为这个渲染器工具的配置项。
      jumpTo: (to: string, action?: any) => {
        if (to === 'goBack') {
          return router.back();
        }
        to = normalizeLink(to);
        if (action && action.actionType === 'url') {
          action.blank === false ? router.push(to) : window.open(to);
          return;
        }
        // 主要是支持 nav 中的跳转
        if (action && to && action.target) {
          window.open(to, action.target);
          return;
        }
        if (/^https?:\/\//.test(to)) {
          router.replace(to);
        } else {
          router.push(to);
        }
      },
      updateLocation: (to: any, replace: boolean) => {
        if (to === 'goBack') {
          return router.back();
        }
        to = normalizeLink(to);
        replace ? router.replace(to) : router.push(to);
      },
      requestAdaptor: async (config: any) => {
        //console.log('requestAdaptor:config=%o', config);
        // await auth.refreshTokenIfExpired();
        config.headers[MOQUI_TOKEN_KEY] = auth.token; //增加Moqui需要的token
        
        // 去掉responseAdaptor里加的 ACCESS_TOKEN 和 fileURL @see attachURL
        // const { data } = config;
        // for (const property in data) {
        //   if (property === 'ACCESS_TOKEN' || property.endsWith('URL')) {
        //     delete data[property];
        //   }
        // }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      /**
       * 对返回的数据进行统一处理
       * @param api 不含query部分的request
       * @param payload 返回的data部分
       * @param query 
       * @param request 请求对象
       * @param response 返回对象
       */
      responseAdaptor: (api: any, payload: any, query: any, request: any, response: any) => {
        // console.log('responseAdaptor:payload=%o', payload);
        console.log('responseAdaptor:response=%o', response);
        // console.log('responseAdaptor:api=%o', api);
        // console.log('responseAdaptor:query=%o', query);
        // console.log('responseAdaptor:request=%o', request);
        if (response.status >= 400) {
          // 统一处理 directus 接口出错
          const msg = response.data?.errors.map((x: any) => x.message).join(' ');
          if (msg) {
            return {
              msg,
              status: response.status,
              data: {},
            };
          } else {
            return payload;
          }
        }
        if (typeof payload === 'object' && payload && 'data' in payload) {
          const data = payload.data;
          if (Array.isArray(data)) {
            return {
              data: {
                items: data,
                total: payload.meta?.filter_count,
                ACCESS_TOKEN: auth.token,
              },
            };
          } else {
            return {
              data: {
                ...data,
                ACCESS_TOKEN: auth.token,
              },
            };
          }
        } else {
          return payload;
        }
      },
      ...props.env,
    },
    () => {
      emit('ready', { instance });
    },
  );
  amisInstance = instance;
});

onUnmounted(() => {
  amisInstance?.unmount();
});
</script>

<template>
  <div id="amis-component"></div>
</template>
