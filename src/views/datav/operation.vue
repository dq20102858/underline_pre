<template>
  <div id="operation">
    <div class="datav-ptitle"><h3>信息列表</h3></div>
    <div class="datav-list" v-if="iShow">
      <dv-scroll-board :config="config" />
      <!--  <ul class="worklist">
        <li class="header">
          <div>作业编号</div>
          <div>作业令号</div>
          <div>作业内容</div>
          <div>当前状态</div>
          <div>公司简称</div>
        </li>
        <li
          class="item"
          :class="'p' + index"
          v-for="(item, index) in dataList"
          v-if="index < 6"
        >
          <i></i>
          <div>{{ item.number }}</div>
          <div>{{ item.command_num }}</div>
          <div style="padding-left:10px">{{ item.description }}</div>
          <div :style="{ color: item.status == '拒绝' ? '#FE5A27' : '' }">
            {{ item.status }}
          </div>
          <div>{{ item.company }}</div>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Operation",
  data() {
    return {
      iShow: false,
      peopleList: [],
      config: {
        header: ["作业编号", "作业令号", "作业内容", "当前状态", "公司简称"],
        data: [],
        columnWidth: [100, 180, 180, 90, 90],
        rowNum: 6,
        headerBGC: "#01023a",
        headerHeight: 45,
        oddRowBGC: "#01023a",
        evenRowBGC: "#06074b",
      },
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
          page,
        },
      }).then((res) => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = [
            [
              "12345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "12345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "12345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "12345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "12345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "32345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "42345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "52345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "62345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "72345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "82345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
            [
              "92345",
              "(2020)字第10.16-001-76",
              "作业内容作业内容作业内容",

              "未批复",
              "何庆同",
            ],
          ];
          let json = data.data.data;
          let arr = [];
          let jsonData = [];
          json.map((item, index) => {
            arr = [];
            for (let key in item) {
              if (key == "number") {
                arr.push(item[key]);
              }
              if (key == "command_num") {
                arr.push(item[key]);
              }
              if (key == "description") {
                arr.push(item[key]);
              }
              if (key == "status") {
                arr.push(item[key]);
              }
              if (key == "company") {
                arr.push(item[key]);
              }
            }
            [arr[0], arr[1], arr[2], arr[3], arr[4]] = [
              arr[0],
              arr[3],
              arr[1],
              arr[2],
              arr[4],
            ];
            jsonData.push(arr);
          });
          this.config.data = jsonData;
          this.iShow = true;
        }
      });
    },
  },
  mounted() {
    var timer = setInterval(() => {
      this.getDataList();
    }, 10000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>
<style>
#operation {
  position: relative;
  width: 50%;
}
#operation .worklist {
}
#operation .worklist li {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
}
#operationd .worklist li.item::before {
  content: ".";
  color: #00d9ff;
  font-size: 30px;
}
#operation .worklist .header {
  color: #00d9ff;
  margin-bottom: 15px;
}
#operation .worklist .header div {
  text-align: center;
  width: 20%;
  font-size: 16px;
}
#operation .worklist li.item {
}
#operation .worklist li.item i {
  background: #00d9ff;
  height: 5px;
  width: 5px;
  border-radius: 100%;
  margin-top: 15px;
  margin-right: 10px;
}
#operation .worklist li.item div {
  height: 39px;
  line-height: 39px;
  width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
}
#operation .worklist li.p0 div {
  background: #06074b;
}
#operation .worklist li.p2 div {
  background: #06074b;
}
#operation .worklist li.p4 div {
  background: #06074b;
}
#operation .worklist li.p6 div {
  background: #06074b;
}
</style>
