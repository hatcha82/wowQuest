<template>
  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      :temporary="true"
      clipped
      app
    >
    <a href="/"> <h1  class="primary white--text pa-2 mb-1 hidden-sm-and-up" > 레벨업 지역</h1>       </a>
    
    </v-navigation-drawer>
     <v-navigation-drawer
     class="hidden-sm-and-down"
        fixed
        app
        right
        style="margin-top:85px;margin-right:20px"
        :width="160"
        :height="620"
        :value="false"
      >
      <div style="width:160px;height:600px;"  >
      <ins class="kakao_ad_area" style="display:none;" 
        data-ad-unit    = "DAN-ure2qm9n1t2d" 
        data-ad-width   = "160" 
        data-ad-height  = "600"></ins> 
      </div>
      </v-navigation-drawer> 
   
    
      

    
    <v-content pa-0 ma-0>
     
      <div class="">
       <iframe src="http://m.inven.co.kr/board/powerbbs.php?come_idx=5417" style="display:block; width:100%; height:100vh;border:none"></iframe>
      </div>
    </v-content>
    <transition name="back-to-top-fade">
     <v-btn fab dark  fixed bottom left style="bottom:60px" @click="$router.push({ path: '/' })" color="primary">
     Quest
    </v-btn>
    </transition>
    <v-footer
    inset
     height="auto"
     fixed
     pa-1
    >
      <ins class="kakao_ad_area" style="display:none;" 
 data-ad-unit    = "DAN-ubge40ui0xma" 
 data-ad-width   = "320" 
 data-ad-height  = "50"></ins> 
    
     
    </v-footer>
   
  </v-app>
  
</template>

<script>
import VmBackTop from 'vue-back-top'
import { setTimeout } from 'timers'

export default {
  filters: {
    components: {VmBackTop},
    fileFilter (value) {
      return value.replace('.jpg', '').replace('.png', '').replace('.htm', '')
    }
  },
  data () {
    return {
      pagination: {
        page: 0,
        rowsPerPage: 25 // -1 for All",
      },
      isHome: true,
      visible: false,
      auctionList: [],
      tree: [],
      active: [],
      drawer: null,
      isClassShow: true,
      classQuestURL: '',
      show: false,
      open: [],
      openClass: [],
      search: null,
      search2: '',
      caseSensitive: false,
      list: [],
      items: [],
      area: null,
      classList: [],
      questList: [],
      classQuestlist: [],
      headers: [
        {
          sortable: false,
          text: '지역',
          value: 'name'
        }
      ]
    }
  },
  computed: {

    actionItemGroupBy () {
      var groupItem = this._.groupBy(this.auctionList, 'item')
      return groupItem || []
    },
    imageWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '400px'
        case 'md': return '500px'
        case 'lg': return '600px'
        case 'xl': return '600px'
      }
    },
    devServer () {
      return 'http://localhost:3009'
    },
    filter () {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
    }

  },
  watch: {
    pagination () {
      window.$WowheadPower.hideTooltip()
      setTimeout(
        function () {
          window.$WowheadPower.refreshLinks()
          window.$WowheadPower.hideTooltip()
        }
      , 1)
    },
    search (value) {
      if (value === null) {
        this.items = this.list.filter(obj => obj.type === 'dir')
        this.classQuestlist = this.classList.filter(obj => obj.type === 'dir')
      } else if (value.length === 0) {
        this.items = this.list.filter(obj => obj.type === 'dir')
        this.classQuestlist = this.classList.filter(obj => obj.type === 'dir')
      }
    }
  },
  mounted () {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)

    this.getAuction()
    this.getDirectory()
  },
  methods: {
    catchScroll () {
      var visibleoffset = -100
      const pastTopOffset = window.pageYOffset > parseInt(visibleoffset)
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(visibleoffset)
      this.visible = parseInt(visibleoffset) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
     // this.scrollFn(this)
    },
    backtoTopOn () {
      return window.scrollY
    },
    reset () {
      this.items = []
      this.getDirectory()
    },
    async getAuction () {
      var result = await this.$http.get(`${this.devServer}/wowApi`, {})
      this.auctionList = result.data.auctions
      setTimeout(
        function () {
          window.$WowheadPower.refreshLinks()
          window.$WowheadPower.hideTooltip()
        }
      , 1)
    },
    searchQuest () {
      var keyword = this.search
      this.items = this.list.filter(obj => {
        var area = obj.name
        var questList = obj.children
        var foundQuest = questList.filter(quest => {
          return quest.name.indexOf(keyword) > -1
        })
        if (foundQuest.length > 0) {
          obj.children = foundQuest
        }

        return area.indexOf(keyword) > -1 || foundQuest.length > 0
      })
      this.classQuestlist = this.classList.filter(obj => {
        var area = obj.name
        var questList = obj.children
        var foundQuest = questList.filter(quest => {
          return quest.name.indexOf(keyword) > -1
        })
        if (foundQuest.length > 0) {
          obj.children = foundQuest
        }

        return area.indexOf(keyword) > -1 || foundQuest.length > 0
      })
      this.drawer = true
    },
    async getDirectory () {
      try {
        this.isClassShow = false
        var result = await this.$http.get(`${this.devServer}/list`, {})
        this.list = result.data
        this.items = this.list.filter(obj => obj.type === 'dir')
        result = await this.$http.get(`${this.devServer}/classQuestlist`, {})
        this.classList = result.data
        this.classQuestlist = this.classList.filter(obj => obj.type === 'dir')
       // this.getQuest(this.items[0].name)
      } catch (error) {
        console.log(error)
      }
    },
    getClassQuest (item) {
      this.isClassShow = true
      this.isHome = false
      var url = `${this.devServer}/static/와우오리퀘스트/와우섬게 직업퀘/${item.area}/${item.name}`
      this.classQuestURL = url

      if (this.$vuetify.breakpoint.name === 'xs') {
        this.drawer = false
      }
    },
    async getQuest (area, quest) {
      try {
        this.isHome = false
        this.isClassShow = false
        this.area = area
        var result = await this.$http.get(`${this.devServer}/list/${area}`, {})
        this.questList = result.data
        if (quest) {
          document.getElementById(quest).scrollIntoView()
          window.scrollBy(0, -40)
          if (this.$vuetify.breakpoint.name === 'xs') {
            this.drawer = false
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scope>
  .questItem{
     width:200px;margin-bottom:10px;margin-left:-40px
  }
</style>
