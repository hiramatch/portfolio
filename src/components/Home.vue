<template>
<div id="carouselControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
      <ol class="carousel-indicators">
    <li data-target="#carouselControls" data-slide-to="0" class="active"></li>
    <li data-target="#carouselControls" data-slide-to="1"></li>
    <li data-target="#carouselControls" data-slide-to="2"></li>
  </ol>
    <div class="carousel-item active">
      <img src="https://picsum.photos/1900/500/?image=60" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h1>Welcome to Shuichi Hirama's portfolio</h1>
        <h2>This site is made with Vue.js</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/1900/500/?image=42" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h1>About</h1>
        <h2>自己紹介です</h2>
　       <a href="/about" class="btn btn-primary btn-md active" role="button" aria-pressed="true">更に詳しく</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/1900/500/?image=91" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h1>Works</h1>
        <h2>作品です</h2>
　       <a href="/works" class="btn btn-primary btn-md active" role="button" aria-pressed="true">更に詳しく</a>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>
<style>
  h1 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 600;
  }
  h2 {
    color: #ffffff;
    font-size: 30px;
    font-weight: 500;
  }
</style>

