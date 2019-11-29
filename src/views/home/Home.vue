<template>
  <div id="home">
    <nav-bar class="nav-home"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from  'components/common/navbar/NavBar'
  import {getHomeMutiData} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        binner: [],
        recommonds: []
      }
    },
    created() {
      //请求多个数据
      getHomeMutiData().then(res => {
        this.binner = res.binner.list
      }).catch(err => {
        return err
      })
    }
  }
</script>

<style scoped>
  .nav-home {
    background-color: var(--color-tint);
  }
</style>
