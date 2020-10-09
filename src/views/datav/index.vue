<template>
  <div id="location">
    <div class="el-menu-top">
      <el-menu router default-active="device" mode="horizontal">
        <li class="ptitle">
          <img :src="require('@/assets/image/icon-location.png')" />定位管理
        </li>
        <el-menu-item index="location">人员定位统计</el-menu-item>
        <el-menu-item index="walldetector">信号基站</el-menu-item>
        <el-menu-item index="cardetector">车载探测器</el-menu-item>
        <el-menu-item index="locationbind">定位从设备</el-menu-item>
        <el-menu-item index="device" @click="pageToFirst">机具</el-menu-item>
      </el-menu>
    </div>
    <div class="app-page">
       </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      diaLogFormVisible: false,
      diaLogTitle: "添加信息",
      companyList: [],
      deviceData: {},
      deviceRules: {
        depart_id: [
          { required: true, message: "请选择公司", trigger: "change" }
        ],
        name: [
          {
            required: true,
            message: "请输入机具名称2~20个字符",
            trigger: "blur"
          },
          { min: 2, max: 20, message: "长度在2到20个字符", trigger: "blur" },
          {
            pattern: /(^\S+).*(\S+$)/,
            message: "开始和结尾不能有空格",
            trigger: "blur"
          }
        ],
        description: [
          { min: 0, max: 50, message: "长度在0到50个字符", trigger: "blur" }
        ]
      },
      page_cur: 1,
      pageTotal: 0,
      page_size: 20,
      page_total: 0,
      dataList: []
    };
  },
  created() {
  },
  methods: {
    getCompanyList() {
      this.request({
        url: "/apply/getCompanyLists",
        method: "get"
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.companyList = data.data;
        }
      });
    },
    getDataList() {
      let page = this.page_cur;
      this.request({
        url: "/location/getDevicePages",
        method: "get",
        params: {
          page
        }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
          this.page_cur = parseInt(data.data.current_page);
          this.pageTotal = data.data.total;
          this.page_size = data.data.per_page;
          this.page_total = data.data.last_page;
        }
      });
    },
    pageChange(value) {
      this.page_cur = value;
      this.getDataList();
    },
    pageToFirst() {
      this.pageChange(1);
    },
    pageToLast() {
      this.page_cur = this.page_total;
      this.pageChange(this.page_total);
    },
    addDialogInfo() {
      this.deviceData = {
        depart_id: "",
        name: "",
        description: ""
      };
      this.diaLogTitle = "添加机具信息";
      this.diaLogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["deviceRulesRef"].clearValidate();
      });
    },
    addOrEditDialog() {
      this.$refs["deviceRulesRef"].validate(valid => {
        if (valid) {
          let data = this.deviceData;
          if (this.deviceData.description == "") {
            this.deviceData.description = "暂无";
          }
          this.request({
            url: "/location/addOrEditDevice",
            method: "post",
            data
          }).then(response => {
            var data = response.data;
            if (data.status == 1) {
              this.diaLogFormVisible = false;
              this.$message({
                type: "success",
                message: "保存成功！"
              });
              this.getDataList();
            }
          });
         } else {
          console.log("操作失败！");
          return false;
        }
      });
    },
    goEdit(id) {
      this.diaLogTitle = "修改机具信息";
      this.diaLogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["deviceRulesRef"].clearValidate();
      });
      this.request({
        url: "/location/getDevice",
        method: "get",
        params: { id }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.deviceData = data.data;
          if (data.data.description == "暂无") {
            this.deviceData.description = "";
          }
        }
      });
    },

    goDel(id) {
      this.$confirm("您确定要删除？删除后不能恢复！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      })
        .then(() => {
          this.request({
            url: "/location/deleteDevice",
            method: "post",
            data: { id: id }
          }).then(res => {
            let data = res.data;
            if (data.status == 1) {
              this.$message({
                type: "success",
                message: "删除成功！"
              });
              this.getDataList();
            }
          });
        })
        .catch(() => {});
    }
    //
  }
};
</script>
<style >
.dialog-jiju .el-textarea__inner {
  border: 1px #9db9fa solid;
  color: #4b6eca;
  height: 100px;
}
.dialog-jiju .el-textarea {
  width: 100% !important;
}
.dialog-jiju .el-select {
  width: 100%;
}
.dialog-jiju .el-form-item__label {
  width: 110px;
}
.dialog-jiju .el-form-item__content {
  margin-left: 110px;
}
</style>