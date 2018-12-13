<template>
  <div class="about">
    <h1 class="title">自己紹介</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img src="../assets/about.jpg" width="300px" alt="">
        </div>
        <div class="col-sm-6">
          <dl>
            <dt>名前</dt>
            <dd>{{ name }}</dd>
            <dt>住まい</dt>
            <dd>{{ address }}</dd>
            <dt>スキル</dt>
            <dd>{{ skill }}</dd>
            <dt>SNS</dt>
            <dd>
              <ul>
                <li v-for='item in sns'>
                  {{ item.term}}: <a :href=item.href>{{ item.description }}</a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'Name',
      address: 'Address',
      skill: 'Skill',
      sns:  [
             {term: 'email', href: 'mailto:xxx@gmail.com', description: 'xxx'},
             {term: 'twitter', href: 'https://www.twitter.com/yyy', description: 'yyy'},
             {term: 'GitHub', href: 'https://www.github.com/zzz', description: 'zzz'}
            ]
    }
  }
}
</script>


<style>
dd {
  margin-left: 20px;
}
</style>
