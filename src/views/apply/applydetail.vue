<template>
  <div id="app-apply">
    <div class="app-page">
      <div id="printMe">
        <div class="detailtitles">
          <h3>{{ titles }}</h3>
          <span>请点人：{{ dataInfo.user_name }}</span>
        </div>
        <!-- temp1 -->
        <div
          v-if="dataInfo.type == 'A1' || dataInfo.type == 'A2'"
          class="app-apply-tempone"
        >
          <div class="vtable">
            <table>
              <tbody>
                <tr>
                  <td class="auto-style">
                    <b>作业编号：</b>
                  </td>
                  <td colspan="3" class="clblue">{{ dataInfo.number }}</td>
                </tr>
                <tr>
                  <td>
                    <b>作业令号：</b>
                  </td>
                  <td class="clblue">{{ dataInfo.command_num }}</td>
                  <td colspan="2">
                    是否需要动车：
                    <b v-if="dataInfo.is_need_car == 0">否</b>
                    <b
                      v-if="dataInfo.is_need_car == 1"
                      style="margin-right: 30px"
                      >是</b
                    >
                    是否需要动火：
                    <b v-if="dataInfo.is_need_fire == 0">否</b>
                    <b
                      v-if="dataInfo.is_need_fire == 1"
                      style="margin-right: 30px"
                      >是</b
                    >
                    是否需要帮助：
                    <b v-if="dataInfo.is_need_help == 0">否</b>
                    <b
                      v-if="dataInfo.is_need_help == 1"
                      style="margin-right: 30px"
                      >是</b
                    >
                    是否需要断电：
                    <b v-if="dataInfo.is_need_break_ele == 0">否</b>
                    <b v-if="dataInfo.is_need_break_ele == 1">是</b>
                  </td>
                </tr>
                <tr>
                  <td class="auto-style">
                    <b>施工单位：</b>
                  </td>
                  <td>
                    <span class="clblue">{{ dataInfo.company }}</span>
                  </td>
                  <td colspan="2">
                    <table class="petable">
                      <tr>
                        <td>联系人：</td>
                        <td>
                          <span class="clblue">{{ dataInfo.contact }}</span>
                        </td>
                        <td>联系电话：</td>
                        <td>
                          <span class="clblue">{{ dataInfo.phone }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 70px">负责人：</td>
                        <td>
                          <span class="clblue">{{ dataInfo.p_in_charge }}</span>
                        </td>
                        <td style="width: 70px">联系电话：</td>
                        <td>
                          <span class="clblue">{{
                            dataInfo.p_in_charge_phone
                          }}</span>
                        </td>
                      </tr>
                      <tr
                        v-for="(item, index) in dataInfo.holder"
                        :key="item.id"
                      >
                        <td>持证人：</td>
                        <td>
                          <label class="clblue">{{ item.name }}</label>
                        </td>
                        <td>联系电话：</td>
                        <td>
                          <label class="clblue">{{ item.phone }}</label>
                        </td>
                      </tr>

                      <tr
                        v-for="(item, index) in dataInfo.worker"
                        :key="item.id"
                      >
                        <td>施工人：</td>
                        <td>
                          <label class="clblue">{{ item.name }}</label>
                        </td>
                        <td>联系电话：</td>
                        <td>
                          <label class="clblue">{{ item.phone }}</label>
                        </td>
                      </tr>
                    </table>
                    <p>
                      <span style="padding-right: 10px">总人数：</span>
                      <span class="clblue">{{ dataInfo.worker_num }}人</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="auto-style">
                    <b>
                      工作地点
                      <br />上/下行线：
                    </b>
                  </td>
                  <td colspan="3" style="padding: 0">
                    <table class="innertable">
                      <tr>
                        <th>由</th>
                        <th>至</th>
                        <th style="width: 70px">线别</th>
                        <th>列车编组</th>
                        <th>工作时间</th>
                      </tr>
                      <tr v-for="areas in dataInfo.area_or_car" :key="areas.id">
                        <td>
                          {{ areas.start_station_name }} DK{{
                            areas.start_flag
                          }}
                          + {{ areas.start_length }}
                        </td>
                        <td>
                          {{ areas.end_station_name }} DK{{ areas.end_flag }} +
                          {{ areas.end_length }}
                        </td>
                        <td>{{ areas.line_type_name }}</td>
                        <td>
                          <span
                            style="margin-right: 10px"
                            v-for="item in areas.car_use"
                            :key="item.id"
                            >{{ item.car_type }}</span
                          >
                        </td>
                        <td>
                          <p>{{ areas.start_time }}</p>
                          <p>{{ areas.end_time }}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 200px"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="auto-style">
                    <b>车辆：</b>
                  </td>
                  <td colspan="3" style="padding: 0">
                    <table class="innertable">
                      <tr>
                        <th>类型</th>
                        <th>车号</th>
                      </tr>
                      <tbody
                        v-for="areas in dataInfo.area_or_car"
                        :key="areas.id"
                      >
                        <tr v-for="item in areas.car_use" :key="item.id">
                          <td style="width: 200px">{{ item.car_type }}</td>
                          <td>{{ item.car_number }}</td>
                        </tr>
                      </tbody>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="auto-style">
                    <b>计划运行路径：</b>
                  </td>
                  <td colspan="3">
                    <div class="textoverflow clblue">
                      {{ dataInfo.plan_route }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="auto-style">
                    <b>工作内容：</b>
                  </td>
                  <td colspan="3">
                    <div class="textoverflow clblue">
                      {{ dataInfo.description }}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="auto-style">
                    <b>保护措施：</b>
                  </td>
                  <td colspan="3">
                    <div class="textoverflow clblue">
                      {{ funIsEmpty(dataInfo.attention) }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="auto-style">
                    <b>其他信息</b>
                  </td>
                  <td colspan="3">
                    <div class="textoverflow clblue">
                      {{ funIsEmpty(dataInfo.other) }}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b>监理确认签字：</b>
                  </td>
                  <td style="width: 200px">
                    <span class="clblue">{{ dataInfo.supervisor }}</span>
                  </td>
                  <td colspan="2">
                    <b>承运人签名（章）：</b>
                    <span class="clblue">{{ dataInfo.carrier }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>审批人：</b>
                  </td>
                  <td>
                    <span class="clblue">{{ dataInfo.approver }} </span>
                    <img
                      v-if="dataInfo.status == 2"
                      style="
                        height: 120px;
                        width: 120px;
                        display: inline-block;
                        vertical-align: middle;
                      "
                      :src="require('@/assets/image/approve.png')"
                    />
                  </td>
                  <td  colspan="2">
                     <div>
                    <b>审批备注：</b>
                    <span class="clblue">{{ dataInfo.advice }}</span>
                  </div>
                    <b>审批时间：</b>
                    <span class="clblue">{{ dataInfo.approve_time }}</span>
                  
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>销点人：</b>
                  </td>
                  <td>
                    <span class="clblue">{{ dataInfo.logout }}</span>
                  </td>
                  <td colspan="2">
                    <b>销点时间：</b>

                    <span class="clblue">{{ dataInfo.logout_time }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>注销人：</b>
                  </td>
                  <td>
                    <span class="clblue">{{ dataInfo.logoff }}</span>
                  </td>
                  <td colspan="2">
                    <b>注销时间：</b>
                    <span class="clblue">{{ dataInfo.logoff_time }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-else class="app-apply-detail">
          <el-timeline>
            <el-timeline-item
              timestamp="申请"
              placement="top"
              type="warning "
              color="#ff5c75"
              size="large"
            >
              <div class="items">
                <table class="atable">
                  <tr>
                    <td style="width: 140px">
                      <label class="labels">作业编号：</label>
                    </td>
                    <td>
                      <label class="inputs">{{ dataInfo.number }}</label>
                    </td>
                    <td style="width: 140px">
                      <label class="labels">作业令号：</label>
                    </td>
                    <td>
                      <label class="inputs">{{ dataInfo.command_num }}</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label class="labels">
                        兹申请允许
                        <br />持证人（主站）：
                      </label>
                    </td>
                    <td>
                      <label class="inputs">{{
                        dataInfo.main_apply_user
                      }}</label>
                    </td>
                    <td>
                      <label class="labels">辅站及负责人：</label>
                    </td>
                    <td>
                      <label class="inputs">{{
                        dataInfo.sub_apply_user
                      }}</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label class="labels">单位名称：</label>
                    </td>
                    <td colspan="3">
                      <label class="inputs">{{ dataInfo.company }}</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label class="labels">联系电话：</label>
                    </td>
                    <td colspan="3">
                      <label class="inputs">{{ dataInfo.phone }}</label>
                      <label class="inputs" style="padding-left: 40px"
                        >带领 ( {{ dataInfo.worker_num }} )
                        人进行以下工作</label
                      >
                    </td>
                  </tr>
                  <tr v-for="(item, index) in dataInfo.worker" :key="item.id">
                    <td
                      v-if="index == 0"
                      :rowspan="dataInfo.worker.length"
                      valign="top"
                    >
                      <label class="labels">施工人员：</label>
                    </td>
                    <td>
                      <label class="inputs">{{ item.name }}</label>
                    </td>
                    <td>
                      <label class="labels">联系电话：</label>
                    </td>
                    <td>
                      <label class="inputs">{{ item.phone }}</label>
                    </td>
                  </tr>

                  <tr>
                    <td valign="top">
                      <label class="labels">A区域/车辆：</label>
                    </td>
                    <td colspan="3">
                      <div class="conn">
                        <div
                          style="margin-bottom: 10px"
                          v-for="areas in dataInfo.area_or_car"
                          :key="areas.id"
                        >
                          <p>
                            <em
                              >{{ areas.start_station_name }} -
                              {{ areas.end_station_name }} 区间
                              {{ areas.line_type_name }} ( DK{{
                                areas.start_flag
                              }}
                              + {{ areas.start_length }} - DK{{
                                areas.end_flag
                              }}
                              + {{ areas.end_length }} )</em
                            >
                          </p>
                          <p>
                            <i>开始时间：{{ areas.start_time }}</i>
                            <i>结束时间：{{ areas.end_time }}</i>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <label class="labels">B工作内容：</label>
                    </td>
                    <td colspan="3">
                      <div class="conn">
                        {{ funIsEmpty(dataInfo.description) }}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <label class="labels">
                        C安全措施
                        <br />及注意事项：
                      </label>
                    </td>
                    <td colspan="3">
                      <div class="conn">
                        {{ funIsEmpty(dataInfo.attention) }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <ul class="scheck">
                        <li>
                          是否需要动车：
                          <b v-if="dataInfo.is_need_car == 0">否</b>
                          <b v-if="dataInfo.is_need_car == 1">是</b>
                        </li>
                        <li>
                          是否需要动火：
                          <b v-if="dataInfo.is_need_fire == 0">否</b>
                          <b v-if="dataInfo.is_need_fire == 1">是</b>
                        </li>
                        <li>
                          是否需要帮助：
                          <b v-if="dataInfo.is_need_help == 0">否</b>
                          <b v-if="dataInfo.is_need_help == 1">是</b>
                        </li>
                        <li>
                          是否需要断电：
                          <b v-if="dataInfo.is_need_break_ele == 0">否</b>
                          <b v-if="dataInfo.is_need_break_ele == 1">是</b>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <div class="itemconn">
                        本单位及本人谨此声明：愿意在规定时间内完成上述工作，并确保本人属下员工遵守上述安全措施，同时本人或本人属
                        下员工不会试图损坏其它单位的设备，在其它区域或车辆上工作。
                      </div>
                      <div class="singn">
                        <span class="pull-left">
                          工点负责人（签名）：
                          <b>{{ dataInfo.p_in_charge }}</b>
                        </span>
                        <span class="pull-right">{{
                          dataInfo.create_time
                        }}</span>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </el-timeline-item>
            <el-timeline-item
              timestamp="审批"
              placement="top"
              type="warning "
              color="#ff5c75"
              size="large"
            >
              <div class="item">
                <div class="itemconn">
                  兹审批此许可证生效，或按红笔修改的执行。
                </div>
                <div class="singn">
                  <span class="pull-left">
                    审批负责人（签名）：
                    <b>{{ dataInfo.approver }}</b>
                  </span>
                  <span class="pull-right">{{ dataInfo.approve_time }}</span>
                  <img
                    v-if="dataInfo.status == 2"
                    style="position: absolute; width: 120px; top: -10px"
                    :src="require('@/assets/image/approve.png')"
                  />
                </div>
                <div class="itemconn" style="float:left;width:100%;">
                  审批负责人（备注）： {{ dataInfo.advice }}</div>
              </div>
            </el-timeline-item>
            <el-timeline-item
              class="el-timeline-item-line"
              timestamp="销点"
              placement="top"
              type="warning "
              color="#ff5c75"
              size="large"
            >
              <div class="item">
                <div class="itemconn">
                  本人谨此声明：⑴
                  此进场作业许可证所述工作现已完成，本人及属下员工已经撤离，安全措施已经撤除，并已被告知在轨道区域/车辆上工作已不再安全。⑵
                  完成情况及所有故障/损坏已经书面呈报。
                </div>
                <div class="singn">
                  <span class="pull-left">
                    销点负责人（签名）：
                    <b>{{ dataInfo.logout }}</b>
                  </span>
                  <span class="pull-right">{{ dataInfo.logout_time }}</span>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item
              class="el-timeline-item-line"
              timestamp="注销"
              placement="top"
              type="warning "
              color="#ff5c75"
              size="large"
            >
              <div class="item">
                <div class="itemconn">
                  此许可证已经原批准人或联合办公室经理同意注销。
                </div>
                <div class="singn">
                  <span class="pull-left">
                    注销负责人（签名）：
                    <b>{{ dataInfo.logoff }}</b>
                  </span>
                  <span class="pull-right">{{ dataInfo.logoff_time }}</span>
                </div>
              </div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <div slot="footer" class="app-dialog-footer">
        <el-button class="bluebtn" @click="isCancel">返回列表</el-button>
        <el-button class="redbtn" v-print="printObj">打印信息</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      printObj: {
        id: "#printMe",
        popTitle: " ",
        extraCss: "",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
      },
      isShow: false,
      dataInfo: [],
      carUse: [],
      titles: "",
    };
  },
  props: {
    iframeData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    layerid: {
      type: String,
      default: "",
    },
  },
  mounted() {
    document
      .querySelector("#app-menu-items #menu_apply")
      .classList.add("is-active");
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.request({
        url: "/apply/getApplyDetail",
        method: "get",
        params: { id: this.iframeData.id },
      }).then((res) => {
        let data = res.data;
        if (data.status == 1) {
          this.dataInfo = data.data;
          this.titles = this.iframeData.titles;
          this.carUse = data.data.area_or_car[0].car_use;
        }
      });
    },
    isCancel() {
      this.$layer.close(this.layerid);
    },
    funIsEmpty(item) {
      if (item == "") {
        return "暂无";
      } else {
        return item;
      }
    },
  },
};
</script>
<style>
@media print {
  #printMe table {
    border-collapse: collapse;
    width: 100%;
  }
  #printMe table td {
    border: 1px solid #9db9fa;
    padding: 10px;
  }
  #printMe .p {
    width: 100%;
  }
  #printMe .el-timeline-item__tail {
    display: none;
  }
  undefined {
    display: none;
  }
  #printMe .el-timeline-item-line {
    border-top: 1px #9db9fa solid;
    padding-top: 20px;
  }
  #printMe .el-timeline-item__wrapper {
    padding-left: 0;
  }
  #printMe .contact {
    display: block;
    width: 100%;
  }
  #printMe .petable td {
    border: 0;
    padding: 0;
    white-space: nowrap;
  }
}

#app-apply .app-dialog-footer {
  text-align: center;
  margin-top: 30px;
}
#app-apply .app-dialog-footer .el-button {
  margin-right: 10px;
  padding: 12px 80px;
  font-size: 16px;
  color: #fff;
}
#app-apply .app-dialog-footer .bluebtn {
  background: #4b6eca;
  border-color: #4b6eca;
  margin-left: 10px;
}
#app-apply .app-dialog-footer .redbtn {
  background: #ff5c75;
  border-color: #ff5c75;
}
.detailtitles {
  padding-bottom: 20px;
  overflow: hidden;
}
.detailtitles h3 {
  float: left;
  color: #1d397a;
  font-size: 20px;
}
.detailtitles span {
  float: right;
  color: #1d397a;
}
.vl-notify-content {
  height: 91.5% !important;
}
.app-apply-detail {
  width: 100%;
}
.app-apply-detail .app-page {
  overflow: hidden;
  padding-bottom: 200px;
}
.app-apply-detail .el-form-item {
  margin-bottom: 25px;
}
.app-apply-detail .el-form-item__label {
  color: #1d397a;
}
.app-apply-detail .el-timeline-item__timestamp {
  color: #1d397a;
  font-size: 16px;
  font-weight: 700;
}
.app-apply-detail .el-timeline-item__wrapper {
  padding-left: 20px;
}
.app-apply-detail .item {
  overflow: hidden;
}
.app-apply-detail .labels {
  color: #1d397a;
  display: inline-block;
  line-height: 22px;
}
.app-apply-detail .inputs {
  color: #4b6eca;
  border-radius: 4px;
  display: inline-block;
}

.app-apply-detail .items {
  display: block;
}
.app-apply-detail .items em {
  color: #4b6eca;
  font-style: normal;
}
.app-apply-detail .scheck {
  overflow: hidden;
}
.app-apply-detail .scheck li {
  display: inline-block;
  color: #1d397a;
  margin-right: 40px;
}
.app-apply-detail .scheck b {
  font-size: 16px;
}
.app-apply-detail .atable .conn {
  word-wrap: break-word;
  word-break: break-all;
  color: #4b6eca;
}
.vtable table td .petable td {
  border: 0;
  padding: 0;
    white-space: nowrap;
}
.atable {
  border-collapse: collapse;
  width: 100%;
  margin-top: 15px;
}
.atable td {
  border: 1px solid #9db9fa;
  padding: 10px;
}
.atable em {
  font-style: normal;
  color: #1d397a;
}
.atable i {
  font-style: normal;
}
.app-apply-detail .itemconn {
  color: #1d397a;
  line-height: 24px;
}
.app-apply-detail .singn {
  color: #1d397a;
  line-height: 24px;
}
.app-apply-detail .lines {
  border-top: 1px #ededed solid;
  margin-top: 35px;
  padding-top: 10px;
}

#app-apply {
  width: 100%;
}
.app-page {
  width: 100%;
}
.vtable {
  width: 100%;
}
.vtable table {
  border-collapse: collapse;
  width: 100%;
}
.vtable table td {
  border: 1px solid #9db9fa;
  line-height: 30px;
  padding: 2px 10px;
}

.vtable .auto-style {
  width: 120px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
}
.vtable .auto-style2 {
  width: 19.2%;
}
.clblue {
  color: #4b6eca;
}
.clcenter {
  text-align: center;
}
.textoverflow {
  word-wrap: break-word;
  word-break: break-all;
}
.innertable {
  width: 100%;
}
.innertable {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: -1px;
  margin-left: -1px;
}
.innertable th {
  color: #111;
  text-align: left;
  padding-left: 10px;
  border-left: 1px #9db9fa solid;
  border-bottom: 1px #9db9fa solid;
}
.innertable td {
  border-top: 0 !important;
  border-right: 0 !important;
  padding: 0 10px !important;
  color: #444;
  height: 35px;
}

.contact {
  float: left;
  width: 50%;
}
</style>
