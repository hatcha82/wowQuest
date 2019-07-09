<template>
  <div>
  
    <v-navigation-drawer
      app
      dark
      floating
      mobile-break-point="991"
      permanent
      width="400"
    >
      <v-card

        class="mx-auto"
      >
        <v-sheet class="pa-3 primary lighten-2">
          <v-text-field
            v-model="search"
            label="퀘스트명을 입력해주세요."
            dark
            flat
            solo-inverted
            hide-details
            clearable
            clear-icon="mdi-close-circle-outline"
            @keyup.enter="searchQuest"
          />

        </v-sheet>
        <v-card-text>
          <v-treeview
            v-if="items.length > 0"
            :items="items"
            :open.sync="open"
            open-on-click
          >

            <template v-slot:label="{ item }">

              <a
                v-if="!item.children"
                @click="getQuest(item.area,item.name)"
              >{{ item.name | fileFilter }} </a>
              <a
                v-else
                @click="getQuest(item.name)">

                <span :color="item.name.indexOf(search) > -1 ? 'blue' : 'red'">
                  {{ item.name | fileFilter }}
                </span>

              </a>
            </template>

          </v-treeview>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-layout
      wrap

    >

      <v-flex px-3 >
        <v-sheet class="pa-4 align-center primary lighten-2">
          {{ area }}
        </v-sheet>
        <v-card
          v-for="quest in questList"
          :key="quest.name"
          class="pa-3 text-sm-center "
        >
          <img
            :id="quest.name"
            :src="`/static/와우오리퀘스트/${area}/${quest.name}`"
            style="width:540px;padding:20px 0"
        ></v-card>
      </v-flex>
    </v-layout>
  
  </div>
</template>

<script>
export default {
  filters: {
    fileFilter (value) {
      return value.replace('.jpg', '').replace('.png', '')
    }
  },
  data () {
    return {
      show: false,
      open: [],
      search: null,
      caseSensitive: false,
      list: [],
      items: [],
      area: null,
      questList: [],
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
      } else if (value.length === 0) {
        this.items = this.list.filter(obj => obj.type === 'dir')
      }
    }
  },
  mounted () {
    this.getDirectory()
  },
  methods: {
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
    },
    async getDirectory () {
      try {
        var result = await this.$http.get(`/list`, {})
        this.list = result.data

        this.items = this.list.filter(obj => obj.type === 'dir')
      } catch (error) {
        console.log(error)
      }
    },
    async getQuest (area, quest) {
      try {
        this.area = area
        var result = await this.$http.get(`/list/${area}`, {})
        this.questList = result.data
        if (quest) {
          document.getElementById(quest).scrollIntoView()
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
