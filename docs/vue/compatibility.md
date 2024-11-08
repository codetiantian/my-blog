### 适配不同屏幕
> 需要注意设置`device-width`时的单位为`PX`
```
@media only
screen and (device-width: 375PX) and (device-height: 667PX) and (-webkit-device-pixel-ratio: 2),
screen and (device-width: 414PX) and (device-height: 736PX) and (-webkit-device-pixel-ratio: 3){
  .bavbar-padtop {
    padding-top: 40px;
  }
}
```

### 兼容性适配
> 当低版本设备白屏时，大概率就是使用的某个工具没有转成cmj，需要`vue.config.js`中针对报错的js再使用babel转义一下：
```
transpileDependencies: [
    '@vue/devtools-api',
    'dom7',
    'pinia'
  ]
```

- 设备调试方案
```
https://blog.csdn.net/weixin_43883776/article/details/86232157
```


### 使用阿里oss图片时，需要注意
- iOS14、14+系统支持webp格式，可以使用
```
'https://images.daojia.com/jz/pic/92d148536992a9ab6af56e26c3da5699.png?x-oss-process=image/format,webp'
```

- 不支持webp时，需要考虑兼容处理
```
export function supportsWebP () {
  // 如果浏览器支持 canvas 和 2D 上下文
  if (!document.createElement('canvas').getContext) {
    return false
  }

  // 检查是否支持基本的 WebP
  const isWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
  return isWebp
}
export function getDealImgUrl (imgUrl: string, useMasterMap = false) {
  let isSupport = false
  if (mainStore.strSupportWebp === '') {
    isSupport = supportsWebP()
    mainStore.updateSupportValue(isSupport ? '1' : '0')
  } else {
    isSupport = mainStore.strSupportWebp === '1'
  }
  return isSupport ? `${imgUrl}?x-oss-process=image/format,webp` : (useMasterMap ? `${imgUrl}` : `${imgUrl}?x-oss-process=image/format,jpg/quality,q_70`)
}
```

- 当设置`background-image`时，需要判断当前设备是否支持webp格式，通过动态绑定方案实现


### 使用gif图，不同移动设备展示样式不一致
> gif图制作的播放一次，在低版本的安卓设备（安卓8）和iOS14以下的设备，会偶发的播放2次，分析原因：`vue中使用gif，可能是由于组件刷新，导致gif图片重新播放`

```
// 处理方案
<img ref="sucImgRef" alt="" class="suc-img">

onMounted(() => {
  if (sucImgRef && !sucImgRef.value.src) {
    sucImgRef.value.src = getSucGifImg()
  }
})
```