<template>
  <div id="personnel">
    <div class="datav-ptitle"><h3>人员进出</h3></div>
    <!-- <div class="scroll-board">
    </div> -->
    <div class="user-box">
      <div class="u-left">
        <h3>王小二</h3>
        <p><span>ID：</span>325</p>
        <p><span>电话：</span>18766666666</p>
        <p><span>到访时间：</span>12:00</p>
        <p><span>身份：</span>工程师</p>
      </div>
      <div class="u-right">
        <dv-scroll-board :config="config" />
        <!-- <el-scrollbar style="height:100%">
          <ul>
            <li>
              <div>王小二</div>
              <div>工程师</div>
              <div>12:00</div>
            </li>
            <li>
              <div>王小二2</div>
              <div>工程师</div>
              <div>12:00</div>
            </li>
            <li>
              <div>王小二3</div>
              <div>工程师</div>
              <div>12:00</div>
            </li>
            <li>
              <div>王小二4</div>
              <div>工程师</div>
              <div>12:00</div>
            </li>
            <li>
              <div>王小二5</div>
              <div>工程师</div>
              <div>12:00</div>
            </li>
            <li>
              <div>王小二6</div>
              <div>工程师</div>
              <div>12:00</div>
            </li>
            <li>
              <div>王小二7</div>
              <div>工程师</div>
              <div>12:00</div>
            </li>
          </ul>
        </el-scrollbar> -->
      </div>
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
        header: ["ID", "姓名", "电话", "到访", "身份"],
        data: [
          ["325", "万小龙", "18766666666", "12:00", "工程师"],
          ["325", "李济深", "18766666666", "12:00", "工程师"],
          ["325", "马丽", "18766666666", "12:00", "工程师"],
          ["325", "江峰", "18766666666", "12:00", "工程师"],
          ["325", "孟晚", "18766666666", "12:00", "工程师"],
          ["325", "顾欣", "18766666666", "12:00", "工程师"],
          ["325", "李建", "18766666666", "12:00", "工程师"],
          ["325", "陈佳", "18766666666", "12:00", "工程师"],
          ["325", "李度", "18766666666", "12:00", "工程师"],
          ["325", "马龙飞", "18766666666", "12:00", "工程师"],
          ["325", "李云", "18766666666", "12:00", "工程师"],
          ["325", "刘楠", "18766666666", "12:00", "工程师"],
        ],
        // indexHeader:'序号',
        // index: true,
        columnWidth: [70, 70,120],
        rowNum: 5,
        headerBGC: "#01023a",
        headerHeight: 45,
        oddRowBGC: "#01023a",
        evenRowBGC: "#06074b"
      }
    };
  },
  created() {
    this.getPeopleList();
  },
  methods: {
    scrll() {},
    getPeopleList() {
      this.request({
        url: "/location/getPeopleLists",
        method: "get"
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.peopleList = data.data;
        }
      });
    }
  }
};
</script>
<style>
#personnel {
  background: #01023a;
  color: #fff;
  width: 33.3%;
  height: 33.3%;
  position: relative;
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
  min-height: 225px;
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
