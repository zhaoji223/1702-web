<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, li, pre, form, fieldset, legend, button, textarea, th, td {
      margin:0;padding:0
  }
  body {
     height:100%;
  }
  a{
      text-decoration:none;
      color:#ffffff;
  }
  li, ol {
      list-style:none;
  }
  i, em {
      font-style:normal;
  }
</style>
