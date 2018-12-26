<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <router-link class="nav-item nav-link navbar-brand" to="/">portfolio</router-link>
    <button class="navbar-toggler-icon navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/">Home</router-link>
        <router-link class="nav-item nav-link" to="/about">About</router-link>
        <router-link class="nav-item nav-link" to="/works">Works</router-link>
        <router-link class="nav-item nav-link" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>
