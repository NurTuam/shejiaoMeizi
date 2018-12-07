<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      <a v-for="data in datas" :href="data.url " target="view_window">
         <v-card :data="data" ></v-card>
      </a>
  </div>

</template>

<script type="text/ecmascript-6">
  import vCard from '../card/card.vue';
  import {url} from '../../api/getType'
  export default
  {
    name: 'v-list',
    props: {
      type: {
        type: String,
        default:''
      }
    },
    data() {
      return {
        datas: [],
        page: 1,
        busy: false
      };
    },
    computed: {

    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
        this.$http.get(url,{
        	params:{type:this.type,page:this.page}
        }).then((response) => {
          this.datas = this.datas.concat(response.body.results);
          this.busy = false;
          this.$nextTick(() => {
          this.$store.commit('UPDATE_LOADING', false);
        });
        });
      },
      loadMore() {
        this.busy = true;
        this.loadTop();
        this.page++;
      }
    },
    components: {
      vCard
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .list {
    padding: 15px;
  }
</style>
