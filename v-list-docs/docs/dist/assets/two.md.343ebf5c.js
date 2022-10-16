import{_ as s,c as a,o as n,d as l}from"./app.3d2a1e9c.js";const C=JSON.parse('{"title":"vue2\u7248\u672C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u53D1\u73AF\u5883","slug":"\u5F00\u53D1\u73AF\u5883","link":"#\u5F00\u53D1\u73AF\u5883","children":[]},{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]},{"level":2,"title":"\u53C2\u6570Props","slug":"\u53C2\u6570props","link":"#\u53C2\u6570props","children":[]}],"relativePath":"two.md"}'),p={name:"two.md"},t=l(`<h1 id="vue2\u7248\u672C" tabindex="-1">vue2\u7248\u672C <a class="header-anchor" href="#vue2\u7248\u672C" aria-hidden="true">#</a></h1><h2 id="\u5F00\u53D1\u73AF\u5883" tabindex="-1">\u5F00\u53D1\u73AF\u5883 <a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a></h2><p><img src="https://img.shields.io/badge/vue-2.6.14-4FC08D?logo=Vue.js&amp;?style=flat-square" alt=""></p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i @zhangfanhang/v-list</span></span>
<span class="line"></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-list</span></span>
<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">list-data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">listData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">item-height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">slotProps</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">context</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> slotProps</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">item </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VList </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@zhangfanhang/v-list</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          listData</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">VList</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u6570props" tabindex="-1">\u53C2\u6570Props <a class="header-anchor" href="#\u53C2\u6570props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u542B\u4E49</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th></tr></thead><tbody><tr><td>listData</td><td>\u6E32\u67D3\u6570\u636E\u5217\u8868</td><td>Array</td><td>\u662F</td></tr><tr><td>column</td><td>\u6570\u636E\u9879\u5217\u6570</td><td>Number</td><td>\u5426\uFF0C\u9ED8\u8BA4\u4E3A1</td></tr><tr><td>itemHeight</td><td>\u6570\u636E\u9879\u9AD8\u5EA6</td><td>Number</td><td>\u5426\uFF0C\u9ED8\u8BA4\u4E3A100</td></tr><tr><td>height</td><td>\u5BB9\u5668\u9AD8\u5EA6</td><td>String</td><td>\u5426\uFF0C\u9ED8\u8BA4100%\uFF0C\u5373\u7236\u5143\u7D20\u9AD8\u5EA6\uFF08\u9700\u8BBE\u7F6E\u7236\u5143\u7D20\u9AD8\u5EA6\uFF09</td></tr></tbody></table>`,9),o=[t];function e(c,r,F,D,y,i){return n(),a("div",null,o)}const h=s(p,[["render",e]]);export{C as __pageData,h as default};