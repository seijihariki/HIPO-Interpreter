webpackJsonp([1],{"08/Q":function(e,t){},"4/hK":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i,s=n("VU/8")({name:"App"},o,!1,function(e){n("08/Q")},null,null).exports,a=n("/ocq"),c=n("bOdI"),u=n.n(c),l=n("E5Az"),m=n("8U58"),p=n.n(m),d=(n("4/hK"),n("5IAE"),n("UM8r"),i={LDA:"LDA",STA:"STA",ADD:"ADD",SUB:"SUB",MUL:"MUL",DIV:"DIV",REM:"REM",REV:"REV",INN:"INN",PRN:"PRN",NOP:"NOP",JMP:"JMP",JLE:"JLE",JDZ:"JDZ",JGT:"JGT",JEQ:"JEQ",JLT:"JLT",DPI:"DPI",STP:"STP",CEA:"LDA",CAE:"STA",Som:"ADD",Sub:"SUB",Mul:"MUL",Div:"DIV",Rem:"REM",Rev:"REV",Lei:"INN",Imp:"PRN",Nop:"NOP",Des:"JMP",DNI:"JLE",DDZ:"JDZ",DPo:"JGT",DZe:"JEQ",DNe:"JLT"},u()(i,"DPI","JGE"),u()(i,"Par","STP"),i),f={"11XX":"LDA","12XX":"STA","21XX":"ADD","22XX":"SUB","23XX":"MUL","24XX":"DIV","25XX":"REM","29XX":"REV","31XX":"INN","41XX":"PRN","50XX":"NOP","51XX":"JMP","52XX":"JLE","53XX":"JDZ","54XX":"JGT","55XX":"JEQ","56XX":"JLT","57XX":"JGE","70XX":"STP"};p.a.defineMode("hipo",function(){return{token:function(e,t){var n=[{regex:/\[.*\]/,token:"comment"},{regex:/;.*/,token:"comment"},{regex:/[a-zA-Z_]+/,token:"variable"},{regex:/(\+|\-)?[0-9]{1,4}/,token:"number"}];for(var r in d)if(e.match(r))return"keyword";for(var o in n)if(e.match(n[o].regex))return n[o].token;return e.next(),null}}});var v={name:"Interpreter",components:{codemirror:l.codemirror},data:function(){return{cmOptions:{tabSize:4,mode:"hipo",theme:"monokai",foldGutter:!0,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!0,line:!0},timeout:null,running:!1,ip:0,rp:0,ips:50,acc:0,memory:Array(100),memory_s:Array(100),cmds:{},code:"1 CEA Zero\nCAE Sum\nBack Lei Num\nImp Num\nCEA Num\nDNe End\nCEA Sum\nSom Num\nCAE Sum\nDes Back\nEnd Imp Sum\nPar 00\n30 Zero 00\n40 Sum 00\n45 Num 00",inp:"",out:"",labels:{}}},watch:{memory:{handler:function(e,t){for(var n=0;n<100;n++)this.$set(this.memory_s,n,this.formatNumber(this.memory[n]))},deep:!0},timeout:function(e,t){this.running=null!=e}},beforeMount:function(){for(var e=this,t=0;t<100;t++)this.memory[t]=0;for(t=0;t<100;t++)this.memory_s[t]=this.formatNumber(0);this.cmds={LDA:{code:1100,func:function(t){return e.acc=e.memory[t],e.ip++,!0}},STA:{code:1200,func:function(t){return e.$set(e.memory,t,e.acc),e.ip++,!0}},ADD:{code:2100,func:function(t){return e.acc+=e.memory[t],e.ip++,!0}},SUB:{code:2200,func:function(t){return e.acc-=e.memory[t],e.ip++,!0}},MUL:{code:2300,func:function(t){return e.acc*=e.memory[t],e.ip++,!0}},DIV:{code:2400,func:function(t){return e.acc=Math.floor(e.acc/e.memory[t]),e.ip++,!0}},REM:{code:2500,func:function(t){return e.acc%=e.memory[t],e.ip++,!0}},REV:{code:2900,func:function(t){return e.$set(e.memory,t,-e.acc),e.ip++,!0}},INN:{code:3100,func:function(t){var n=parseInt(e.inp.split("\n")[e.rp]);return isNaN(n)?(console.error("ERROR: INVALID INPUT"),!1):(console.log("Reading "+n+" into "+t),e.$set(e.memory,t,n),e.rp++,e.ip++,!0)}},PRN:{code:4100,func:function(t){return e.out+=e.memory[t]+"\n",e.ip++,!0}},NOP:{code:5e3,func:function(t){return e.ip++,!0}},JMP:{code:5100,func:function(t){return e.ip=t,!0}},JLE:{code:5200,func:function(t){return e.acc<=0?e.ip=t:e.ip++,!0}},JDZ:{code:5300,func:function(t){return 0!=e.acc?e.ip=t:e.ip++,!0}},JGT:{code:5400,func:function(t){return e.acc>0?e.ip=t:e.ip++,!0}},JEQ:{code:5500,func:function(t){return 0==e.acc?e.ip=t:e.ip++,!0}},JLT:{code:5600,func:function(t){return e.acc<0?e.ip=t:e.ip++,!0}},JGE:{code:5700,func:function(t){return e.acc>=0?e.ip=t:e.ip++,!0}},STP:{code:7e3,func:function(e){return console.log("Program ended!"),!1}}}},methods:{run:function(){this.timeout||(this.out="",this.loop())},loop:function(){var e=this;clearTimeout(this.timeout),this.step()?this.timeout=setTimeout(function(){e.loop()},1e3/this.ips):this.timeout=null},stop:function(){console.log("Stop"),clearTimeout(this.timeout),this.timeout=null},reset:function(){for(var e=0;e<100;e++)this.$set(this.memory,e,0);this.acc=this.rp=this.ip=0,this.out=""},step:function(){var e=this.memory[this.ip],t=e%100,n=(e-t)/100,r=f[n.toString()+"XX"];return r?this.cmds[r].func(t):(console.log(n.toString()+"XX"),console.error("ERROR: INVALID INSTRUCTION"),!1)},formatNumber:function(e){for(var t=Math.abs(e).toString();t.length<4;)t="0"+t;return t=e<0?"-"+t:"+"+t},translate:function(){console.log("Translating...");var e=this.code,t=0;this.labels={};var n=e.split("\n"),r=[];for(var o in n){(s=(s=(s=(s=n[o]).replace(/\[[^\]]*\]/g,"")).replace(/;.*/g,"")).replace(/\s+/g," ").trim()).length&&r.push(s)}for(var i in r){var s=r[i];console.log("Searching for labels in: "+s);var a=s.split(" "),c=0,u=parseInt(a[c]);if(/^[0-9]+$/.test(a[c])&&!isNaN(u)){if(u>99)return void console.error("ERROR: INVALID ADDRESS");t=u,console.log("Address is now "+u),c++}var l=a[c];if(console.log(l),/^[a-zA-Z_]\w*$/.test(l)&&!d[l]){if(console.log("Is label!"),this.labels[l])return void console.error("ERROR: ALREADY EXISTING");console.log("Registering label "+l+" at "+t),this.labels[l]=t,c++}}for(var i in t=0,r){s=r[i];console.log("Processing line: "+s);a=s.split(" "),c=0;var m=[];u=parseInt(a[c]);if(/^[0-9]+$/.test(a[c])&&!isNaN(u)){if(u>99)return void console.error("ERROR: INVALID ADDRESS");t=u,console.log("Address is now "+u),m.push("addr"),c++}l=a[c];if(/^[a-zA-Z_]\w*$/.test(l)&&!d[l]&&this.labels[l]&&(m.push("label"),c++),console.log(a[c]),/^(\+|\-)?[0-9]{1,4}$/.test(a[c])){if(p=(p=a[c]).replace("+",""),a[c+1])return void console.error("ERROR: UNKNOWN INSTRUCTION FORMAT");m.push("value"),console.log("At "+t+" is "+this.formatNumber(parseInt(p))),this.$set(this.memory,t++,parseInt(p))}else{if(!d[a[c]])return void console.error("ERROR: INVALID VALUE OR COMMAND");var p=0;if(p+=this.cmds[d[a[c]]].code,m.push("command"),console.log(p),a[c+1])if(console.log(),this.labels[a[c+1]])p+=this.labels[a[c+1]];else{var f=parseInt(a[c+1]);if(isNaN(f))return void console.error("ERROR: INVALID LABEL OR ADDRESS");if(f>99)return void console.error("ERROR: INVALID ADDRESS");p+=f,m.push("address")}if(a[c+2])return void console.error("ERROR: UNKNOWN INSTRUCTION FORMAT");console.log("At "+t+" is "+this.formatNumber(p)),this.$set(this.memory,t++,p)}console.log(m)}}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container vert"},[n("div",{staticClass:"container"},[n("div",{staticClass:"container vert third"},[n("codemirror",{ref:"editor_r",staticClass:"editor",attrs:{options:e.cmOptions},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inp,expression:"inp"}],staticClass:"textfield inp",attrs:{placeholder:"Input"},domProps:{value:e.inp},on:{input:function(t){t.target.composing||(e.inp=t.target.value)}}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.out,expression:"out"}],staticClass:"textfield out",attrs:{placeholder:"Output"},domProps:{value:e.out},on:{input:function(t){t.target.composing||(e.out=t.target.value)}}})],1),e._v(" "),n("div",{staticClass:"container vert two_thirds"},[n("div",{staticClass:"valbar"},[n("div",[e._v("IPS (Instructions per second): "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.ips,expression:"ips",modifiers:{number:!0}}],staticClass:"register",attrs:{type:"number"},domProps:{value:e.ips},on:{input:function(t){t.target.composing||(e.ips=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("div",[e._v("IP (Instruction pointer): "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.ip,expression:"ip",modifiers:{number:!0}}],staticClass:"register",attrs:{type:"number"},domProps:{value:e.ip},on:{input:function(t){t.target.composing||(e.ip=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("div",[e._v("ACC (Accumulator): "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.acc,expression:"acc",modifiers:{number:!0}}],staticClass:"register",attrs:{type:"number"},domProps:{value:e.acc},on:{input:function(t){t.target.composing||(e.acc=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("div",[e._v("RP (Reading pointer): "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.rp,expression:"rp",modifiers:{number:!0}}],staticClass:"register",attrs:{type:"number"},domProps:{value:e.rp},on:{input:function(t){t.target.composing||(e.rp=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),n("div",{staticClass:"btnbar"},[n("button",{staticClass:"control",attrs:{disabled:e.running},on:{click:e.translate}},[e._v("Translate")]),e._v(" "),n("button",{staticClass:"control",attrs:{disabled:e.running,isrunning:e.running},on:{click:e.run}},[e._v("Run")]),e._v(" "),n("button",{staticClass:"control",attrs:{disabled:!e.running},on:{click:e.stop}},[e._v("Stop")]),e._v(" "),n("button",{staticClass:"control",attrs:{disabled:e.running},on:{click:e.step}},[e._v("Step")]),e._v(" "),n("button",{staticClass:"control",attrs:{disabled:e.running},on:{click:e.reset}},[e._v("Reset")])]),e._v(" "),n("div",{staticClass:"memorytable"},[n("table",{staticClass:"tg"},[n("tr",[n("td"),e._v(" "),e._l(10,function(t){return n("td",{key:t,staticClass:"tg tg-header"},[e._v("\n              "+e._s(t-1)+"\n            ")])})],2),e._v(" "),e._l(10,function(t){return n("tr",{key:t},[n("td",{staticClass:"tg tg-header"},[e._v("\n              "+e._s(10*(t-1))+"\n            ")]),e._v(" "),e._l(10,function(r){return n("td",{key:r,staticClass:"tg tg-item",attrs:{pointed:10*(t-1)+(r-1)==e.ip}},[e._v("\n              "+e._s(e.memory_s[10*(t-1)+(r-1)])+"\n            ")])})],2)})],2)])])])])},staticRenderFns:[]};var h=n("VU/8")(v,g,!1,function(e){n("k+Cz"),n("Rj1g")},"data-v-4e70bf85",null).exports;r.a.use(a.a);var N=new a.a({routes:[{path:"/",name:"Interpreter",component:h}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:N,components:{App:s},template:"<App/>"})},Rj1g:function(e,t){},UM8r:function(e,t){},"k+Cz":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8f493bb7e044c46301a8.js.map