<template>
  <div id="monitor">
    <div class="el-menu-top">
      <el-menu router default-active="alerts" mode="horizontal">
        <li class="ptitle">
          <img :src="require('@/assets/image/icon-set.png')" />设置
        </li>
        <el-menu-item index="set">站点设置</el-menu-item>
        <el-menu-item index="speed">限速设置</el-menu-item>
        <el-menu-item index="alerts"  @click="pageToFirst">过渡段设置</el-menu-item>
        <el-menu-item index="process">项目工序</el-menu-item>
      </el-menu>
    </div>
    <div class="app-page">
      <div class="app-page-container">
        <div class="app-page-select">
          <el-form :inline="true">
            <el-form-item>
              <el-button type="primary" icon="el-icon-plus" @click="goAdd">添加防区</el-button>
            </el-form-item>
            <div class="el-serach">
              <el-input
                v-model="searchName"
                autocomplete="off"
                maxlength="30"
                placeholder="请输入名称查询"
                clearable
              ></el-input>
              <el-button @click="searchEvent">查询</el-button>
            </div>
          </el-form>
        </div>
        <div class="app-table">
          <el-table :data="dataList">
            <el-table-column label="序号">
              <template slot-scope="scope">
                <span>{{scope.$index+(page_cur - 1) * page_size + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="line" label="线别"></el-table-column>
            <el-table-column label="起始里程(米)">
              <template slot-scope="scope">
                <b>DK</b>
                {{scope.row.start_flag}} + {{scope.row.start_length}}
              </template>
            </el-table-column>
            <el-table-column label="结束里程(米)">
              <template slot-scope="scope">
                <b>DK</b>
                {{scope.row.end_flag}} + {{scope.row.end_length}}
              </template>
            </el-table-column>
            <el-table-column prop="start_time" label="开始时间"></el-table-column>
            <el-table-column prop="end_time" label="结束时间"></el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <div class="app-operation">
                  <el-button class="btn-blue" size="mini" @click="goEdit(scope.row.id)">修改</el-button>
                  <el-button class="btn-red" size="mini" @click="goDel(scope.row.id)">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="app-pagination">
            <el-pagination
              class="pagination"
              v-if="dataList.length !== 0"
              layout="slot,prev, pager, next,total"
              :page-size="this.page_size"
              :current-page="this.page_cur"
              :total="this.page_data_total"
              @current-change="pageChange"
              prev-text="上一页"
              next-text="下一页"
            >
              <button @click="pageToFirst" type="button" class="btn-first">
                <span>首页</span>
              </button>
              <button @click="pageToLast" type="button" class="btn-last">
                <span>尾页</span>
              </button>
            </el-pagination>
          </div>
        </div>
        <el-dialog
          width="700px"
          class="dialog-station"
          :title="this.diaLogTitle"
          :visible.sync="diaLogFormVisible"
        >
          <el-form class="el-form-custom" :model="formData" :rules="formRules" ref="formRules">
            <el-form-item label="名称：" prop="name">
              <el-select v-model="formData.name" placeholder="请选择">
                <el-option label="防区" value="防区"></el-option>
                <el-option label="施工地段" value="施工地段"></el-option>
              </el-select>
              <!-- <el-input v-model="formData.name" autocomplete="off" maxlength="20" show-word-limit></el-input> -->
            </el-form-item>
            <el-form-item label="线别：" prop="line_type">
              <el-select
                v-model="formData.line_type"
                placeholder="请选择"
                @change="selectLineType($event)"
              >
                <el-option
                  v-for="item in lineTypeList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
              <div class="el-form-item__error">{{lineTypeDes}}</div>
            </el-form-item>
            <el-form-item label="开始里程：" class="el-form-item-dk is-required">
              <el-form-item prop="start_flag">
                <el-input
                  v-model="formData.start_flag"
                  autocomplete="off"
                  placeholder="公里"
                  maxlength="3"
                > <template slot="prepend">DK</template></el-input>
              </el-form-item>
              <el-form-item prop="start_length" class="errorss">
                <b>+</b>
                <el-input
                  v-model="formData.start_length"
                  autocomplete="off"
                  placeholder="米"
                  maxlength="3"
                ></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item label="结束里程：" class="el-form-item-dk is-required">
              <el-form-item prop="end_flag">
                <el-input
                  v-model="formData.end_flag"
                  autocomplete="off"
                  placeholder="公里"
                  maxlength="3"
                >
                <template slot="prepend">DK</template>
                </el-input>
              </el-form-item>
              <el-form-item prop="end_length" class="errorss">
                <b>+</b>
                <el-input
                  v-model="formData.end_length"
                  autocomplete="off"
                  placeholder="米"
                  maxlength="3"
                ></el-input>
              </el-form-item>
            </el-form-item>
           <el-form-item label="开始时间">
              <el-date-picker
                v-model="formData.start_time"
                :picker-options="pickerOptionsStart"
                type="datetime"
                 format="yyyy-MM-dd HH:mm"
                placeholder="选择时间"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="end_time">
              <el-date-picker
                :picker-options="pickerOptionsEnd"
                v-model="formData.end_time"
                type="datetime"
                 format="yyyy-MM-dd HH:mm"
                placeholder="选择时间"
              ></el-date-picker>
            </el-form-item>
            <div class="blank"></div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="diaLogFormVisible = false">关闭</el-button>
            <el-button type="primary" @click="addOrEditDialog()">确定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptionsStart: {
        disabledDate: time => {
          if (this.formData.end_time) {
            return (
              time.getTime() > new Date(this.formData.end_time).getTime()
            );
          }
        }
      },
      pickerOptionsEnd: {
        disabledDate: time => {
          if (this.formData.start_time) {
            return (
              time.getTime() < new Date(this.formData.start_time).getTime()
            );
          }
        }
      },
      diaLogFormVisible: false,
      diaLogTitle: "添加信息",
      formData: {},
      formRules: {
        name: [{ required: true, message: "请选择名称", trigger: "change" }],
        line_type: [
          { required: true, message: "请选择线别", trigger: "change" }
        ],
        start_flag: [
          {
            required: true,
            message: "请输入开始公里",
            trigger: "blur"
          },
          {
            pattern: /^\d{1,3}$/,
            message: "输入1-3位整数",
            trigger: "blur"
          }
        ],
        start_length: [
          {
            required: true,
            message: "请输入开始米",
            trigger: "blur"
          },
          {
            pattern: /^\d{1,3}$/,
            message: "输入1-3位整数",
            trigger: "blur"
          }
        ],
        end_flag: [
          {
            required: true,
            message: "请输入结束公里",
            trigger: "blur"
          },
          {
            pattern: /^\d{1,3}$/,
            message: "输入1-3位整数",
            trigger: "blur"
          }
        ],
        end_length: [
          {
            required: true,
            message: "请输入结束米",
            trigger: "blur"
          },
          {
            pattern: /^\d{1,3}$/,
            message: "输入1-3位整数",
            trigger: "blur"
          }
        ],
        start_time: [
          { required: true, message: "请选择开始时间", trigger: "change" }
        ],
        end_time: [
          { required: true, message: "请选择结束时间", trigger: "change" }
        ]
      },
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: [],
      searchName: "",
      lineTypeStart: "",
      lineTypeEnd: "",
      lineTypeDes: "",
      lineTypeList: []
    };
  },
  mounted() {
    document
      .querySelector("#app-menu-items #menu_set")
      .classList.add("is-active");
  },
  created() {
    this.getLineTypeLists();
    this.getDataList();
  },
  methods: {
    getDataList() {
      let page = this.page_cur;
      let name = this.searchName;
      let road_type = 4; //1桥，2隧道，3坡度，4防区，5限速
      this.request({
        url: "/search/getRoadDevicePages",
        method: "get",
        params: {
          page,
          name,
          road_type
        }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
          this.page_cur = parseInt(data.data.current_page);
          this.page_total = data.data.last_page;
          this.page_data_total = data.data.total;
          this.page_size = data.data.per_page;
        }
      });
    },
    pageChange(value) {
      this.page_cur = value;
      this.getDataList();
    },
    pageToFirst() {
      this.page_cur = 1;
      this.getDataList();
    },
    pageToLast() {
      this.page_cur = this.page_total;
      this.getDataList();
    },
    searchEvent() {
      this.page_cur = 1;
      this.getDataList();
    },
    getLineTypeLists() {
      this.request({
        url: "/common/getLineType",
        method: "get"
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.lineTypeList = data.data;
        }
      });
    },
    selectLineType(value) {
      const that = this;
      this.lineTypeList.map((item, index) => {
        if (item.id == value) {
          that.lineTypeDes = "里程范围：" + item.tip;
          that.lineTypeStart = item.start;
          that.lineTypeEnd = item.end;
        }
      });
      console.log(this.lineTypeDes);
    },
    goAdd() {
      this.formData = {};
      this.diaLogTitle = "添加信息";
      this.diaLogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["formRules"].clearValidate();
      });
      this.lineTypeDes = "";
    },
    addOrEditDialog() {
      const that = this;
      this.$refs["formRules"].validate(valid => {
        if (valid) {
          let data = that.formData;
          this.formData.road_type = 4; //1桥，2隧道，3坡度，4防区，5限速
          // //里程判断
          let startTotal =
            parseInt(data.start_flag * 1000) + parseInt(data.start_length);
          let endTotal =
            parseInt(data.end_flag * 1000) + parseInt(data.end_length);
          let lineStartTotal = that.lineTypeStart * 1000;
          let lineEndTotal = that.lineTypeEnd * 1000;
          if (parseInt(startTotal) < parseInt(lineStartTotal)) {
            this.$message.error("输入的开始里程不在里程范围内");
            return false;
          }
          if (parseInt(endTotal) > parseInt(lineEndTotal)) {
            this.$message.error("输入的结束里程不在里程范围内");
            return false;
          }
          if (parseInt(endTotal) < parseInt(startTotal)) {
            this.$message.error("输入的结束里程不能小于结束里程");
            return false;
          }
          this.request({
            url: "/search/addOrEditRoadDevice",
            method: "post",
            data
          }).then(response => {
            var data = response.data;
            if (data.status == 1) {
              this.diaLogFormVisible = false;
              this.formData.name = "";
              this.getDataList();
              this.$message({
                type: "success",
                message: "保存成功！"
              });
            }
          });
        } else {
          console.log("操作失败！");
          return false;
        }
      });
    },
    goEdit(id) {
      this.diaLogTitle = "修改信息";
      this.diaLogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["formRules"].clearValidate();
      });
      this.request({
        url: "/search/getRoadDeviceDetail",
        method: "get",
        params: { id }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.formData = data.data;
          this.lineTypeList.map((item, index) => {
            if (item.id == data.data.line_type) {
              this.lineTypeDes = "里程范围：" + item.tip;
              this.lineTypeStart = item.start;
              this.lineTypeEnd = item.end;
              // var timestamp = new Date(data.data.end_time);
              // console.log("timestamp:" + timestamp);
              // this.formData.end_time = timestamp;
            }
          });
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
            url: "/search/deleteRoadDevice",
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
<style>
.dialog-station .el-textarea__inner {
  border: 1px #9db9fa solid;
  color: #4b6eca;
  height: 100px;
}
.dialog-station .el-textarea {
  width: 100% !important;
}
.dialog-station .el-form-item__label {
  width: 110px;
}
.dialog-station .el-form-item__content {
  margin-left: 110px;
}
.dialog-station .el-form-item-inline .el-input--medium {
  display: inline-block;
  width: 80px;
  text-align: center;
}
.dialog-station .el-form-item-inline input {
  display: inline-block;
  width: 80px;
  text-align: center;
}
.dialog-station .el-select {
  width: 100%;
}
.el-form-item-inline input {
  display: inline-block;
  width: 80px;
  text-align: center;
}
</style>