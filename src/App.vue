<template>
  <div id="app">
    <HeaderTabs></HeaderTabs>
    <div style="height: 30px;width: 20px;margin: 5px auto">{{url}}</div>
    <router-view/>
  </div>
</template>

<script>
import Chat from './views/Chat'
import HeaderTabs from './components/common/HeaderTabs'
export default {
  name: 'App',
  data () {
    return {
      url: this.$route.path
    }
  },
  components: {
    Chat,
    HeaderTabs
  },
  watch: {
    '$route.path': function (val) {
      this.url = val
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: -4px;
    position: absolute;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
</style>
