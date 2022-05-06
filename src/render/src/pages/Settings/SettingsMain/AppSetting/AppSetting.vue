<template>
  <div class="setting-main-con">
    <div class="setting-main-top-con">
      <el-row>
        <el-col :span="12">
          <div class="setting-main-app-icon-update-con">
            <div class="setting-main-icon-con">
              <div class="setting-main-icon-logo"></div>
              <h1 class="setting-main-app-name">
                Player
              </h1>
              <div class="setting-main-version">1.0.0</div>
            </div>
            <div class="setting-main-check-update">
              <icon-button
                :text="'检查更新'"
                :img-src="'src/asserts/update.png'"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <base-info />
        </el-col>
      </el-row>
    </div>
    <el-container id="container">
      <function-setting />
    </el-container>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import BaseInfo from "./BaseInfo.vue"
import FunctionSetting from "./FunctionSetting.vue"
import Button from "./Button.vue"

export default defineComponent({
  name: "app-settings",
  components: {
    [BaseInfo.name]: BaseInfo,
    [FunctionSetting.name]: FunctionSetting,
    [Button.name]: Button
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.setting-main-icon-logo {
  @size: 60px;
  height: @size;
  width: @size;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMCIgeT0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDI0IDEwMjQiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pfS5zdDF7b3BhY2l0eTouMTY7ZmlsbDp1cmwoI1NWR0lEXzJfKX0uc3Qye2ZpbGw6dXJsKCNTVkdJRF8zXyl9LnN0M3tvcGFjaXR5Oi4xNjtmaWxsOnVybCgjU1ZHSURfNF8pfS5zdDR7ZmlsbDp1cmwoI1NWR0lEXzVfKX0uc3Q1e29wYWNpdHk6LjE1O2ZpbGw6dXJsKCNTVkdJRF82Xyl9LnN0NntmaWxsOnVybCgjU1ZHSURfN18pfTwvc3R5bGU+PGc+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgeDE9IjI2MC45NjciIHgyPSI5MTkuMTg0IiB5MT0iODcxLjE4MSIgeTI9IjQ5MS4xNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzY2OWFiZCIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6Izc3ZGJkYiIvPjwvbGluZWFyR3JhZGllbnQ+PHBvbHlnb24gcG9pbnRzPSIyOTcuNTQgOTM0LjUyIDg4Mi42IDU5Ni43MiA4ODIuNjEgNDI3LjgyIDI5Ny41NCA3NjUuNjUiIGNsYXNzPSJzdDAiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiB4MT0iNTUzLjUwNSIgeDI9IjYyNi42NDciIHkxPSI2MTcuODI4IiB5Mj0iNzQ0LjUxMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjU1OSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBvbHlnb24gcG9pbnRzPSIyOTcuNTQgOTM0LjUyIDg4Mi42IDU5Ni43MiA4ODIuNjEgNDI3LjgyIDI5Ny41NCA3NjUuNjUiIGNsYXNzPSJzdDEiLz48L2c+PGc+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgeDE9IjExNC42NjMiIHgyPSIzMzQuMDkxIiB5MT0iNzQ0LjUyOCIgeTI9Ijg3MS4yMTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM2YThmYWQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjlhYmQiLz48L2xpbmVhckdyYWRpZW50Pjxwb2x5Z29uIHBvaW50cz0iMTUxLjIzIDY4MS4xOCAxNTEuMjIgODUwLjA5IDI5Ny41NCA5MzQuNTIgMjk3LjU0IDc2NS42NSIgY2xhc3M9InN0MiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIHgxPSIyNjAuOTQ4IiB4Mj0iMTg3LjgwNiIgeTE9Ijc0NC41MjgiIHkyPSI4NzEuMjEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuNTU5IiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwO3N0b3Atb3BhY2l0eTowIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwIi8+PC9saW5lYXJHcmFkaWVudD48cG9seWdvbiBwb2ludHM9IjE1MS4yMyA2ODEuMTggMTUxLjIyIDg1MC4wOSAyOTcuNTQgOTM0LjUyIDI5Ny41NCA3NjUuNjUiIGNsYXNzPSJzdDMiLz48L2c+PGc+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF81XyIgeDE9IjExNC42NjMiIHgyPSI1NTMuNTAzIiB5MT0iMjM3Ljc5MyIgeTI9IjQ5MS4xNTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM2YThmYWQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjlhYmQiLz48L2xpbmVhckdyYWRpZW50Pjxwb2x5Z29uIHBvaW50cz0iMTUxLjIzIDE3NC40NSAxNTEuMjEgMzQzLjM2IDQ0My43OSA1MTIuMjcgNTkwLjA4IDQyNy44MSIgY2xhc3M9InN0NCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNl8iIHgxPSIzNzAuNjU2IiB4Mj0iMjk3LjUwOSIgeTE9IjMwMS4xMjgiIHkyPSI0MjcuODIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuNTU5IiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwO3N0b3Atb3BhY2l0eTowIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwIi8+PC9saW5lYXJHcmFkaWVudD48cG9seWdvbiBwb2ludHM9IjE1MS4yMyAxNzQuNDUgMTUxLjIxIDM0My4zNiA0NDMuNzkgNTEyLjI3IDU5MC4wOCA0MjcuODEiIGNsYXNzPSJzdDUiLz48L2c+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF83XyIgeDE9Ijc4LjA5MSIgeDI9IjczNi4zMzciIHkxPSI1NTQuNDk4IiB5Mj0iMTc0LjQ1OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I2NjZWNmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzlmZWNlZCIvPjwvbGluZWFyR3JhZGllbnQ+PHBvbHlnb24gcG9pbnRzPSIyOTcuNTEgNzY1LjY0IDE1MS4yMyA2ODEuMTggNTkwLjA4IDQyNy44MSAxNTEuMjMgMTc0LjQ1IDI5Ny41IDkwIDg4Mi42MSA0MjcuODIiIGNsYXNzPSJzdDYiLz48L3N2Zz4=);
}
.setting-main-check-update-button {
  height: 22px;
  width: 85px;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  cursor: pointer;

  .setting-main-check-update-text {
    line-height: 22px;
    padding-left: 8px;
  }

  .setting-main-check-update-img {
    img {
      @size: 20px;
      height: @size;
      width: @size;
    }
  }
}
.setting-main-app-name {
  font-size: 32px;
  font-weight: normal;
  margin: 0;
}
.setting-main-version {
  font-size: 13px;
}
.setting-main-check-update-button {
  margin-top: 16px;
}
</style>
