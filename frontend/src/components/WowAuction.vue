<template>
  <div>
    action
    <v-btn @click="getClass"></v-btn>
    <v-layout>
      <v-flex>
        <ul>
      <li v-for ="classItem in item_classes" :key="classItem.id"><a href="#" @click="getClass(null, classItem.id)"> {{classItem.name}}</a></li>
    </ul>
      </v-flex>
      <v-flex>
        <ul>
      <li v-for ="classItem in item_subclasses" :key="classItem.id"><a href="#" @click="getApiByURL(null, classItem.key.href)"> {{classItem.name}}</a></li>
    </ul>
      </v-flex>
    </v-layout>
    
   
    <pre>
       {{item}}
    
    </pre>

   
  </div>
</template>

<script>
export default {
  data () {
    return {item_classes: [],
      item_subclasses: [],
      item: {},
      devServer: 'http://localhost:3009'
    }
  },
  methods: {
    async getApiByURL (e, url) {
      try {
        var result = await this.$http.post(`${this.devServer}/wowApi/url`, {
          url: url
        })
        this['item'] = result.data
      } catch (error) {
        console.log(error)
      }
    },
    async getClass (e, id) {
      try {
        var url = `https://kr.api.blizzard.com/data/wow/item-class/?namespace=static-kr`
        if (id) {
          url = `https://kr.api.blizzard.com/data/wow/item-class/${id}?namespace=static-kr`
        } else {
          url = `https://kr.api.blizzard.com/data/wow/item-class/?namespace=static-kr`
        }

        var result = await this.$http.post(`${this.devServer}/wowApi/url`, {
          url: url
        })
        if (id) {
          this.item_subclasses = result.data.item_subclasses
        } else {
          this.item_classes = result.data.item_classes
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
