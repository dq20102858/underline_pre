<template>
  <div id="demo">
    <div class="datav-ptitle"><h3>人员进出</h3></div>
    <div class="scroll-board">
      <dv-scroll-board :config="config" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Personnel",
  data() {
    return {
      peopleList: [],
      config: {
        header: ["作业编号", "作业令号", "作业内容", "当前状态", "公司简称"],
        data: [
          [
            "12345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "12345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "12345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "12345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "12345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "32345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "42345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "52345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "62345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "72345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "82345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ],
          [
            "92345",
            "(2020)字第10.16-001-76",
            "作业内容作业内容作业内容",

            "未批复",
            "何庆同"
          ]
        ],
        columnWidth: [90, 180, 180, 90, 90],
        rowNum: 7,
        headerBGC: "#01023a",
        headerHeight: 45,
        oddRowBGC: "#01023a",
        evenRowBGC: "#06074b"
      }
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      let page = 1;
      this.request({
        url: "/apply/getApplyPages",
        method: "get",
        params: {
          page
        }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
        }
      });
    }
  }
};
</script>
<style>
#demo .dv-scroll-board .rows .row-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
#demo .dv-scroll-board .header div {
  text-align: left;
  font-size: 14px;
  color: #00d9ff;
}

.datav-ptitle {
  padding: 0px 0 0 30px;
}
.datav-ptitle h3 {
  border-left: 5px solid #15e4ff;
  color: #15e4ff;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
}
.datav-list {
  padding: 20px 30px;
  overflow: hidden;
}
#demo {
  background: #01023a;
  color: #fff;
  width: 33.3%;
  height: 33.3%;
  position: relative;
}
#demo .dv-scroll-board .rows .row-item {
  height: 40px;
  line-height: 40px;
}
.scroll-board {
  height: 33.3%;
  padding: 20px;
  box-sizing: border-box;
}

#data-view .el-scrollbar__wrap {
  overflow-x: hidden;
  border: 0;
  margin-right: -18px !important;
}

.user-box {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.u-left {
  width: 30%;
  background: url(~@/assets/image/card-bg.png) no-repeat;
  background-size: 100% auto;
}
.u-left h3 {
  text-align: center;
  padding-top: 15px;
  margin-bottom: 30px;
}
.u-left p {
  text-align: center;
  padding-bottom: 15px;
}
.u-left p span {
  display: inline-block;
}
.u-right {
  width: 65%;
}
.u-right li {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
  border-top: 1px #204f96 dashed;
  height: 39px;
  line-height: 39px;
  margin-right: 20px;
}
.u-right .header div {
  text-align: center;
  width: 20%;
  font-size: 16px;
}
.u-right li.item div {
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.u-right li.p0 div {
  background: #06074b;
}
.u-right li.p2 div {
  background: #06074b;
}
.u-right li.p4 div {
  background: #06074b;
}
.u-right li.p6 div {
  background: #06074b;
}
</style>
