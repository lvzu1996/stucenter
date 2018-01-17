<template>
<div>
  <div id='manage-header'>
    <div id="manage-title">学生个人中心管理页</div>
    <div id="manager-info">
      <img :src="managerAvatarUrl" @click="dialogVisible = true">
      <span>{{managerName}}</span>
    </div>
    
  </div>
<el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确定要登出？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="_logOut">确 定</el-button>
      </span>
    </el-dialog>
</div>

</template>

<script>
import store from '../store/store.js'
export default {
  name: 'Header',
  data () {
    return {
      managerAvatarUrl: this.$store.state.managerAvatarUrl,
      managerName: this.$store.state.managerName,
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认取消？')
              .then(_ => {
                done()
              })
              .catch(_ => {})
    },
    _logOut () {
      this.$emit('logOut')
    }
  },
  store
}
</script>

<style scoped>

#manage-header{
  position: fixed;
  width: 100%;
  height: 60px;
  top:0;
  left:0;
  background-color:#38A0FC;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#manage-title{
  display: flex;
  align-items: center;
  font-size: 18px;
  padding:0 20px;
  height: 100%;
  color: #fff;
  text-align: center;
  border-color: rgba(238, 241, 146, 0.3);
  border-right-width: 1px;
  border-right-style: solid;
}

#manager-info{
  display: flex;
  align-items: center;
  color: #fff;
  position: absolute;
  right:50px;
}
#manager-info>img{
  width: 40px;
  height: 40px;
  border-radius:50%; 
  overflow:hidden;
}
#manager-info>span{
  padding-left: 10px;
}

</style>
