<template>
  <div class="aside-bar-con">
    <div
      v-for="(item, index) in settingsItem"
      :key="index"
      class="aside-bar-item"
      :class="{active: currentActiveIndex === index}"
      @click="switchItem(index)"
    >
      <el-row>
        <el-col :span="5">
          <div class="aside-bar-icon-con">
            <el-row align="middle">
              <icon-collect :name="item.icon"/>
            </el-row>
          </div>
        </el-col>
        <el-col :span="19">
          <div class="aside-bar-text">
            <el-row align="middle">
              <span>{{ item.name }}</span>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import { useRouter } from "vue-router";
import {
  iconNewName
} from "../Icons/types";

interface SettingItems {
  name: string,
  icon: iconNewName,
  path: string
}

export default defineComponent({
  name: "aside-bar",
  setup() {
    const currentActiveIndex = ref(0)
    const router = useRouter()
    const settingsItem: SettingItems[] = [
      {
        name: '应用',
        icon: "app",
        path: 'app'
      },
      // {
      //   name: '外观',
      //   icon: "color"
      // },
      {
        name: '媒体设置',
        icon: 'media',
        path: 'media'
      }
    ]

    const switchItem = (index) => {
      currentActiveIndex.value = index
      router.push({
        path: `settings/${settingsItem[index].path}`
      })
    }

    return {
      settingsItem,
      currentActiveIndex,
      switchItem
    }
  }
})
</script>

<style scoped lang="less">
.aside-bar-con {
  height: 100%;
  width: 100%;
  padding: 30px 10px;
  box-sizing: border-box;
}

.aside-bar-item {
  height: 25px;
  margin-bottom: 8px;
  line-height: 25px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 10px;
}

.aside-bar-icon-con {
  height: 100%;
}
</style>
