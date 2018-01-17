<template>
  <div id="push-body">
    <el-switch
      v-model="isReaded"
      active-text="已读"
      inactive-text="未读">
    </el-switch>
    <div v-if="isReaded">
      <el-table
    :data="readedPushList"
    style="width: 100%">
    <el-table-column
      label="学生姓名"
      width="300">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="课程姓名"
      width="280">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.course }}</el-tag>
        </div>
      </template>
    </el-table-column>
     <el-table-column label="内容材料">
      <template slot-scope="scope">
       {{ scope.row.content }}
      </template>
    </el-table-column>
 
  </el-table>
    </div>
    <div v-if="!isReaded">
<el-table
    :data="unReadedPushList"
    style="width: 100%">
    <el-table-column
      label="学生姓名"
      width="300">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="课程姓名"
      width="280">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.course }}</el-tag>
        </div>
      </template>
    </el-table-column>
     <el-table-column label="内容材料" >
      <template slot-scope="scope">
       {{ scope.row.content }}
      </template>
    </el-table-column>
 
  </el-table>
    </div>
  </div>
</template>

<script>
import DB from '../../utils/db.js'

export default {
  data () {
    return {
      isReaded: true,
      readedPushList: [{
        name: 'lvzu',
        course: '计算机网络',
        content: 'csinndsfnsdf'
      }, {
        name: 'lvzu',
        course: '数据库盖伦',
        content: '12312312312312'
      }, {
        name: 'lvzu',
        course: '计算机网络',
        content: '呢广东省内地欧神诺搜到你'
      }, {
        name: 'lvzu',
        course: '算法竞赛入门',
        content: '草拟手弩IC你才是'
      }, {
        name: 'lvzu',
        course: 'acm',
        content: '欧萨沉默in第三次偶滴神'
      }, {
        name: 'lvzu',
        course: 'TCP/IP',
        content: '四大牛市的hi与设备丢失比u'
      }, {
        name: 'lvzu',
        course: '计算机网络',
        content: '呢广东省内地欧神诺搜到你'
      }, {
        name: 'lvzu',
        course: '算法竞赛入门',
        content: '草拟手弩IC你才是'
      }, {
        name: 'lvzu',
        course: 'acm',
        content: '欧萨沉默in第三次偶滴神'
      }, {
        name: 'lvzu',
        course: 'TCP/IP',
        content: '四大牛市的hi与设备丢失比u'
      }, {
        name: 'lvzu',
        course: '计算机网络',
        content: '呢广东省内地欧神诺搜到你'
      }, {
        name: 'lvzu',
        course: '算法竞赛入门',
        content: '草拟手弩IC你才是'
      }, {
        name: 'lvzu',
        course: 'acm',
        content: '欧萨沉默in第三次偶滴神'
      }, {
        name: 'lvzu',
        course: 'TCP/IP',
        content: '四大牛市的hi与设备丢失比u'
      }],
      unReadedPushList: [{
        name: 'lvzu',
        course: 'http',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: '从你说你从你的',
        content: '才能拿到市场哦哦年底'
      }, {
        name: 'lvzu',
        course: '充电技术能查到',
        content: '说的你手动if'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: '从你说你从你的',
        content: '才能拿到市场哦哦年底'
      }, {
        name: 'lvzu',
        course: '充电技术能查到',
        content: '说的你手动if'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }, {
        name: 'lvzu',
        course: 'conputer',
        content: 'hahahahahah'
      }]
    }
  },
  methods: {
    _getPushInfo () {
      DB.SYSTEM.get({
        stuid: 1
      }).then(
        re => { console.log(re) },
        re => { console.log(re) }
      )
    }
  }
}
</script>

<style scoped>
@import './Push.css';
</style>