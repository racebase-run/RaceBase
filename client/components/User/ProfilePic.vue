<style lang="less" scoped> 
@import (reference) "~assets/less/colors.less";
img {
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: inherit;
}
div {
  max-height: 100%;
}
.default {
  border: 1px solid @light-grey;
  border-radius: 8px;
}
</style>
<template>
<div> 
  <img 
    v-if="!url"
    class="profile-img d-block default" 
    src="/images/default.png"
  />
  <img 
    v-if="url"
    class="profile-img d-block"
    :src="url.replace('http', 'https')"
  />
</div>
</template>
<script> 
export default {
  props: ['url', 'size']
}
</script>