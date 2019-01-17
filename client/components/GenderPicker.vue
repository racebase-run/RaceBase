<template>
  <div class="btn-group-wrap d-lg-inline-block d-block mt-3 mb-3">
    <div class="btn-group gender-select">
      <nuxt-link
        class="btn" 
        :to="{ 
          params: {
            gender: 'womens'
          }
        }" 
        :class="gender == 'womens' ? 'btn-primary' : 'btn-default'"
      >
        Women's
      </nuxt-link>
      <nuxt-link 
        class="btn" 
        :to="{ 
          params: {
            gender: 'mens'
          }
        }" 
        :class="gender == 'mens' ? 'btn-primary' : 'btn-default'"
      >
        Men's
      </nuxt-link>
    </div><br>
  </div>
</template>

<script>
export default {
  props: ['gender']
};
</script>