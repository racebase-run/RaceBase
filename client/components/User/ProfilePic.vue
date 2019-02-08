<style scoped> 
img {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
div {
  max-height: 100%;
}
</style>
<template>
<div> 
  <img 
    v-if="!url"
    class="profile-img d-block" 
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