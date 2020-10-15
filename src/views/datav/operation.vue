<template>
  <div id="operation">
    <div class="datav-ptitle"><h3>信息列表</h3></div>
    <div class="datav-list">
      <ul class="worklist">
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
          v-if="index < 8"
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
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Operation",
  data() {
    return {
      dataList: []
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
    //
  }
};
</script>
<style>
#operation {
  position: relative;
  width:50%;
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
