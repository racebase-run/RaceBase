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
    <div 
      class=
      "sidebar-container
      col-12 col-md-4 col-lg-3 
      pl-0 pr-0 
      h-100">
      <sidebar/>
    </div>
    <div 
      class="col-12 col-md-8 col-lg-9 
      offset-lg-3 offset-md-4 
      pr-0 pl-0">
      <nuxt/>
    </div>
  </div>
</div>
</template>

<script>
const Sidebar = () => import('~/components/Sidebar')
export default {
  components: {
    Sidebar
  }, 
  data () {
    return {
      searchText: ""
    }
  }
}
</script>