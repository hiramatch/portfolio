import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Works from './components/Works.vue'
import Contact from './components/Contact.vue'
import Users from './components/demo/Users.vue'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import PageNotFound from './components/PageNotFound.vue'

Vue.use(Router)
Vue.use(ServerTable)
Vue.use(ClientTable)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/works/1',
      name: 'users',
      component: Users
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})
