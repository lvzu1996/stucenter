<template>
<div>
<el-table
    :data="tableData"
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
     <el-table-column label="实验材料">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">上传</el-button>
      </template>
      <el-upload
        class="upload-demo"
        action="localhost:8080/api/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        on-change="hideupload"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-table-column>
 
  </el-table>
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
    :on-success="hideupload"
    v-if="uploadshow">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传doc文件</div>
  </el-upload>
</div>
  
</template>

<script>
// import DB from '../../utils/db.js'

export default {
  data () {
    return {
      tableData: [{
        name: 'lvzu',
        course: '计算机原理实验（一',
        download: 'https://nba.com'
      }, {
        name: 'asan',
        course: '计算机网络',
        download: 'https://nba.com'
      }, {
        name: '闫大力',
        course: '数据库盖伦',
        download: 'https://nba.com'
      }, {
        name: '陶冶器',
        course: 'ACM',
        download: 'https://nba.com'
      }, {
        name: '张三',
        course: '高等数学',
        download: 'https://nba.com'
      }, {
        name: '李四',
        course: '编译原理',
        download: 'https://nba.com'
      }, {
        name: '王五',
        course: '计算机原理实验（一',
        download: 'https://nba.com'
      }, {
        name: '哧溜',
        course: '计算机原理实验（一',
        download: 'https://nba.com'
      }],
      uploadshow: false,
      fileList: []
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
      this.uploadshow = true
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      this.uploadshow = false
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    hideupload () {
      if (this.uploadshow) {
        this.uploadshow = false
      }
    }
  }
}
</script>