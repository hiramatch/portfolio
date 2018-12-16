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
            <dd>{{ d.about.name }}</dd>
            <dt>住まい</dt>
            <dd>{{ d.about.address }}</dd>
            <dt>スキル</dt>
            <dd>
              <ul>
                <li v-for='skill in d.about.skills'>
                  {{ skill }}
                </li>
              </ul>
            </dd>
            <dt>SNS</dt>
            <dd>
              <ul>
                <li v-for='item in d.about.sns'>
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
      d: Data
    }
  }
}
</script>


<style>
dd {
  margin-left: 20px;
}
</style>
