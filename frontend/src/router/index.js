import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Index from 'components/IndexPage'
import wowQuest from 'components/WowQuest'
import WowAuction from 'components/WowAuction'
import WowInven from 'components/WowInven'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'wowQuest',
      component: wowQuest
    },
    {
      path: '/auction',
      name: 'WowAuction',
      component: WowAuction
    },
    {
      path: '/WowInven',
      name: 'WowInven',
      component: WowInven
    }
  ]
})
