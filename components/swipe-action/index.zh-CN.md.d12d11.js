(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[9931],{86030:t=>{t.exports={content:["article",["p","滑动操作组件。"],["h3","定义"],["p","结合手势操作，从屏幕一侧唤出操作。"],["h3","规则"],["ol",["li",["p","一次只可滑动一行列表"]],["li",["p","点击任意按钮之外处或往回滑动该列表可隐藏操作。"]]],["h2","API"],["h3","SwipeAction"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","closeOnAction"],["td","点击按钮后自动隐藏按钮"],["td",["code","boolean"]],["td",["code","true"]],["td",["code","5.2.0"]]],["tr",["td","closeOnTouchOutside"],["td","是否在点击其他区域时自动归位"],["td",["code","boolean"]],["td",["code","false"]],["td",["code","5.2.0"]]],["tr",["td","left"],["td","左侧按钮组"],["td",["a",{title:null,href:"/components/swipe-action-cn#swipeoutbuttonprops"},"SwipeoutButtonProps"],"[]"],["td",["code","[]"]],["td"]],["tr",["td","right"],["td","右侧按钮组"],["td",["a",{title:null,href:"/components/swipe-action-cn#swipeoutbuttonprops"},"SwipeoutButtonProps"],"[]"],["td",["code","[]"]],["td"]],["tr",["td","styles"],["td","语义化结构 style"],["td",["a",{title:null,href:"/components/swipe-action-cn#swipeactionstyle-语义化样式"},"SwipeActionStyle"]],["td","-"],["td",["code","5.2.0"]]]]],["p","SwipeAction 剩余其他属性和 ",["a",{title:null,href:"https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable/"},"react-native-gesture-handler/Swipeable"]," 一致，"],["p",["strong","例如： ",["code","onSwipeableOpen"]," 、",["code","onSwipeableClose"]],"，"],["p",["strong","其中，设置 ",["code","renderLeftActions"]," 属性时会覆盖 ",["code","left"]," ，设置 ",["code","renderRightActions"]," 属性时会覆盖 ",["code","right"]],"。"],["h3","SwipeoutButtonProps"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","backgroundColor"],["td","背景色"],["td",["code","string"]],["td","-"],["td"]],["tr",["td","color"],["td","字体颜色"],["td",["code","string"]],["td","-"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td",["code","boolean"]],["td","-"],["td"]],["tr",["td","onPress"],["td","按钮点击事件"],["td",["code","() => void | Promise<any>"]],["td","-"],["td",["code","5.2.0"],"支持异步"]],["tr",["td","style"],["td","按钮样式，当",["code","text"],"为",["code","string"],"时生效"],["td",["code","StyleProp<TextStyle>"]],["td","-"],["td"]],["tr",["td","text"],["td","按钮文案"],["td",["code","string | ReactNode"]],["td","-"],["td"]],["tr",["td","actionButtonProps"],["td","其他额外props"],["td",["a",{title:null,href:"https://docs.swmansion.com/react-native-gesture-handler/docs/components/buttons/#rectbutton"},"RectButtonProps"]],["td","-"],["td",["code","5.2.0"]]]]],["h3","SwipeActionStyle 语义化样式"],["pre",{lang:"typescript",highlighted:'<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SwipeActionStyle</span> <span class="token punctuation">{</span>\n  actionButton<span class="token punctuation">:</span> ViewStyle\n  actionText<span class="token punctuation">:</span> TextStyle\n<span class="token punctuation">}</span>'},["code","export interface SwipeActionStyle {\n  actionButton: ViewStyle\n  actionText: TextStyle\n}"]],["h3","Ref"],["p",["code","5.2.0"],"新增。 指向 Swipeable",["a",{title:null,href:"https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable/#methods"},"#Ref"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","close"],["td","让滑动条归位"],["td",["code","() => void"]]],["tr",["td","openLeft"],["td","滑动出左侧操作按钮"],["td",["code","() => void"]]],["tr",["td","openRight"],["td","滑动出右侧操作按钮"],["td",["code","() => void"]]],["tr",["td","reset"],["td","重置此 Swipeable 组件的滑动状态的方法。",["br"],"与方法 ",["code","close"]," 不同，此方法不会触发任何动画。"],["td",["code","() => void"]]]]]],meta:{category:"Components",type:"Gesture",title:"SwipeAction",subtitle:"滑动操作",version:"5.2.0-rc.1",filename:"components/swipe-action/index.zh-CN.md"}}}}]);