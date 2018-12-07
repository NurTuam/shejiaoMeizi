<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="menu-header">
        <img class="menu-avatar" src="http://img.hb.aicdn.com/492896d1e9fc6eba03994849bb65899993f803ac39db-Gbmpse_fw658"
          alt="">
        <div class="menu-title">XiaoLanSwag</div>
      </div>
      <div class="menu-ul">
        <div v-for='menu in menus' @click="updateHeader(MENU_CONVERT[menu], menu)">
          <router-link class="icon-quanbu iconfont item border-1px" :to="menu">
            <div class="menu-icon">
              <i class="iconfont " :class="'icon-'+ menu"></i>
            </div>
            <span class="menu-text">{{MENU_CONVERT[menu]}}</span>
            <div class="menu-new" v-show="menu ==='day' && news>0">
              <span>5</span>
            </div>
          </router-link>
        </div>

      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  const MENU_CONVERT = { 'welfare': '福利', 'day': '每日推荐', 'ios': 'IOS', android: 'Android', web: '前端' };
  export default
    {
      name: 'v-menu',
      props: {
        show: {
          type: Boolean,
          default:''
        }
      },
      data() {
        return {
          MENU_CONVERT: MENU_CONVERT
        };
      },
      computed: {
      ...mapState([
        'menus', 'news'
      ])
      },
      methods: {
        updateHeader(title, menu) {
          this.$store.commit('UPDATE_TITLE', title);
           this.$store.commit('UPDATE_MENUSHOW');
           if (menu === 'day') {
              this.$store.commit('UPDATE_NEWS');
           }
        }
      }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';

</style>