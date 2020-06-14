<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/sizes.less";

a {
  color: @blue;
}

.story {
  h3, h4 {
    text-transform: none;
    font-weight: normal;
  }

  h3 {
    color: @blue;
    text-transform: none;
    font-size: 19px;
    text-align: left;
  }

  h4 {
    font-style: italic;
    line-height: 20px;
    text-transform: none;
    font-size: 15px;
    margin-bottom: 12px;
    @media (min-width: @large) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  picture, img {
    width: 100%;
  }

}

.metadata {
  span {
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
  }
}

</style>

<template>
<div class="container-fluid px-0 mb-4">
  <div class="story row">
    <nuxt-link :to="'news/post/' + link" class="col-md-5 col-12 mb-3 mx-auto">
      <picture>
        <source
          sizes="(min-width: 768px) 281px"
          :srcset="imageLink.replace('@2x', '') + '.webp 281w,' +
                   imageLink + '.webp 562w'" 
          type="image/webp"
        /> 
        <img 
          sizes="(min-width: 768px) 281px"
          :srcset="imageLink.replace('@2x', '') + '.jpg 281w, ' + 
                   imageLink + '.jpg 562w'" 
        />
      </picture>
    </nuxt-link>
    <div class="col-md-7 col-12 mx-auto">
      <h3>
        <nuxt-link :to="'news/post/' + link"> {{ story.title }} </nuxt-link>
      </h3>
      <div class="metadata mb-2">
        <span class="date mr-2"> {{ story.date }} </span>
        <span> <fa icon="user-circle"></fa> {{ story.author }}</span>
      </div>
      <h4>{{ story.subtitle }}</h4>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'news-item',
  props: [ 'story', 'link' ],
  created () {
    this.generateImageLink()
  },
  watch: {
    story: function() {
      this.generateImageLink()
    }
  },
  methods: {
    generateImageLink: function() {
      let prefix = process.env.API_URL
      this.imageLink = prefix + '/images/thumbnails@2x/' + this.story.image
    }
  },
  data () {
    return {
      imageLink: ""
    }
  }
}
</script>