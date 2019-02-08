<template>
  <form class="search-form mb-3" @submit.prevent="$emit('search', true)">
    <div class="input-group">
      <input 
        type="text" 
        placeholder="Search..." 
        v-model="interface" 
        class="form-control"
        @keyup="$emit('search')"
      />
      <div class="input-group-append">
        <span class="input-group-text">
          <fa icon="search" @click="$emit('search')"></fa>
        </span>
      </div>
    </div>
  </form>
</template>

<script> 
export default {
  props: ['value', 'search'], 
  computed: {
    interface: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>