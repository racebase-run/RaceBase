<style lang="less" scoped> 

</style>

<template>
<div class="p-4"> 
    <Viewer :doc="archive.document" />
</div>
</template>

<script>
const Viewer = () => import('~/components/Results/ResultViewer')

export default {
    components: { Viewer }, 
    async asyncData({ params, $axios }) {
        let archive = await $axios.$get('/result/' + params.id + '/version/' + params.number); 
        return {
            archive: archive
        }
    }
}
</script>