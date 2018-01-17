<template>
<div id="stuinfo-body">
  <div id="stuinfo-display">
  <el-form label-position="right" label-width="80px" :model="stuInfo">
    <el-form-item label="学生姓名">
      <el-input v-model="stuInfo.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="stuInfo.mobile"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio v-model="stuInfo.gender" label="男">男</el-radio>
      <el-radio v-model="stuInfo.gender" label="女">女</el-radio>
    </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="_submitStuInfo">提交</el-button>
    </el-form-item>
  </el-form>
  </div>
</div>

</template>

<script>
import DB from '../../utils/db.js'

export default {
  data () {
    return {
      stuInfo: {
        id: 1,
        name: 'lvzu',
        mobile: '13777821015',
        gender: '男'
      }
    }
  },
  created () {
    this.getStuInfo()
  },
  methods: {
    _submitStuInfo () {
      const _this = this
      console.log(_this.stuInfo)
      DB.STUDENT.revice(_this.stuInfo).then(
          re => { _this.getStuInfo() },
          re => { console.loh(re) }
      )
    },
    getStuInfo () {
      const _this = this
      DB.STUDENT.get({}).then(
          re => { _this.stuInfo = re },
          re => { console.loh(re) }
      )
    }
  }
}
</script>

<style scoped>
@import './Stuinfo.css';
</style>
