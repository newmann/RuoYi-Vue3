<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>若依后台管理框架</h2>
        <p>
          一直想做一款后台管理系统，看了很多优秀的开源项目但是发现没有合适自己的。于是利用空闲休息时间开始自己写一套后台系统。如此有了若依管理系统，她可以用于所有的Web应用程序，如网站管理后台，网站会员中心，CMS，CRM，OA等等，当然，您也可以对她进行深度定制，以做出更强系统。所有前端后台代码封装过后十分精简易上手，出错概率低。同时支持移动客户端访问。系统会陆续更新一些实用功能。
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <p>
          <el-tag type="danger">&yen;免费开源</el-tag>
        </p>
        <p>
          <el-button
            type="primary"
            icon="Cloudy"
            plain
            @click="goTarget('https://gitee.com/y_project/RuoYi-Vue')"
            >访问码云</el-button
          >
          <el-button
            icon="HomeFilled"
            plain
            @click="goTarget('http://ruoyi.vip')"
            >访问主页</el-button
          >
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul>
              <li>SpringBoot</li>
              <li>Spring Security</li>
              <li>JWT</li>
              <li>MyBatis</li>
              <li>Druid</li>
              <li>Fastjson</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>联系信息</span>
            </div>
          </template>
          <div class="body">
            <p>
              <i class="el-icon-s-promotion"></i> 官网：<el-link
                href="http://www.ruoyi.vip"
                target="_blank"
                >http://www.ruoyi.vip</el-link
              >
            </p>
            <p>
              <i class="el-icon-user-solid"></i> QQ群：<s> 满937441 </s> <s> 满887144332 </s>
              <s> 满180251782 </s> <s> 满104180207 </s> <s> 满186866453 </s> <s> 满201396349 </s>
              <s> 满101456076 </s> <s> 满101539465 </s> <s> 满264312783 </s> <s> 满167385320 </s> 
              <s> 满104748341 </s> <s> 满160110482 </s> <s> 满170801498 </s> <s> 满108482800 </s> 
              <s> 满101046199 </s> <s> 满136919097 </s> <s> 满143961921 </s> <s> 满174951577 </s> 
              <s> 满161281055 </s> <s> 满138988063 </s> <s> 满151450850 </s> <s> 满224622315 </s>
              <s> 满287842588 </s> <s> 满187944233 </s> <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=G6r5KGCaa3pqdbUSXNIgYloyb8e0_L0D&authKey=4w8tF1eGW7%2FedWn%2FHAypQksdrML%2BDHolQSx7094Agm7Luakj9EbfPnSTxSi2T1LQ&noverify=0&group_code=228578329" target="_blank">228578329</a>
            </p>
            <p>
              <i class="el-icon-chat-dot-round"></i> 微信：<a
                href="javascript:;"
                >/ *若依</a
              >
            </p>
            <p>
              <i class="el-icon-money"></i> 支付宝：<a
                href="javascript:;"
                class="支付宝信息"
                >/ *若依</a
              >
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>更新日志</span>
            </div>
          </template>
          <el-collapse accordion>
            <el-collapse-item title="v3.8.9 - 2024-12-30">
              <ol>
                <li>用户管理支持分栏拖动</li>
                <li>修改主题样式本地读取</li>
                <li>用户头像http(s)链接支持</li>
                <li>用户管理过滤掉已禁用部门</li>
                <li>支持自定义显示Excel属性列</li>
                <li>操作日志记录DELETE请求参数</li>
                <li>白名单支持对通配符路径匹配</li>
                <li>校检文件名是否包含特殊字符</li>
                <li>代码生成创建表屏蔽违规的字符</li>
                <li>菜单面包屑导航支持多层级显示</li>
                <li>Excel注解支持wrapText是否允许内容换行</li>
                <li>代码生成新增配置是否允许文件覆盖到本地</li>
                <li>修复角色禁用权限不失效问题</li>
                <li>修复代码生成上级菜单显示问题</li>
                <li>修复导出子列表对象只能在最后的问题</li>
                <li>修复TopNav无法正确获取active的问题</li>
                <li>修复默认关闭Tags-Views内链页面打不开</li>
                <li>升级oshi到最新版本6.6.5</li>
                <li>升级tomcat到最新版本9.0.96</li>
                <li>升级fastjson到最新版2.0.53</li>
                <li>升级logback到最新版本1.2.13</li>
                <li>升级spring-framework到最新版本5.3.39</li>
                <li>升级quill到最新版本2.0.2</li>
                <li>升级axios到最新版本0.28.1</li>
                <li>优化身份证脱敏正则</li>
                <li>优化权限更新后同步缓存</li>
                <li>优化查询时间范围日期格式</li>
                <li>优化参数键值更换为多行文本</li>
                <li>优化导入带标题文件关闭清理</li>
                <li>优化上传图片带域名不增加前缀</li>
                <li>优化特殊字符密码修改失败问题</li>
                <li>优化无用户编号不校验数据权限</li>
                <li>优化TopNav内链菜单点击没有高亮</li>
                <li>优化菜单管理切换Mini布局错乱问题</li>
                <li>其他细节优化</li>
              </ol>
            </el-collapse-item>
            
            <el-collapse-item title="v1.0.0 - 2019-10-08">
              <ol>
                <li>若依前后端分离系统正式发布</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>捐赠支持</span>
            </div>
          </template>
          <div class="body">
            <img
              src="@/assets/images/pay.png"
              alt="donate"
              style="width:100%"
            />
            <span style="display: inline-block; height: 30px; line-height: 30px"
              >你可以请作者喝杯咖啡表示鼓励</span
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
const version = ref('3.8.9')

function goTarget(url) {
  window.open(url, '__blank')
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

