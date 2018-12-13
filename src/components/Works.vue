<template>
  <div class="works">
    <h1 class="title">作品紹介</h1>
   <article class="" v-for="work in works">
    <section>
      <div class="container">
        <div class="row">
            <div class="col-sm-4">
              <img src="../assets/portfolio.png" width="300px" alt="">
            </div>
            <div class="col-sm-6">
              <h5>{{ work.title }}</h5>
              <dl>
              <dt>説明</dt>
              <dd>{{ work.description}}</dd>
              <dt>制作年</dt>
              <dd>{{ work.date }}</dd>
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
export default {
  data () {
    return {
      works: [
        { title: 'Portfolio1', description: 'description1' ,date: '2018年', url: 'www.example.com' },
        { title: 'Portfolio2', description: 'description2' ,date: '2017年', url: 'www.example.com' },
        { title: 'Portfolio3', description: 'description3' ,date: '2016年', url: 'www.example.com' }
      ]
    }
  }
}
</script>
