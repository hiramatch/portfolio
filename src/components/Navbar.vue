<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="nav-item nav-link navbar-brand" to="/">portfolio</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/">Home</router-link>
        <router-link class="nav-item nav-link" to="/about">About</router-link>
        <router-link class="nav-item nav-link" to="/works">Works</router-link>
      </div>
    </div>
  </nav>
</template>
<style>
  .navbar {
    background-color: #fefefe;
  }
</style>
