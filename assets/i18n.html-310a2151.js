import{_ as i,r as o,o as p,c as u,d as a,w as e,e as c,a as n,b as s}from"./app-ab2049dd.js";const d={},r=c(`<h1 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h1><p>Vack 基于 vue-i18n 实现国际化。</p><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>每种语言在 <code>src/locales</code> 目录下创建一个相应的目录，以语言名称作为目录的名称。 语言目录下可以创建任意数量的 <code>json</code> 文件，这些文件将会被自动引入。</p><p>目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src
└─ locales
   ├─ en-US
   │  ├─ login.json
   │  └─ abount-me.json
   └─ zh-CN
      ├─ login.json
      └─ abount-me.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>`,7),k=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ login.xxx }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ abountMe.xxx }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" useI18n "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-i18n'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" i18n "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useI18n"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("i18n"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"t"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'login.xxx'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("i18n"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"t"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'abountMe.xxx'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=c(`<h2 id="切换语言" tabindex="-1"><a class="header-anchor" href="#切换语言" aria-hidden="true">#</a> 切换语言</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> translateLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/locales&#39;</span>

<span class="token function">translateLang</span><span class="token punctuation">(</span><span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">)</span>
<span class="token function">translateLang</span><span class="token punctuation">(</span><span class="token string">&#39;en-US&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用环境变量 <code>VITE_LOCALE_DEFAULT</code> 可以配置默认使用的语言</p></blockquote>`,3);function g(b,h){const t=o("CodeGroupItem"),l=o("CodeGroup");return p(),u("div",null,[r,a(l,null,{default:e(()=>[a(t,{title:"VUE"},{default:e(()=>[k]),_:1}),a(t,{title:"JAVASCRIPT"},{default:e(()=>[v]),_:1})]),_:1}),m])}const x=i(d,[["render",g],["__file","i18n.html.vue"]]);export{x as default};
