<template>
  <div class=''>
    <h1>iview实战之进阶</h1>
    <br><br>
    <div :class="classes">动态绑定类名</div>
  </div>
</template>

<script>
// new Vue({
//   'delimiter': [
//     '<<',  // 这种方法可以改变 vue默认得模板渲染得 双花括号 {{}}
//     '>>' 
//   ]
// })

// Vue.$isServer 它得值可以用来判断 当前代码运行在 服务端 还是 在 客户端

export default {
  data() {
    return {
      header: true,
      content: true,
      size: 'large'
    };
  },
  computed: {
    classes () {
      return [
        'ivu-layout', // 默认类名
        {
          'ivu-header': this.header,
          'ivu-content': this.content,
          [`ivu-${this.size}`]: this.size
        }
      ]
    }
  },
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
}
</script>

<style lang='scss' scoped>

</style>