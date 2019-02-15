<style scoped>
.changelog >>> h1 {
  font-size: 30px;
}
.changelog >>> h2 {
  font-size: 31px;
}
.changelog >>> h3 {
  font-weight: 500;
  text-align: left;
  font-size: 20px;
}
.changelog >>> ul {
  list-style: square;
}
</style>

<template>
  <div class="changelog mt-3 mx-auto w-95" v-html="changelog"></div>
</template>

<script>
import changelog from '~/assets/Changelog.md'

export default {
  asyncData () {
    return {
      changelog: changelog
    }
  }
}
</script>