(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[1221],{28034:n=>{n.exports={content:["article",["p","在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。\n如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。"],["h2","API"],["h3","Tooltip"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","children"],["td","触发 ",["code","Tooltip"]," 的元素"],["td",["code","React.ReactElement"]],["td","-"]],["tr",["td","content"],["td","弹出内容"],["td",["code","React.ReactNode"]],["td","-"]],["tr",["td","defaultVisible"],["td","默认是否显隐"],["td",["code","boolean"]],["td",["code","false"]]],["tr",["td","mode"],["td","设置亮色模式或者黑色模式"],["td",["code","'light' | 'dark'"]],["td",["code","'light'"]]],["tr",["td","onVisibleChange"],["td","显示隐藏的回调"],["td",["code","(visible: boolean) => void"]],["td","-"]],["tr",["td","placement"],["td","气泡框位置"],["td",["code","'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'"]],["td",["code","'top'"]]],["tr",["td","trigger"],["td","触发方式"],["td",["code","'onPress'"]],["td","-"]],["tr",["td","visible"],["td","受控模式下，是否展示弹出内容"],["td",["code","boolean"]],["td","-"]]]],["h3","Ref"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","hide"],["td","隐藏气泡弹出框"],["td",["code","() => void"]]],["tr",["td","show"],["td","展示气泡弹出框"],["td",["code","() => void"]]],["tr",["td","visible"],["td","气泡弹出框当前是否正在展示"],["td",["code","boolean"]]]]],["h2","Tooltip.scrollProps"],["p","当",["code","Tooltip"],"元素位于",["code","<ScrollView />"],"内部时，请赋值 ",["code","Tooltip.scrollProps"]," 属性，\n",["br"],"\n否则将不会跟随滚动"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ScrollView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span>\n\n<span class="token operator">&lt;</span>ScrollView <span class="token punctuation">{</span><span class="token operator">...</span>Tooltip<span class="token punctuation">.</span>scrollProps<span class="token punctuation">}</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span><span class="token punctuation">></span></span>'},["code","import { ScrollView } from 'react-native'\nimport { Tooltip } from '@ant-design/react-native'\n\n<ScrollView {...Tooltip.scrollProps}>\n  <Tooltip>...</Tooltip>\n<ScrollView>"]],["h2","Tooltip.Menu"],["h3","属性"],["p","除 ",["code","content"]," 外，其余全部属性继承自 ",["code","Tooltip"],"，特有属性如下："],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","actions"],["td","菜单列表，当弹出内容为标准菜单时使用"],["td",["code","Action[]"]],["td","-"]],["tr",["td","maxCount"],["td","菜单列表最大个数，超出则隐藏进行滚动"],["td",["code","number"]],["td","-"]],["tr",["td","onAction"],["td","当使用菜单列表时，选中菜单的回调"],["td",["code","(item: Action) => void"]],["td","-"]]]],["h3","Action"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","disabled"],["td","是否禁用"],["td",["code","boolean"]],["td",["code","false"]]],["tr",["td","icon"],["td","菜单项的图标"],["td",["code","ReactNode"]],["td",["code","null"]]],["tr",["td","key"],["td","菜单的唯一标识, 缺省时即为 ",["code","index"]],["td",["code","string | number"]],["td",["code","actions"]," 数组的 ",["code","index"]]],["tr",["td","onPress"],["td","点击时触发"],["td",["code","() => void"]],["td","-"]],["tr",["td","text"],["td","菜单列表，当弹出内容为标准菜单时使用"],["td",["code","ReactNode"]],["td","-"]]]],["h3","Ref"],["p","同 Tooltip"],["h2","FAQ"],["h3","为什么有些被Tooltip包裹的组件无法点击打开？"],["p","首先，Tooltip的children必须是",["code","React.ReactElement"],"，即JSX Element而非变量，"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>press<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>\n  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello</span> <span class="token attr-name">World"</span>\n  <span class="token attr-name">defaultVisible</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span>element<span class="token punctuation">}</span> <span class="token comment" spellcheck="true">// ❌ DO NOT USE       </span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>press<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span> <span class="token comment" spellcheck="true">// ✅ YES</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>'},["code",'const element = <Button>press</Button>\n\n<Tooltip\n  content="Hello World"\n  defaultVisible>\n  {element} // ❌ DO NOT USE       \n  <Button>press</Button> // ✅ YES\n</Tooltip>']],["p","其次，Tooltip的定位是基于",["code","View.onLayout"],"来计算的，所以children组件必须支持",["a",{title:null,href:"https://reactnative.dev/docs/view#onlayout"},"onLayout"],"事件。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> CustomButton <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    onLayout<span class="token punctuation">:</span> <span class="token punctuation">(</span>event<span class="token punctuation">:</span> LayoutChangeEvent<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">void</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">onLayout</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onLayout<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token operator">...</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>\n  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hello</span> <span class="token attr-name">World"</span>\n  <span class="token attr-name">defaultVisible</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomButton</span><span class="token punctuation">></span></span>press<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomButton</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>'},["code",'const CustomButton = (props: {\n    onLayout: (event: LayoutChangeEvent) => void\n  }) => (\n    <View onLayout={props.onLayout}>\n      ...\n    </View>\n  )\n\n<Tooltip\n  content="Hello World"\n  defaultVisible>\n  <CustomButton>press<CustomButton>\n</Tooltip>']]],meta:{category:"Components",type:"Navigation",title:"Tooltip",subtitle:"气泡",version:"5.2.0-rc.2",filename:"components/tooltip/index.zh-CN.md"}}}}]);