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
    <h1  class="primary white--text pa-2" >일반 퀘스트</h1>         
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

              <div
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
      <h1  class="primary white--text pa-2" >직업 퀘스트</h1>     
     <div class="pa-3">
          <v-treeview
            v-if="classQuestlist.length > 0"
            :items="classQuestlist"
            :open.sync="openClass"
            
            open-on-click
          >
            <template v-slot:label="{ item }">
              <a
                v-if="!item.children"
                @click="getClassQuest(item)"
              >{{ item.name | fileFilter }} </a>
              <a
                v-else
              >
                <span :color="item.name.indexOf(search) > -1 ? 'blue' : 'red'">
                  {{ item.name | fileFilter }}
                </span>
              </a>
            </template>

          </v-treeview>
     

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
        <span class="title">WoW Original Quest</span>
      </v-toolbar-title>
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
      <v-container fill-height>
        <v-layout
      wrap
    >
      <v-flex px-3 v-if="!isClassShow">
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
  </v-app>
  
</template>

<script>
export default {
  filters: {
    fileFilter (value) {
      return value.replace('.jpg', '').replace('.png', '').replace('.htm', '')
    }
  },
  data () {
    return {
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
    imageWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '400px'
        case 'md': return '500px'
        case 'lg': return '600px'
        case 'xl': return '800px'
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
    this.getDirectory()
  },
  methods: {
    reset () {
      this.items = []
      this.getDirectory()
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

<style>

</style>
