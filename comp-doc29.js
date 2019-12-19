(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1301:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s={template:'<section class="markdown"><h2 id="api">API</h2><h3 id="list">List</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>bordered</td><td>是否展示边框</td><td>boolean</td><td>false</td></tr><tr><td>footer</td><td>列表底部</td><td>string|slot</td><td>-</td></tr><tr><td>grid</td><td>列表栅格配置</td><td>object</td><td>-</td></tr><tr><td>header</td><td>列表头部</td><td>string|slot</td><td>-</td></tr><tr><td>itemLayout</td><td>设置 List.Item 布局, 设置成<code>vertical</code>则竖直样式显示, 默认横排</td><td>string</td><td>-</td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td>boolean</td><td>false</td></tr><tr><td>loadMore</td><td>加载更多</td><td>boolean|slot</td><td>false</td></tr><tr><td>pagination</td><td>对应的 <code>pagination</code> 配置, 设置 <code>false</code> 不显示</td><td>boolean|object</td><td>false</td></tr><tr><td>size</td><td>list 的尺寸</td><td><code>default</code> | <code>middle</code> | <code>small</code></td><td>default</td></tr></tbody></table><h3 id="pagination">pagination</h3><p>分页的配置项</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>position</td><td>指定分页显示的位置</td><td>&#39;top&#39; | &#39;bottom&#39; | &#39;both&#39; | &#39;bottom&#39;</td><td></td></tr></tbody></table><p>更多配置项，请查看 Pagination</p><h4 id="list-grid-props">List grid props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>column</td><td>列数</td><td>number</td><td>-</td></tr><tr><td>gutter</td><td>栅格间隔</td><td>number</td><td>0</td></tr><tr><td>xs</td><td>&lt;576px 展示的列数</td><td>number</td><td>-</td></tr><tr><td>sm</td><td>≥576px 展示的列数</td><td>number</td><td>-</td></tr><tr><td>md</td><td>≥768px 展示的列数</td><td>number</td><td>-</td></tr><tr><td>lg</td><td>≥992px 展示的列数</td><td>number</td><td>-</td></tr><tr><td>xl</td><td>≥1200px 展示的列数</td><td>number</td><td>-</td></tr><tr><td>xxl</td><td>≥1600px 展示的列数</td><td>number</td><td>-</td></tr></tbody></table><h3 id="listitem">List.Item</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>actions</td><td>列表操作组对应的slot名称，根据 <code>itemLayout</code> 的不同, 位置在卡片底部或者最右侧</td><td>Array</td><td>-</td></tr><tr><td>extra</td><td>额外内容, 通常用在 <code>itemLayout</code> 为 <code>vertical</code> 的情况下, 展示右侧内容; <code>horizontal</code> 展示在列表元素最右侧</td><td>slot</td><td>-</td></tr></tbody></table><h4 id="listitemmeta">List.Item.Meta</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>avatar</td><td>列表元素的图标</td><td>slot</td><td>-</td></tr><tr><td>description</td><td>列表元素的描述内容</td><td>string|slot</td><td>-</td></tr><tr><td>title</td><td>列表元素的标题</td><td>string|slot</td><td>-</td></tr></tbody></table></section>'},o={template:'<section class="markdown"><h1 id="list-列表">List 列表</h1><p>通用列表。</p><h2 id="何时使用">何时使用</h2><p>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</p><h2 id="代码演示">代码演示</h2></section>'},d=n(111),l=n(3),r=n(115),c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;h3 style="margin-bottom: 16px;">Default Size&lt;/h3>\n        &lt;s-list bordered="{{true}}" dataSource="{{data}}">\n            &lt;div slot="header">Header&lt;/div>\n            &lt;s-list-item slot="renderItem">&lt;s-text mark>[ITEM]&lt;/s-text> {{item}}&lt;/s-list-item>\n            &lt;div slot="footer">Footer&lt;/div>\n        &lt;/s-list>\n        &lt;h3 style="margin: 16px 0;">Small Size&lt;/h3>\n        &lt;s-list bordered="{{true}}" dataSource="{{data}}" size="small">\n            &lt;div slot="header">Header&lt;/div>\n            &lt;s-list-item slot="renderItem">{{item}}&lt;/s-list-item>\n            &lt;div slot="footer">Footer&lt;/div>\n        &lt;/s-list>\n        &lt;h3 style="margin: 16px 0;">Large Size&lt;/h3>\n        &lt;s-list bordered="{{true}}" dataSource="{{data}}" size="large">\n            &lt;div slot="header">Header&lt;/div>\n            &lt;s-list-item slot="renderItem">{{item}}&lt;/s-list-item>\n            &lt;div slot="footer">Footer&lt;/div>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport List from \'santd/list\';\nimport Icon from \'santd/icon\';\nimport Typography from \'santd/typography\';\n\nexport default {\n    components: {\n        \'s-list\': List,\n        \'s-list-item\': List.Item,\n        \'s-text\': Typography.Text\n    },\n    initData() {\n        return {\n            data: [\n                \'Racing car sprays burning fuel into crowd.\',\n                \'Japanese princess to wed commoner.\',\n                \'Australian walks 100km after outback crash.\',\n                \'Man charged over missing wedding girl.\',\n                \'Los Angeles battles huge wildfires.\'\n            ]\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="简单列表">简单列表</h4>\n<p>列表拥有大、中、小三种尺寸。\n通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。\n可通过设置 <code>header</code> 和 <code>footer</code>，来自定义列表头部和尾部。\n如果<code>header</code>或 <code>footer</code>是个复杂结构，比如里面需要放组件，那么支持用<code>slot</code>来处理。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.a,"s-list-item":d.a.Item,"s-text":r.a.Text},initData:()=>({data:["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."]}),template:'<div><h3 style="margin-bottom: 16px;">Default Size</h3><s-list bordered="{{true}}" dataSource="{{data}}"><div slot="header">Header</div><s-list-item slot="renderItem"><s-text mark="">[ITEM]</s-text> {{item}}</s-list-item><div slot="footer">Footer</div></s-list><h3 style="margin: 16px 0;">Small Size</h3><s-list bordered="{{true}}" dataSource="{{data}}" size="small"><div slot="header">Header</div><s-list-item slot="renderItem">{{item}}</s-list-item><div slot="footer">Footer</div></s-list><h3 style="margin: 16px 0;">Large Size</h3><s-list bordered="{{true}}" dataSource="{{data}}" size="large"><div slot="header">Header</div><s-list-item slot="renderItem">{{item}}</s-list-item><div slot="footer">Footer</div></s-list></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576726622069"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p=n(54),m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list itemLayout=\"horizontal\" dataSource=\"{{data}}\">\n            &lt;s-list-item slot=\"renderItem\">\n                &lt;s-list-item-meta\n                    description=\"{{item.description}}\"\n                >\n                    &lt;s-avatar slot=\"avatar\" src=\"{{item.src}}\">&lt;/s-avatar>\n                    &lt;a slot=\"title\" href=\"#\">{{item.title}}&lt;/a>\n                &lt;/s-list-item-meta>\n            &lt;/s-list-item>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport List from 'santd/list';\nimport Avatar from 'santd/avatar';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-list-item-meta': List.Item.Meta,\n        's-avatar': Avatar\n    },\n    initData() {\n        return {\n            data: [\n                {\n                    title: 'santd Title 1',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 2',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 3',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 4',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n            ]\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基础列表">基础列表</h4>\n<p>基础列表</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.a,"s-list-item":d.a.Item,"s-list-item-meta":d.a.Item.Meta,"s-avatar":p.a},initData:()=>({data:[{title:"santd Title 1",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 2",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 3",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 4",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"}]}),template:'<div><s-list itemLayout="horizontal" dataSource="{{data}}"><s-list-item slot="renderItem"><s-list-item-meta description="{{item.description}}"><s-avatar slot="avatar" src="{{item.src}}"></s-avatar><a slot="title" href="#">{{item.title}}</a></s-list-item-meta></s-list-item></s-list></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576726622056"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const g=[];for(let t=0;t<23;t++)g.push({href:"#",title:`San design part ${t}`,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"San Design, a design language for background applications, is refined by Baidu App Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-list\n            itemLayout="vertical"\n            size="large"\n            pagination="{{pagination}}"\n            dataSource="{{listData}}"\n        >\n            &lt;s-list-item slot="renderItem" key="{{item.title}}" actions="{{[\'star\', \'like\', \'message\']}}">\n                &lt;span slot="star">&lt;s-icon type="star-o" style="margin-right: 8px;" />156&lt;/span>\n                &lt;span slot="like">&lt;s-icon type="like-o" style="margin-right: 8px;" />156&lt;/span>\n                &lt;span slot="message">&lt;s-icon type="message" style="margin-right: 8px;" />2&lt;/span>\n                &lt;ul slot="actions" class="{{prefixCls}}-item-action">\n                    &lt;li>&lt;s-icon type="star-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="like-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="message" style="margin-right: 8px;" />2&lt;/li>\n                &lt;/ul>\n                &lt;img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="logo" width="272" slot="extra">\n                &lt;s-list-item-meta description="{{item.description}}">\n                    &lt;s-avatar src="{{item.avatar}}" slot="avatar">&lt;/s-avatar>\n                    &lt;a href="{{item.href}}" slot="title">{{item.title}}&lt;/a>\n                &lt;/s-list-item-meta>\n                {{item.content}}\n            &lt;/s-list-item>\n            &lt;div slot="footer">&lt;b>Santd&lt;/b> footer part&lt;/div>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport List from \'santd/list\';\nimport Icon from \'santd/icon\';\nimport Avatar from \'santd/avatar\';\n\nconst listData = [];\nfor (let i = 0; i &lt; 23; i++) {\n    listData.push({\n        href: \'#\',\n        title: &#96;San design part &#36;&#123;i}&#96;,\n        avatar: \'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\',\n        description: \'San Design, a design language for background applications, is refined by Baidu App Team.\',\n        content: \'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\',\n    });\n}\n\nexport default {\n    components: {\n        \'s-icon\': Icon,\n        \'s-list\': List,\n        \'s-list-item\': List.Item,\n        \'s-list-item-meta\': List.Item.Meta,\n        \'s-avatar\': Avatar\n    },\n    initData() {\n        return {\n            listData: listData,\n            pagination: {\n                onChange(page) {\n                    console.log(page);\n                },\n                pageSize: 3\n            }\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="竖排列表样式">竖排列表样式</h4>\n<p>通过设置 <code>itemLayout</code> 属性为 <code>vertical</code> 可实现竖排列表样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-icon":l.a,"s-list":d.a,"s-list-item":d.a.Item,"s-list-item-meta":d.a.Item.Meta,"s-avatar":p.a},initData:()=>({listData:g,pagination:{onChange(t){console.log(t)},pageSize:3}}),template:'<div><s-list itemLayout="vertical" size="large" pagination="{{pagination}}" dataSource="{{listData}}"><s-list-item slot="renderItem" key="{{item.title}}" actions="{{[\'star\', \'like\', \'message\']}}"><span slot="star"><s-icon type="star-o" style="margin-right: 8px;"></s-icon>156</span><span slot="like"><s-icon type="like-o" style="margin-right: 8px;"></s-icon>156</span><span slot="message"><s-icon type="message" style="margin-right: 8px;"></s-icon>2</span><ul slot="actions" class="{{prefixCls}}-item-action"><li><s-icon type="star-o" style="margin-right: 8px;"></s-icon>156</li><li><s-icon type="like-o" style="margin-right: 8px;"></s-icon>156</li><li><s-icon type="message" style="margin-right: 8px;"></s-icon>2</li></ul><img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="logo" width="272" slot="extra"><s-list-item-meta description="{{item.description}}"><s-avatar src="{{item.avatar}}" slot="avatar"></s-avatar><a href="{{item.href}}" slot="title">{{item.title}}</a></s-list-item-meta>{{item.content}}</s-list-item><div slot="footer"><b>Santd</b> footer part</div></s-list></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576726622042"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x=(n(1416),n(102)),u={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list\n            grid=\"{{{gutter:16, column:4}}}\"\n            dataSource=\"{{data}}\"\n        >\n            &lt;s-list-item slot=\"renderItem\">\n                &lt;s-card title=\"{{item.title}}\">{{item.content}}&lt;/s-card>\n           &lt;/s-list-item>\n       &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport List from 'santd/list';\nimport Card from 'santd/card';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-card': Card\n    },\n    initData() {\n        return {\n            data: [\n                {\n                    title: 'santd Title 1',\n                    content: 'Santd, content1!'\n                },\n                {\n                    title: 'santd Title 2',\n                    content: 'Santd, content2!'\n                },\n                {\n                    title: 'santd Title 3',\n                    content: 'Santd, content3!'\n                },\n                {\n                    title: 'santd Title 4',\n                    content: 'Santd, content4!'\n                },\n            ]\n        }\n    }\n}\n&lt;/script>\n&lt;style>\n.title {\n    width: 100%;\n    height:35px;\n    line-height: 35px;\n    color:#666;\n    border-bottom: 1px solid #ccc;\n}\n.content {\n    width: 100%;\n    height: 70px;\n    color: #333;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="栅格列表">栅格列表</h4>\n<p>可以通过设置 <code>List</code> 的 <code>grid</code> 属性来实现栅格列表，<code>column</code> 可设置期望显示的列数。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.a,"s-list-item":d.a.Item,"s-card":x.a},initData:()=>({data:[{title:"santd Title 1",content:"Santd, content1!"},{title:"santd Title 2",content:"Santd, content2!"},{title:"santd Title 3",content:"Santd, content3!"},{title:"santd Title 4",content:"Santd, content4!"}]}),template:'<div><s-list grid="{{{gutter:16, column:4}}}" dataSource="{{data}}"><s-list-item slot="renderItem"><s-card title="{{item.title}}">{{item.content}}</s-card></s-list-item></s-list></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576726621958"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},b={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list\n            grid=\"{{\n                {gutter:16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}\n            }}\"\n            dataSource=\"{{data}}\"\n        >\n            &lt;s-list-item slot=\"renderItem\">\n                &lt;s-card title=\"{{item.title}}\">{{item.content}}&lt;/s-card>\n           &lt;/s-list-item>\n       &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport List from 'santd/list';\nimport Card from 'santd/card';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-card': Card\n    },\n    initData() {\n        return {\n            data: [\n                {\n                    title: 'santd Title 1',\n                    content: 'Santd, content1!'\n                },\n                {\n                    title: 'santd Title 2',\n                    content: 'Santd, content2!'\n                },\n                {\n                    title: 'santd Title 3',\n                    content: 'Santd, content3!'\n                },\n                {\n                    title: 'santd Title 4',\n                    content: 'Santd, content4!'\n                },\n                {\n                    title: 'santd Title 5',\n                    content: 'Santd, content4!'\n                },\n                {\n                    title: 'santd Title 6',\n                    content: 'Santd, content4!'\n                }\n            ]\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="响应式的栅格列表">响应式的栅格列表</h4>\n<p>响应式的栅格列表。尺寸与 Layout Grid 保持一致。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.a,"s-list-item":d.a.Item,"s-card":x.a},initData:()=>({data:[{title:"santd Title 1",content:"Santd, content1!"},{title:"santd Title 2",content:"Santd, content2!"},{title:"santd Title 3",content:"Santd, content3!"},{title:"santd Title 4",content:"Santd, content4!"},{title:"santd Title 5",content:"Santd, content4!"},{title:"santd Title 6",content:"Santd, content4!"}]}),template:'<div><s-list grid="{{\n                {gutter:16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}\n            }}" dataSource="{{data}}"><s-list-item slot="renderItem"><s-card title="{{item.title}}">{{item.content}}</s-card></s-list-item></s-list></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576726621949"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v=n(10),f=n(122),y={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list\n            class=\"demo-loadmore-list\"\n            loading=\"{{initLoading}}\"\n            itemLayout=\"horizontal\"\n            dataSource=\"{{list}}\"\n        >\n            &lt;s-list-item slot=\"renderItem\" actions=\"{{['edit', 'more']}}\">\n                &lt;a slot=\"edit\">edit&lt;/a>\n                &lt;a slot=\"more\">more&lt;/a>\n                &lt;s-skeleton avatar=\"{{true}}\" loading=\"{{item.loading}}\" active=\"{{true}}\">\n                    &lt;s-list-item-meta description=\"San Design, a design language for background applications, is refined by Baidu App Team\">\n                        &lt;s-avatar src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" slot=\"avatar\">&lt;/s-avatar>\n                        &lt;a href=\"#\" slot=\"title\">{{item.title}}&lt;/a>\n                    &lt;/s-list-item-meta>\n                &lt;/s-skeleton>\n            &lt;/s-list-item>\n            &lt;div\n                s-if=\"!initLoading && !loading\" slot=\"loadMore\"\n                style=\"text-align: center; margin-top: 12px; height: 32px; line-height: 32px;\"\n            >&lt;s-button on-click=\"handleLoadMore\">loading more&lt;/s-button>&lt;/div>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport List from 'santd/list';\nimport Avatar from 'santd/avatar';\nimport Button from 'santd/button';\nimport Skeleton from 'santd/skeleton';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-list-item-meta': List.Item.Meta,\n        's-avatar': Avatar,\n        's-button': Button,\n        's-skeleton': Skeleton\n    },\n    initData() {\n        return {\n            initLoading: true,\n            loading: false,\n            list: [],\n            data: [],\n            defaultData: [\n                {\n                    title: 'santd Title 1',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 2',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 3',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 4',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n            ]\n        }\n    },\n    getData(callback) {\n        window.setTimeout(() => {\n            const defaultData = this.data.get('defaultData');\n            callback(defaultData);\n        }, 2000);\n    },\n    attached() {\n        this.getData((res) => {\n            this.data.set('initLoading', false);\n            res = res.map(item => {\n                item.loading = false;\n                return item;\n            });\n            this.data.set('list', res);\n            this.data.set('data', res);\n        });\n    },\n    handleLoadMore() {\n        this.data.set('loading', true);\n        this.data.push('list', {loading: true, title: true});\n\n        this.getData((res) => {\n            res = res.map(item => {\n                item.loading = false;\n                return item;\n            });\n\n            this.data.pop('list');\n            console.log(res);\n            res.forEach(item => {\n                this.data.push('list', item);\n            });\n            this.data.set('loading', false);\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="加载更多">加载更多</h4>\n<p>可通过 loadMore 属性实现加载更多功能。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.a,"s-list-item":d.a.Item,"s-list-item-meta":d.a.Item.Meta,"s-avatar":p.a,"s-button":v.a,"s-skeleton":f.a},initData:()=>({initLoading:!0,loading:!1,list:[],data:[],defaultData:[{title:"santd Title 1",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 2",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 3",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 4",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"}]}),getData(t){window.setTimeout(()=>{const e=this.data.get("defaultData");t(e)},2e3)},attached(){this.getData(t=>{this.data.set("initLoading",!1),t=t.map(t=>(t.loading=!1,t)),this.data.set("list",t),this.data.set("data",t)})},handleLoadMore(){this.data.set("loading",!0),this.data.push("list",{loading:!0,title:!0}),this.getData(t=>{t=t.map(t=>(t.loading=!1,t)),this.data.pop("list"),console.log(t),t.forEach(t=>{this.data.push("list",t)}),this.data.set("loading",!1)})},template:'<div><s-list class="demo-loadmore-list" loading="{{initLoading}}" itemLayout="horizontal" dataSource="{{list}}"><s-list-item slot="renderItem" actions="{{[\'edit\', \'more\']}}"><a slot="edit">edit</a><a slot="more">more</a><s-skeleton avatar="{{true}}" loading="{{item.loading}}" active="{{true}}"><s-list-item-meta description="San Design, a design language for background applications, is refined by Baidu App Team"><s-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" slot="avatar"></s-avatar><a href="#" slot="title">{{item.title}}</a></s-list-item-meta></s-skeleton></s-list-item><div s-if="!initLoading && !loading" slot="loadMore" style="text-align: center; margin-top: 12px; height: 32px; line-height: 32px;"><s-button on-click="handleLoadMore">loading more</s-button></div></s-list></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576726621969"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=i.a.defineComponent({components:{readme:s,desc:o,simple:c,basic:m,vertical:h,grid:u,resposive:b,loadmore:y},template:"\n        <div>\n            <desc/>\n            <simple/>\n            <basic/>\n            <loadmore/>\n            <vertical/>\n            <grid/>\n            <resposive/>\n            <readme/>\n        </div>\n    "})},1416:function(t,e,n){var a=n(1417);"string"==typeof a&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};n(5)(a,i);a.locals&&(t.exports=a.locals)},1417:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.title {\n    width: 100%;\n    height:35px;\n    line-height: 35px;\n    color:#666;\n    border-bottom: 1px solid #ccc;\n}\n.content {\n    width: 100%;\n    height: 70px;\n    color: #333;\n}\n",""])}}]);