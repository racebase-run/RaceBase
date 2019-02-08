<template>
  <div class="btn-group-wrap pb-4">
    <div class="btn-group pager" role="pager" aria-label="Pager">

      <button 
        type="button" 
        class="btn btn-default" 
        v-if="currentPage > 1" 
        @click="$emit('prev')"
      >
        Prev
      </button>

      <button 
        type="button" 
        class="btn btn-default" 
        v-if="!lastPage" 
        @click="$emit('next')"
      >
        Next
      </button>

    </div>
  </div>
</template>

<script> 
export default {
  props: ['currentPage', 'lastPage']
}
</script>