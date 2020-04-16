<style lang="less" scoped>

@media (min-width: 576px) { 
  .sidebar-container {
    position: static;
  }
}

@media (min-width: 768px) {
  .sidebar-container {
    position: fixed;
  }
}

</style>

<template>
<div class="container-fluid h-100">
  <div class="row h-md-100 h-auto">
    <div class="w-100"> 
      <Navbar/>
    </div>
    <div 
      class="w-100 pr-0 pl-0">
      <nuxt/>
    </div>
  </div>
</div>
</template>

<script>
const Navbar = () => import('~/components/Navbar')
export default {
  components: {
    Navbar
  }, 
  data () {
    return {
      searchText: ""
    }
  }
}
</script>