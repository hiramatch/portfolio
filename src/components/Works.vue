<template>
  <div class="works">
    <h1 class="title">作品紹介</h1>
   <article class="" v-for="work in works">
    <section>
      <div class="container">
        <div class="row row-works">
            <div class="col-sm-4">
              <img :src="work.img_src" width="100%" alt="">
            </div>
            <div class="col-sm-6">
              <dl>
              <dt>タイトル</dt>
              <dd>{{ work.title }}</dd>
              <dt>説明</dt>
              <dd>{{ work.description}}</dd>
              <dt>制作年</dt>
              <dd>{{ work.date }}</dd>
              <dt>技術</dt>
              <dd>{{ work.skill }}</dd>
              <dt>URL</dt>
              <dd><a :href=work.url>{{ work.title }}</a></dd>
              </dl>
            </div>
        </div>
      </div>
    </section>
</article>
</div>

</template>
<script>
import Data from '../assets/data/data.json'
export default {
  data () {
    return {
      works: Data.works
    }
  }
}
</script>
<style>
.row-works {
  margin-top: 40px;
}
</style>
