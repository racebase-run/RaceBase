<style lang="less" scoped>
@import (reference) '~assets/less/colors.less';

@deep: ~'>>>';

.changelog @{deep} h1 {
  font-size: 30px;
}
.changelog @{deep} h2 {
  font-size: 31px;
}
.changelog @{deep} h3 {
  font-weight: 500;
  text-align: left;
  font-size: 20px;
}
.changelog @{deep} ul {
  list-style: square;
}

.api-nav {
  background: @ultra-light-grey + #050505;
  border-radius: 5px;

  a {
    display: block;
    font-size: 18px;
    padding: 5px;
    color: @bright-blue;
    font-weight: 500; 
  }

  .versions {
    padding-left: 22px; 
    list-style: square;
    a {
      font-weight: 400; 
      font-size: 16px;
      padding: 3px;
      color: @blue;
    }
  }
}
</style>

<template>
  <div class="row">
    <div class="col-md-8 col-12 lang-json">
      <div class="container mt-4">
        <div v-html="changelog" class="changelog"></div>
      </div>
    </div>
    <div class="col-md-4 col-12 mt-4">
      <h4> Quick Links </h4>
      <div class="api-nav p-2">

        <a href="#">Changelog</a>

        <ul class="versions">
          <li v-for="version in versions">
            <a :href="'/changelog#' + version">v{{version}}</a>
          </li>
        </ul>
      </div>
      <div class="mt-4"> 
        I know, I hate ads too. But if you'd like to support the site, signing up for one of these free trials helps out a bunch:
      </div>
      <div class="mx-auto mt-4 d-table">
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=42&l=ur1&category=audible&banner=0ZMTX9JHW5H1HGY50Y82&f=ifr&linkID=e76a887392087e3cc7bc2f8a7ee3d6d7&t=racebase-20&tracking_id=racebase-20" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
      </div>
      <div class="mx-auto mt-4 d-table">
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=288&l=ur1&category=kuft&banner=0T90Z3RH70R989J9PDR2&f=ifr&linkID=aa88fc31d0979d243a3d346641b8f56a&t=racebase-20&tracking_id=racebase-20" width="320" height="50" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
      </div>
      <div class="mx-auto mt-4 d-table">
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=20&l=ur1&category=primemain&banner=0PC0CRJ25SSK7HFZQKG2&f=ifr&linkID=43fc8949e778b1fd21c846da90aded24&t=racebase-20&tracking_id=racebase-20" width="120" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import changelog from '~/assets/Changelog.md'

export default {
  layout: 'api', 
  head () {
    return {
      title: 'RaceBase Changelog'
    }
  },
  asyncData () {
    return {
      changelog: changelog, 
      versions: [ '1.6.4', '1.6.3', '1.6.2', '1.6.1', '1.6.0', '1.5.9', '1.5.8', 
                  '1.5.7', '1.5.6', '1.5.5', '1.5.4', '1.5.3', '1.5.2', '1.5.9',
                  '1.5.0']
    }
  }
}
</script>