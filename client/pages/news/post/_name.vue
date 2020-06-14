<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";

h1 {
  font-size: 25px;
}

h2 {
  font-size: 17px;
  line-height: 23px;
  font-style: italic;
  font-weight: normal;
}

.metadata {
  text-transform: uppercase;
  font-weight: 500;
  color: @dark-blue;
  font-size: 14px;
}

</style>

<style scoped>

.page-content >>> h2 {
  font-size: 20px;
}

.page-content >>> ul {
  list-style: circle;
}

</style>
<template>
  <div class="w-90 mx-auto" itemscope itemtype="http://schema.org/Article">

    <picture class="mt-4 mb-3 mx-auto w-95 d-block" itemprop="image">
      <source :srcset="imageLink + '.webp'" type="image/webp">
      <source :srcset="imageLink + '.jpg'" type="image/jpeg"> 
      <img :src="imageLink + '.jpg'" class="mt-4 mb-3 mx-auto w-95 d-block" itemprop="image"/>
    </picture>

    <h1 class="mt-4"> {{ metadata.title }} </h1>
    
    <h2> {{ metadata.subtitle }} </h2>

    <div class="metadata mb-3">
      <span class="date mr-3"> 
        <fa icon="calendar-alt" class="mr-1"></fa> 
        <span itemprop="datePublished"> {{ metadata.date }} </span>
      </span>
      <span class="author"> 
        <fa icon="user-circle" class="mr-1"></fa> 
        <span itemprop="author"> {{ metadata.author }} </span>
      </span>
      <a 
        :href="'https://twitter.com/intent/tweet?text='
          + encodeURI('Check out this article on RaceBase! ')
          + '&url=https://racebase.io/post/' + name
          + '&hashtags=racebase'"
        class="ml-3" 
        target="_blank"
        data-hashtags="racebase" 
      > 
        <fa :icon="['fab', 'twitter']"></fa> Tweet
      </a>
    </div>

    <div 
      class="page-content pb-5" 
      v-html="content"
      itemprop="articleBody"
    >
    </div>

  </div>
</template>

<script>
export default {
  head () {
    let metadata = this.metadata || {}

    return {
      title: metadata.title + ' - RaceBase', 
      meta: [{
        hid: 'OpenGraph Image', 
        property: 'og:image', 
        content: this.imageLink
      }, {
        hid: 'OpenGraph Title', 
        property: 'og:title',
        content: metadata.title
      }, {
        hid: 'OpenGraph Description', 
        property: 'og:description',
        content: metadata.subtitle
      }, {
        hid: 'OpenGraph URL', 
        property: 'og:url',
        content: process.env.ROOT_URL + this.$route.fullPath
      }, {
        hid: 'Description', 
        name: 'description', 
        content: metadata.subtitle
      }]
    }
  },
  async asyncData ({ $axios, params, env }) {
    let post = await $axios.$get('posts/' + params.name)
    var content, metadata, imageLink

    if (post.code == "ENOENT")
      content = "This post doesn't exist."

    else {
      content = post.content
      metadata = post.data
      let prefix = process.env.API_URL
      imageLink = prefix + '/images/fullsize/' + metadata.image
    }

    return {
      content: content, 
      metadata: metadata, 
      imageLink: imageLink, 
      name: params.name
    }

  }
}
</script>
