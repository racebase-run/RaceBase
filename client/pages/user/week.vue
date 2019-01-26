<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/basics.less";

h1 {
  .name {
    font-weight: 400; 
    color: @bright-blue;
  }
  font-size: 35px;
  font-weight: 600;
}

</style>

<template>
  <div class="mx-auto w-md-100 mx-md-0 pl-md-5 container">
    <div class="row">
      <h1 class="mt-4 col"> 
        <span class="name">John's</span>
        Training Log
      </h1>
      <div class="col d-flex align-items-center justify-content-end">
        <div class="btn btn-primary">Monthly View</div>
      </div>
    </div>
  </div>
</template>