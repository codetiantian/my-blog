import{_ as s,c as n,b as i,o as a}from"./app-DYdygXnu.js";const l={};function t(d,e){return a(),n("div",null,e[0]||(e[0]=[i(`<h3 id="适配不同屏幕" tabindex="-1"><a class="header-anchor" href="#适配不同屏幕"><span>适配不同屏幕</span></a></h3><blockquote><p>需要注意设置<code>device-width</code>时的单位为<code>PX</code></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@media only</span>
<span class="line">screen and (device-width: 375PX) and (device-height: 667PX) and (-webkit-device-pixel-ratio: 2),</span>
<span class="line">screen and (device-width: 414PX) and (device-height: 736PX) and (-webkit-device-pixel-ratio: 3){</span>
<span class="line">  .bavbar-padtop {</span>
<span class="line">    padding-top: 40px;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兼容性适配" tabindex="-1"><a class="header-anchor" href="#兼容性适配"><span>兼容性适配</span></a></h3><blockquote><p>当低版本设备白屏时，大概率就是使用的某个工具没有转成cmj，需要<code>vue.config.js</code>中针对报错的js再使用babel转义一下：</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">transpileDependencies: [</span>
<span class="line">    &#39;@vue/devtools-api&#39;,</span>
<span class="line">    &#39;dom7&#39;,</span>
<span class="line">    &#39;pinia&#39;</span>
<span class="line">  ]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设备调试方案</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">https://blog.csdn.net/weixin_43883776/article/details/86232157</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用阿里oss图片时-需要注意" tabindex="-1"><a class="header-anchor" href="#使用阿里oss图片时-需要注意"><span>使用阿里oss图片时，需要注意</span></a></h3><ul><li>iOS14、14+系统支持webp格式，可以使用</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&#39;https://images.daojia.com/jz/pic/92d148536992a9ab6af56e26c3da5699.png?x-oss-process=image/format,webp&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>不支持webp时，需要考虑兼容处理</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export function supportsWebP () {</span>
<span class="line">  // 如果浏览器支持 canvas 和 2D 上下文</span>
<span class="line">  if (!document.createElement(&#39;canvas&#39;).getContext) {</span>
<span class="line">    return false</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 检查是否支持基本的 WebP</span>
<span class="line">  const isWebp = document.createElement(&#39;canvas&#39;).toDataURL(&#39;image/webp&#39;).indexOf(&#39;data:image/webp&#39;) === 0</span>
<span class="line">  return isWebp</span>
<span class="line">}</span>
<span class="line">export function getDealImgUrl (imgUrl: string, useMasterMap = false) {</span>
<span class="line">  let isSupport = false</span>
<span class="line">  if (mainStore.strSupportWebp === &#39;&#39;) {</span>
<span class="line">    isSupport = supportsWebP()</span>
<span class="line">    mainStore.updateSupportValue(isSupport ? &#39;1&#39; : &#39;0&#39;)</span>
<span class="line">  } else {</span>
<span class="line">    isSupport = mainStore.strSupportWebp === &#39;1&#39;</span>
<span class="line">  }</span>
<span class="line">  return isSupport ? \`\${imgUrl}?x-oss-process=image/format,webp\` : (useMasterMap ? \`\${imgUrl}\` : \`\${imgUrl}?x-oss-process=image/format,jpg/quality,q_70\`)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当设置<code>background-image</code>时，需要判断当前设备是否支持webp格式，通过动态绑定方案实现</li></ul><h3 id="使用gif图-不同移动设备展示样式不一致" tabindex="-1"><a class="header-anchor" href="#使用gif图-不同移动设备展示样式不一致"><span>使用gif图，不同移动设备展示样式不一致</span></a></h3><blockquote><p>gif图制作的播放一次，在低版本的安卓设备（安卓8）和iOS14以下的设备，会偶发的播放2次，分析原因：<code>vue中使用gif，可能是由于组件刷新，导致gif图片重新播放</code></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 处理方案</span>
<span class="line">&lt;img ref=&quot;sucImgRef&quot; alt=&quot;&quot; class=&quot;suc-img&quot;&gt;</span>
<span class="line"></span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  if (sucImgRef &amp;&amp; !sucImgRef.value.src) {</span>
<span class="line">    sucImgRef.value.src = getSucGifImg()</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const p=s(l,[["render",t],["__file","compatibility.html.vue"]]),r=JSON.parse('{"path":"/vue/compatibility.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"适配不同屏幕","slug":"适配不同屏幕","link":"#适配不同屏幕","children":[]},{"level":3,"title":"兼容性适配","slug":"兼容性适配","link":"#兼容性适配","children":[]},{"level":3,"title":"使用阿里oss图片时，需要注意","slug":"使用阿里oss图片时-需要注意","link":"#使用阿里oss图片时-需要注意","children":[]},{"level":3,"title":"使用gif图，不同移动设备展示样式不一致","slug":"使用gif图-不同移动设备展示样式不一致","link":"#使用gif图-不同移动设备展示样式不一致","children":[]}],"git":{"updatedTime":1731055549000,"contributors":[{"name":"cuibingbing","username":"cuibingbing","email":"cuibingbing@daojia-inc.com","commits":1,"url":"https://github.com/cuibingbing"}]},"filePathRelative":"vue/compatibility.md"}');export{p as comp,r as data};
