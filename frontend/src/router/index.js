import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Index from 'components/IndexPage'
import Show from 'components/ShowPage'
import wowQuest from 'components/WowQuest'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'wowQuest',
      component: wowQuest
    },
    {
      path: '/:id',
      name: 'show',
      component: Show
    }
  ]
})
