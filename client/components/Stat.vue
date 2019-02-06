<style lang="less" scoped> 
@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/shadow.less";

.row {
  font-size: 17px;
  color: @medium-grey;

  .stat {
    background: @bright-blue;
    color: white;
    border-radius: 5px;
    padding: 2px 6px;
    margin-right: 10px;
  }

  .stat-down {
    background: @pink;
  }

  .stat-up {
    background: @green;
  }
}
</style>

<template>
  <div class="row mx-3 mb-2"> 
    <span class="stat" :class="comp ? ('stat-' + (value >= 0 ? 'up' : 'down')) : ''"> 
      {{ value }}{{ unit }}
    </span> 
    <span v-if="comp">{{ value >= 0 ? "more" : "less" }}&nbsp;</span>
    <slot />
  </div>
</template>

<script> 
export default {
  props: ['value', 'unit', 'comp']
}
</script>
