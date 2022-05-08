<template>
  <wrapper-file-upload
    :wrapper-upload="fileAttr"
    :auto-upload="false"
    :on-change="handleChange"
    :show-file-list="false"
    @normal-click="normalClick"
  >
    <div class="select-item-con">
      <div class="select-item-icon-con">
        <el-row align="middle" justify="center">
          <img :src="imgSrc" alt="">
        </el-row>
      </div>
      <div class="select-item-text">
        <span>{{itemText}}</span>
      </div>
    </div>
  </wrapper-file-upload>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext
} from 'vue'
import WrapperFileUpload from "../../../components/WrapperFileUpload/WrapperFileUpload.vue";
import {
  UploadFile,
  UploadProps
} from "element-plus"
import {useVideoInfo} from "../../../store/videoInfo";

export default defineComponent({
  name: "select-item",
  components: {
    [WrapperFileUpload.name]: WrapperFileUpload
  },
  props: {
    itemText: {
      type: String,
      default: '暂无'
    },
    imgSrc: {
      type: String
    },
    isFile: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context: SetupContext) {
    const itemText = props.itemText
    const imgSrc = props.imgSrc
    const fileAttr = props.isFile
    const { updateVideoAddress } = useVideoInfo()

    const handleChange: UploadProps['onChange'] = (
      uploadFile: UploadFile
    ) => {
      updateVideoAddress(URL.createObjectURL(uploadFile.raw))
      context.emit('file-select')
    }

    const normalClick = () => {
      context.emit('file-select')
    }

    return {
      itemText,
      imgSrc,
      fileAttr,
      handleChange,
      normalClick
    }
  }
})
</script>

<style scoped lang="less">
.select-item-con {
  @size: 100px;
  height: @size;
  width: @size;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 20px;

  .select-item-icon-con {
    height: 60px;

    img {
      @size: 50px;
      height: @size;
      width: @size;
    }
  }

  .select-item-text {
    height: 20px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
