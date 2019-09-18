<template>
  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      :permanent="fixDrawer"
      app
      
    >
   <a href="#" @click="isHome =true;drawer=false;"> <h1  class="primary white--text pa-2 " > 레벨업 지역</h1>       </a>
  <!-- <router-link to="/WowInven">   <h1  class="primary white--text pa-2 mb-1 " >인벤 클래식 게시판</h1>       </router-link> -->

   
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

                <span  :class="`${open ? 'primary--text' :''}`" v-html="getLevelAreaNameByArea(item.name )">
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
          :permanent="fixDrawer"
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
    <v-toolbar
      color="primary"
      fixed
      dark
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="mr-5 align-center hidden-sm-and-down">        
        <div class="title" style="line-height:50px"><a href="/" class="" style="color:white;text-decoration: none;"> 와우 클래식 퀘스트</a></div> 
        <div style="font-size:11px">플레이포럼 자료</div>
      </v-toolbar-title>
      <div style="width:322px;height:52px;margin:0 auto;display:inline;" class="hidden-sm-and-down" >
          <ins class="kakao_ad_area" style="display:none;" 
            data-ad-unit    = "DAN-sl68ibd33y9i" 
            data-ad-width   = "320" 
            data-ad-height  = "50"></ins> 
      </div>
      <div class="px-2 white--text" style="font-size:10px">
      <!-- {{dDayCount}} -->
       
      </div>      
      <v-spacer class="hidden-sm-and-down"></v-spacer>
         
          
           <v-btn 
           href="http://www.classicwow.co.kr" target="_blank"
          class="mx-2 pa-3 py-2" outlined  large   color="grey darken-4">
           <img src="http://www.classicwow.co.kr/img/logo.png" style="width:80px;margin-right:5px;" alt="클래식 월드 오브 워크래프트 팬사이트;" title="">
          <div class="hidden-sm-and-down" style="text-align:center">클래식 월드 오브 워크래프트 팬사이트
          <br>
          <span style="font-size:9px;">http://www.classicwow.co.kr</span>

          </div>

          
          </v-btn>
         
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
           <v-btn 
           href="https://toon.at/donate/637043684917070169" target="_blank"
          class="mx-2" outlined  fab   color="grey darken-3">후원</v-btn>
    </v-toolbar>
    
      

    
    <v-content pa-0 ma-0>
       <!-- <div style="width:728px;height:90px;margin:0 auto" class="mt-3">
          <ins class="kakao_ad_area" style="display:none;" 
              data-ad-unit    = "DAN-rhm4trbf12ye" 
              data-ad-width   = "728" 
              data-ad-height  = "90"></ins> 
        </div> -->
      <v-container :class="{'pa-0': $vuetify.breakpoint.smAndDown, 'pa-5': $vuetify.breakpoint.mdAndUp}">
        <v-layout wrap  v-if="isHome" >
          <v-flex xs12> <h3 class="primary--text">동부왕국 레벨별 지역</h3></v-flex>
          <v-flex xs6 sm3 lg2 class="pa-1"  v-for="zone in levelUpListByZone('동부왕국') " :key="zone.LAND + zone.AREA">
            <v-btn class="grey darken-3 white--text" block  @click="getQuest(zone.AREA)">{{zone.AREA}}<span style="font-size:0.8em">&nbsp;({{zone.MIN_LVL}} - {{zone.MAX_LVL}})</span></v-btn>
          </v-flex>
          <v-flex xs12> <h3 class="primary--text mt-3">칼림도어 레벨별 지역</h3></v-flex>
           <v-flex xs6 sm3 lg2 class="pa-2" v-for="zone in levelUpListByZone('칼림도어') "
             :key="zone.LAND + zone.AREA">
             <v-btn class="grey darken-3  white--text" block @click="getQuest(zone.AREA)" >{{zone.AREA}} <span style="font-size:0.8em">&nbsp;({{zone.MIN_LVL}} - {{zone.MAX_LVL}})</span></v-btn>
          </v-flex>
        </v-layout>

          <!-- <v-flex  pa-3>
          
          <img :src="`${devServer}/static/와우오리퀘스트/00 동부왕국 레벨별 지역.jpg`"  :style="`width:${imageWidth};padding:20px 0;`"/>
          </v-flex>          
          <v-flex pa-3>
            <h3>칼림도어 레벨별 지역</h3>
            <img :src="`${devServer}/static/와우오리퀘스트/00 칼림도어 레벨별 지역.jpg`"  :style="`width:${imageWidth};padding:20px 0`"/>
          </v-flex> -->
       
        <v-layout wrap v-if="!isHome">          
          <!-- <a :href="`https://ko.wowhead.com/quest=826`" data-wh-icon-size="small">[item]</a> 
          
            {{auctionList.length}} 개
             {{Object.keys(actionItemGroupBy).length}} -->
            <!-- <pre>
            {{actionItemGroupBy}}
          </pre>  -->
           <!-- {{pagination}}
            <v-text-field
        v-model="search2"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
 <v-data-table
    :items="auctionList"
    :header="[{
            text: 'Item',value: 'item'
          },
          { text: 'Calories', value: 'owner' },
          { text: 'Fat (g)', value: 'ownerRealm' },
          { text: 'Carbs (g)', value: 'buyout' },
          { text: 'Protein (g)', value: 'quantity' }
      ]"
     :search="search2"
    class="elevation-1"
    dark
     :pagination.sync="pagination"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-left"> <a :href="`https://ko.wowhead.com/item=${props.item.item}`" data-wh-icon-size="small">[item]</a> </td>
      <td class="text-xs-right">{{ props.item.owner }}</td>
      <td class="text-xs-right">{{ props.item.ownerRealm }}</td>
      <td class="text-xs-right">{{ props.item.buyout }}</td>
      <td class="text-xs-right">{{ props.item.quantity }}</td>
    </template>
  </v-data-table> -->
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
              <tr v-for="action in auctionList" :key="action.auc"> 
              <td> <a :href="`https://ko.wowhead.com/item=${action.item}`"  >[item]</a> </td>
              <td>{{action.owner}}</td>
              <td>{{action.ownerRealm}}</td>
              <td text-xs-right>{{action.bid}}</td>
              <td text-xs-right>{{action.buyout}}</td>
              <td text-xs-right>{{action.quantity}}</td>
              <td text-xs-right>{{action.bid/action.quantity}}</td>
            </tr>
            </table> -->
             
          
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
    app
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
import { setTimeout, setInterval } from 'timers'

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
      levelUPAreaList: [],
      classList: [],
      questList: [],
      classQuestlist: [],
      dDayCount: '',
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
    fixDrawer () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return false
        case 'lg': return true
        case 'xl': return true
      }
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
      return  // '' //'http://localhost:3009'
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
    this.$vuetify.theme = {
      primary: '#242424',
      secondary: '#1976D2',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
    var self = this
    var dDayCountInter = function () {
      var release = self.$moment('2019-08-27 07:00:00')
      var now = self.$moment()
      var diff = release.diff(now)
      var diffDuration = self.$moment.duration(diff)
      if (diff > 0) {
        self.dDayCount = `클래식 오픈까지 ${diffDuration.days()}일 ${diffDuration.hours()}시간 ${diffDuration.minutes()}분 ${diffDuration.seconds()}초 남았습니다.`
      } else {
        self.dDayCount = `클래식 오픈이후 ${Math.abs(diffDuration.days())}일 ${Math.abs(diffDuration.hours())}시간 ${Math.abs(diffDuration.minutes())}분 ${Math.abs(diffDuration.seconds())}초 지났습니다.`
      }
    }
    setInterval(dDayCountInter, 1000)
    this.getLevelUpArea()
    this.getAuction()
    this.getDirectory()
  },
  methods: {
    getLevelAreaNameByArea (area) {
      var list = this.levelUPAreaList.filter(zone => { return zone.AREA === area })
      if (list.length === 1) {
        return `${list[0].AREA} <span style="font-size:0.7em">(${list[0].MIN_LVL}-${list[0].MAX_LVL})</span>`
      } else {
        return area
      }
    },
    levelUpListByZone (LAND) {
      var list = this.levelUPAreaList.filter(zone => { return zone.LAND === LAND })
      return list.sort(function (a, b) {
        var alvel = parseInt(a.MIN_LVL)
        var blvel = parseInt(b.MIN_LVL)
        return alvel < blvel ? -1 : 1
      })
      // return list.sort((a, b) => { return parseInt(a.MIN_LVL) > parseInt(b.MIN_LVL) })
    },
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
    async getLevelUpArea () {
      var result = await this.$http.get(`${this.devServer}/levelArea`, {})
      this.levelUPAreaList = result.data
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
        this.drawer = false
      } catch (error) {
        console.log(error)
      }
      this.drawer = false
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
