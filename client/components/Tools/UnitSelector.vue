<template> 
  <label class="form-check-label d-flex align-items-center">
    <input 
      @click="$emit('change', $event.target.value)"  
      value="miles"
      type="radio"
      :name="name"
    /> <div class="px-2"> Mi </div>

    <input 
      value="kilometers"
      :name="name"
      @click="$emit('change', $event.target.value)"  
      type="radio"
    /> <div class="px-2"> Km </div>
  </label>
</template>
<script> 
export default {
  props: ['unit', 'name'],
  model: {
    event: 'change', 
    prop: 'unit'
  }
}
</script>