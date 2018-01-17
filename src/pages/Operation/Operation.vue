<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="时间"
      width="300">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="课程名称"
      width="280">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>课程描述: {{ scope.row.desc  }}</p>
          <p>课程详情: {{ scope.row.detail }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="教师姓名"
      width="280">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.teacher }}</el-tag>
        </div>
      </template>
    </el-table-column>
     <el-table-column label="实验材料" width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">下载</el-button>
      </template>
    </el-table-column>
   <el-table-column
      label="教室">
      <template slot-scope="scope">
        <i class="el-icon-location"></i>
        <span style="margin-left: 10px">{{ scope.row.lab }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import DB from '../../utils/db.js'

export default {
  data () {
    return {
      tableData: [{
        name: '计算机原理实验（一）',
        date: '2016-05-02 19:00-21:00',
        teacher: '庄巧莉',
        lab: '3N-132',
        desc: '第二节实验',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '算法竞赛入门经典',
        date: '2017-11-04 15:00-17:00',
        teacher: '肖荣',
        lab: '2N-225',
        desc: '数据结构',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机网络',
        date: '2016-05-01 19:00-21:00',
        teacher: '叶海荣',
        lab: '4N-132',
        desc: 'TCP/IP',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机原理实验（一）',
        date: '2018-01-12 07:00-09:00',
        teacher: '三四五',
        lab: '3N-132',
        desc: '第一节实验',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机原理实验（一）',
        date: '2016-05-02 19:00-21:00',
        teacher: '庄巧莉',
        lab: '3N-132',
        desc: '第二节实验',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '算法竞赛入门经典',
        date: '2017-11-04 15:00-17:00',
        teacher: '肖荣',
        lab: '2N-225',
        desc: '数据结构',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机网络',
        date: '2016-05-01 19:00-21:00',
        teacher: '叶海荣',
        lab: '4N-132',
        desc: 'TCP/IP',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机原理实验（一）',
        date: '2018-01-12 07:00-09:00',
        teacher: '三四五',
        lab: '3N-132',
        desc: '第一节实验',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机原理实验（一）',
        date: '2016-05-02 19:00-21:00',
        teacher: '庄巧莉',
        lab: '3N-132',
        desc: '第二节实验',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '算法竞赛入门经典',
        date: '2017-11-04 15:00-17:00',
        teacher: '肖荣',
        lab: '2N-225',
        desc: '数据结构',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机网络',
        date: '2016-05-01 19:00-21:00',
        teacher: '叶海荣',
        lab: '4N-132',
        desc: 'TCP/IP',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }, {
        name: '计算机原理实验（一）',
        date: '2018-01-12 07:00-09:00',
        teacher: '三四五',
        lab: '3N-132',
        desc: '第一节实验',
        detail: 'operation detail',
        url: 'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/%E4%BF%A1%E7%94%B5%E5%AE%9E%E9%AA%8C%E6%95%99%E5%AD%A6%E7%A4%BA%E8%8C%83%E4%B8%AD%E5%BF%83%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%8820170328.doc'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
      fetch().then(res => res.blob().then(blob => {
        var a = document.createElement('a')
        var url = window.URL.createObjectURL(blob)   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
        var filename = res.headers.get('Content-Disposition')
        a.href = url
        a.download = filename
        a.click()
        window.URL.revokeObjectURL(url)
      }))
      window.open(this.tableData[index].url)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>