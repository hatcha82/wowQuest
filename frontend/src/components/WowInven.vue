<template>
  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
   <a href="/"> <h1  class="primary white--text pa-2 mb-1 hidden-sm-and-up" > 레벨업 지역</h1>       </a>
    <h1  class="primary white--text pa-2" >일반 퀘스트<v-btn @click="reset" small  icon  color="primary lighten-1"> <v-icon>refresh</v-icon></v-btn></h1>         
    <div class="pa-3">
          <v-treeview
          v-model="tree"
            v-if="items.length > 0"
            :items="items"
            :open.sync="open"
            :multiple-active="false"
            open-on-click
          >
            <template v-slot:prepend="{ item, active }">
              <v-icon
                v-if="!item.children"
                :color="active ? 'primary' : ''"
              >
              </v-icon>
            </template>
            <template v-slot:label="{ item, open }">

               <div class="questItem"
                v-if="!item.children"
                @click="getQuest(item.area,item.name)"
              >{{ item.name | fileFilter }} </div>
              <div
                v-else
                @click="getQuest(item.name)">

                <span  :class="`${open ? 'primary--text' :''}`">
             {{ item.name | fileFilter }}
                </span>
              </div>
            </template>

          </v-treeview>
    </div>
      <h1  class="primary white--text pa-2" >직업 퀘스트<v-btn @click="reset" small  icon  color="primary lighten-1"> <v-icon>refresh</v-icon></v-btn></h1>     
     <div class="pa-3">
          <v-treeview
            v-if="classQuestlist.length > 0"
            :items="classQuestlist"
            :open.sync="openClass"
            
            open-on-click
          >
            <template v-slot:label="{ item }">
               <div class="questItem"
                v-if="!item.children"
                @click="getClassQuest(item)"
              >{{ item.name | fileFilter }} </div>
              <div
                v-else
              >
                <span :color="item.name.indexOf(search) > -1 ? 'blue' : 'red'">
                  {{ item.name | fileFilter }}
                </span>
              </div>
            </template>

          </v-treeview>
     

    </div>
    </v-navigation-drawer>
     <v-navigation-drawer
     class="hidden-sm-and-down"
        fixed
        app
        right
        style="margin-top:85px;margin-right:20px"
        :width="160"
        :height="620"
        value="true"
      >
      <div style="width:160px;height:600px;"  >
      <ins class="kakao_ad_area" style="display:none;" 
        data-ad-unit    = "DAN-ure2qm9n1t2d" 
        data-ad-width   = "160" 
        data-ad-height  = "600"></ins> 
      </div>
      </v-navigation-drawer> 
    <v-toolbar
      color="primary"
      fixed
      dark
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center hidden-sm-and-down">
        <span class="title" style="line-height:50px"><a href="/" class="" style="color:white;text-decoration: none;"> WoW Original Quest </a></span>         
      </v-toolbar-title>
      <div style="width:322px;height:52px;margin:0 auto;display:inline;" class="hidden-sm-and-down" >
          <ins class="kakao_ad_area" style="display:none;" 
            data-ad-unit    = "DAN-sl68ibd33y9i" 
            data-ad-width   = "320" 
            data-ad-height  = "50"></ins> 
      </div>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
          <v-text-field
            v-model="search"
            label="퀘스트명을 입력해주세요."
            append-icon="search"
            flat
            solo-inverted
            single-line
            hide-details
            clearable
            clear-icon="close"
            @keyup.enter="searchQuest"
          />
      
    </v-toolbar>
    
      

    
    <v-content pa-0 ma-0>
     
      <div class="mt-2">
       <iframe :src="`${devServer}/board/powerbbs.php?come_idx=5417`" style="display:block; width:100%; height: 100vh"></iframe>
      </div>
    </v-content>
    <transition name="back-to-top-fade">
     <v-btn  v-if="visible" fab dark  fixed bottom right style="bottom:60px" @click="$vuetify.goTo(0)" color="primary">
      <v-icon dark>keyboard_arrow_up</v-icon>
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
      drawer: false,
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
      return ''
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
      var visibleoffset = 0
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
