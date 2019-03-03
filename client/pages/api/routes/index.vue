<template> 
<Docs>
  <div class="container mt-4">
    <h2> Routes </h2>
    <p> Use the sidebar to the right to find relevant API routes for what you'd like to do or the data you'd like to grab. </p>
    <h4> Happy coding! </h4>
  </div>
</Docs>
</template>
<script> 
const Docs = () => import('~/components/API/Docs')
export default {
  layout: 'api', 
  components: { Docs }
}
</script>