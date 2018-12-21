<template>
  <div class="about">
    <h1 class="title">自己紹介</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img src="../assets/about.jpg" width="100%" alt="">
        </div>
        <div class="col-sm-6">
          <dl>
            <dt>名前</dt>
            <dd>{{ about.name }}</dd>
            <dt>職業</dt>
            <dd>{{ about.occupation }}</dd>
            <dt>住まい</dt>
            <dd>{{ about.address }}</dd>
            <dt>最近ハマっていること</dt>
            <dd>
              <ul>
                <li v-for='hobby in about.hobbies'>
                  {{ hobby }}
                </li>
              </ul>
            </dd>
            <dt>スキル</dt>
            <dd>
              <ul>
                <li v-for='skill in about.skills'>
                  {{ skill }}
                </li>
              </ul>
            </dd>
            <dt>SNS</dt>
            <dd>
              <ul>
                <li v-for='item in about.sns'>
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
import Data from '../assets/data/data.json'
export default {
  data () {
    return {
      about: Data.about
    }
  }
}
</script>


<style>
dd {
  margin-left: 20px;
}
</style>
