<template>
  <div id="operation">
    <el-col :span="12" style="width:203px;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @select="_navigateTo"
      background-color="#eef1f6">
      <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>实验课程安排</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-edit"></i>
        <span slot="title">实验报告</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-tickets"></i>
        <span slot="title">系统推送</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-mobile-phone"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>

<script>
const keyUrlMap = {
  1: 'operation',
  2: 'report',
  3: 'push',
  4: 'stuinfo'
}
export default {
  data () {
    return {}
  },
  methods: {
    _navigateTo (key) {
      this.$router.push('/' + keyUrlMap[key])
    }
  }

}
</script>

<style scoped>

#operation{
    position: fixed;
    width: 203px;
    background-color:#eef1f6;
    top: 60px;
    bottom: 0px;
    left: 0px;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
