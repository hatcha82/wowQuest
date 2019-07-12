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
        <span class="title" style="line-height:50px">WoW Original Quest</span>         
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
     

       <!-- <div style="width:728px;height:90px;margin:0 auto" class="mt-3">
          <ins class="kakao_ad_area" style="display:none;" 
              data-ad-unit    = "DAN-rhm4trbf12ye" 
              data-ad-width   = "728" 
              data-ad-height  = "90"></ins> 
        </div> -->
       
      <v-container fill-height wrap :class="{'pa-0': $vuetify.breakpoint.smAndDown, 'pa-5': $vuetify.breakpoint.mdAndUp}">
        <v-layout wrap>
          <!-- <v-flex>
            {{auctionList.length}} 개
             {{Object.keys(actionItemGroupBy).length}}
            <pre>
            {{actionItemGroupBy}}
          </pre> -->


            <!-- <table>
              <tr>
              <th>아이템</th>
              <th>등록자</th>
              <th>렐름</th>
              <th>경매금액</th>
              <th>바로 사기</th>
              <th>수량</th>
              <th>단가</th>
              </tr>
              <tr v-for="action in auctionList.auctions" :key="action.auc"> 
              <td> {{action.item}}</td>
              <td>{{action.owner}}</td>
              <td>{{action.ownerRealm}}</td>
              <td text-xs-right>{{action.bid}}</td>
              <td text-xs-right>{{action.buyout}}</td>
              <td text-xs-right>{{action.quantity}}</td>
              <td text-xs-right>{{action.bid/action.quantity}}</td>
             
            </tr>
            </table>
             
          </v-flex>
          -->
          <v-flex v-if="!isClassShow">
            <v-sheet class="pa-4 align-center primary lighten-2" dark>
              {{ area }}
            </v-sheet>
            <v-card
              v-for="quest in questList"
              :key="quest.name"
              class="pa-3 text-sm-center "
            >
              <img
                :id="quest.name"
                :src="`${devServer}/static/와우오리퀘스트/${area}/${quest.name}`"
                :style="`width:${imageWidth};padding:20px 0`"
            ></v-card>
          </v-flex>
          <v-flex px-3 v-if="isClassShow">
            <iframe :src="classQuestURL" style="display:block; width:100%; height: 100vh"></iframe>
          </v-flex>
        </v-layout>
      </v-container>
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

export default {
  filters: {
    components: {VmBackTop},
    fileFilter (value) {
      return value.replace('.jpg', '').replace('.png', '').replace('.htm', '')
    }
  },
  data () {
    return {
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
      // var result = await this.$http.get(`${this.devServer}/wowApi`, {})
      this.auctionList = [] // result.data.auctions
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
        this.getQuest(this.items[0].name)
      } catch (error) {
        console.log(error)
      }
    },
    getClassQuest (item) {
      this.isClassShow = true
      var url = `${this.devServer}/static/와우오리퀘스트/와우섬게 직업퀘/${item.area}/${item.name}`
      this.classQuestURL = url

      if (this.$vuetify.breakpoint.name === 'xs') {
        this.drawer = false
      }
    },
    async getQuest (area, quest) {
      try {
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
