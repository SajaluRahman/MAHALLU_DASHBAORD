(()=>{var e={};e.id=4519,e.ids=[4519],e.modules={1039:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(84667).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},2551:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var r=s(24332),a=s(48819),i=s(67851),n=s.n(i),o=s(97540),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d={children:["",{children:["(admin)",{children:["nikah",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,45543)),"/Users/sajalurahman/Desktop/mahallu/apps/dashboard/src/app/(admin)/nikah/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,54052)),"/Users/sajalurahman/Desktop/mahallu/apps/dashboard/src/app/(admin)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19033,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,39956,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,92341,23)),"next/dist/client/components/unauthorized-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,20685)),"/Users/sajalurahman/Desktop/mahallu/apps/dashboard/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19033,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,39956,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,92341,23)),"next/dist/client/components/unauthorized-error"]}]}.children,c=["/Users/sajalurahman/Desktop/mahallu/apps/dashboard/src/app/(admin)/nikah/page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(admin)/nikah/page",pathname:"/nikah",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},5447:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(84667).A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:e=>{"use strict";e.exports=require("os")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},32513:(e,t,s)=>{"use strict";s.d(t,{n:()=>c});var r=s(60159),a=s(1647),i=s(59830),n=s(31605),o=s(31755),l=class extends n.Q{#e;#t=void 0;#s;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,o.f8)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,o.EN)(t.mutationKey)!==(0,o.EN)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(e){this.#a(),this.#i(e)}getCurrentResult(){return this.#t}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#a(),this.#i()}mutate(e,t){return this.#r=t,this.#s?.removeObserver(this),this.#s=this.#e.getMutationCache().build(this.#e,this.options),this.#s.addObserver(this),this.#s.execute(e)}#a(){let e=this.#s?.state??(0,a.$)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#i(e){i.jG.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,s=this.#t.context,r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type==="success"){try{this.#r.onSuccess?.(e.data,t,s,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(e.data,null,t,s,r)}catch(e){Promise.reject(e)}}else if(e?.type==="error"){try{this.#r.onError?.(e.error,t,s,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(void 0,e.error,t,s,r)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}},d=s(84364);function c(e,t){let s=(0,d.jE)(t),[a]=r.useState(()=>new l(s,e));r.useEffect(()=>{a.setOptions(e)},[a,e]);let n=r.useSyncExternalStore(r.useCallback(e=>a.subscribe(i.jG.batchCalls(e)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),c=r.useCallback((e,t)=>{a.mutate(e,t).catch(o.lQ)},[a]);if(n.error&&(0,o.GU)(a.options.throwOnError,[n.error]))throw n.error;return{...n,mutate:c,mutateAsync:n.mutate}}},33873:e=>{"use strict";e.exports=require("path")},34631:e=>{"use strict";e.exports=require("tls")},37558:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(84667).A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},44370:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(84667).A)("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]])},45543:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(33952).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/sajalurahman/Desktop/mahallu/apps/dashboard/src/app/(admin)/nikah/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/sajalurahman/Desktop/mahallu/apps/dashboard/src/app/(admin)/nikah/page.tsx","default")},46645:(e,t,s)=>{Promise.resolve().then(s.bind(s,45543))},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},60500:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(84667).A)("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]])},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73496:e=>{"use strict";e.exports=require("http2")},74075:e=>{"use strict";e.exports=require("zlib")},74439:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(84667).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},88501:(e,t,s)=>{Promise.resolve().then(s.bind(s,90413))},90413:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var r=s(13486),a=s(60159),i=s(84364),n=s(21482),o=s(32513),l=s(4168),d=s(74439),c=s(28963),u=s(81061),h=s(44370),p=s(72513),m=s(35795),x=s(5447),g=s(60500),b=s(37558),f=s(1039),v=s(49989),y=s.n(v),j=s(69023),N=s(26518),k=s(81604);function w(){let e=(0,i.jE)(),[t,s]=(0,a.useState)(""),[v,w]=(0,a.useState)(null),{data:M,isLoading:A}=(0,n.I)({queryKey:["nikah"],queryFn:()=>j.u.get("/nikah").then(e=>e.data)}),C=M?.data||[],q=(0,o.n)({mutationFn:e=>j.u.put(`/nikah/${e._id}`,e),onSuccess:()=>{e.invalidateQueries({queryKey:["nikah"]}),w(null),k.o.success("Marriage record updated successfully")},onError:e=>{k.o.error(e?.response?.data?.message||"Failed to update marriage record")}}),P=(0,o.n)({mutationFn:e=>j.u.delete(`/nikah/${e}`),onSuccess:()=>{e.invalidateQueries({queryKey:["nikah"]}),k.o.success("Marriage record deleted successfully")},onError:e=>{k.o.error(e?.response?.data?.message||"Failed to delete marriage record")}}),R=e=>{let t=window.open("","_blank");t&&(t.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Marriage Certificate - ${e.nikahNo}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Noto+Naskh+Arabic:wght@700&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Inter', sans-serif;
            background: #fff;
            color: #0f172a;
            padding: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 90vh;
          }
          .cert-container {
            border: 12px double #047857;
            padding: 50px;
            position: relative;
            border-radius: 20px;
            width: 100%;
            max-width: 650px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            background: #fafdfb;
          }
          .header {
            text-align: center;
            margin-bottom: 35px;
          }
          .header h1 {
            font-size: 30px;
            color: #047857;
            margin: 5px 0 0 0;
            font-weight: 800;
            letter-spacing: 1px;
          }
          .header p {
            font-size: 13px;
            color: #64748b;
            margin: 3px 0;
            font-weight: 600;
          }
          .arabic-word {
            font-family: 'Noto Naskh Arabic', serif;
            font-size: 36px;
            color: #047857;
            margin-bottom: 5px;
          }
          .body-text {
            text-align: center;
            line-height: 2.2;
            font-size: 16px;
            margin-bottom: 45px;
            color: #334155;
          }
          .body-text .highlight {
            font-weight: 800;
            color: #047857;
            border-bottom: 1.5px dashed #059669;
            padding: 0 4px;
          }
          .body-text .sub-info {
            font-size: 13px;
            color: #64748b;
            display: block;
            line-height: 1.4;
            margin-top: 2px;
            margin-bottom: 12px;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            font-size: 12px;
            font-weight: 600;
            color: #475569;
          }
          .sig-line {
            border-top: 1.5px solid #cbd5e1;
            width: 160px;
            text-align: center;
            padding-top: 8px;
            margin-top: 40px;
          }
          @media print {
            body { padding: 0; background: none; }
            .cert-container { box-shadow: none; border-color: #000; }
            .cert-container h1, .cert-container .highlight { color: #000; border-color: #000; }
          }
        </style>
      </head>
      <body>
        <div class="cert-container">
          <div class="header">
            <div class="arabic-word">م</div>
            <h1>MARRIAGE CERTIFICATE</h1>
            <p>MAHALLU MUSLIM JAMA-ATH REGISTRY</p>
            <p style="font-family: monospace; font-weight: 800; margin-top: 12px; font-size: 15px; color: #047857;">NO: ${e.nikahNo}</p>
          </div>
          
          <div class="body-text">
            This is to certify that the marriage (Nikah) between <br>
            <span class="highlight">${e.groomName}</span> (Groom)<br>
            <span class="sub-info">Son of ${e.groomFatherName}</span>
            and <br>
            <span class="highlight">${e.brideName}</span> (Bride)<br>
            <span class="sub-info">Daughter of ${e.brideFatherName}</span>
            was solemnized on <span class="highlight">${new Date(e.date).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}</span><br>
            at <span class="highlight">${e.venue||"Mahallu Auditorium"}</span><br>
            with a Mehr of <span class="highlight">₹${e.mehr}</span>.
          </div>

          <div class="footer">
            <div>
              <div class="sig-line">Solemnizing Imam</div>
            </div>
            <div>
              <div class="sig-line">Groom Signature</div>
            </div>
            <div>
              <div class="sig-line">Mahallu Registrar</div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `),t.document.close())},z=C.length,E=new Date().getFullYear(),S=C.filter(e=>new Date(e.date).getFullYear()===E).length,O=C.reduce((e,t)=>e+(t.mehr||0),0),D=C.length>0?(0,N.Yq)(C[0].date):"N/A",_=C.filter(e=>e.nikahNo.toLowerCase().includes(t.toLowerCase())||e.groomName.toLowerCase().includes(t.toLowerCase())||e.brideName.toLowerCase().includes(t.toLowerCase()));return(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"page-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"page-title",children:"Marriage (Nikah) Registry"}),(0,r.jsx)("p",{className:"page-subtitle",children:"View, edit, delete, and download Mahallu wedding certificates"})]}),(0,r.jsx)(y(),{href:"/nikah/new",children:(0,r.jsxs)("button",{id:"register-nikah-btn",className:"btn-brand flex items-center gap-2",children:[(0,r.jsx)(d.A,{size:16}),"Register Nikah"]})})]}),!A&&C.length>0&&(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[{label:"Total Marriages",value:z,icon:c.A,color:"#ec4899"},{label:"Registered This Year",value:S,icon:u.A,color:"#3b82f6"},{label:"Total Mehr Amount",value:(0,N.vv)(O),icon:h.A,color:"#059669"},{label:"Latest Solemnization",value:D,icon:p.A,color:"#f59e0b"}].map((e,t)=>(0,r.jsxs)(l.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.05*t},className:"section-card flex items-center gap-4 animate-count",children:[(0,r.jsx)("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:`${e.color}15`},children:(0,r.jsx)(e.icon,{size:18,style:{color:e.color}})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-2xl font-bold",children:e.value}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:e.label})]})]},e.label))}),(0,r.jsx)("div",{className:"flex items-center gap-4 bg-card rounded-2xl p-4 border shadow-sm",children:(0,r.jsxs)("div",{className:"relative flex-1 max-w-sm",children:[(0,r.jsx)(m.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",size:16}),(0,r.jsx)("input",{type:"text",placeholder:"Search by name or Nikah ID...",value:t,onChange:e=>s(e.target.value),className:"w-full pl-9 pr-4 py-2 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"})]})}),(0,r.jsx)("div",{className:"section-card overflow-hidden p-0",children:A?(0,r.jsx)("div",{className:"space-y-3 p-6",children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,r.jsx)("div",{className:"h-14 rounded-xl shimmer"},t))}):(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"data-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"pl-6",children:"Nikah No"}),(0,r.jsx)("th",{children:"Groom (Husband)"}),(0,r.jsx)("th",{children:"Bride (Wife)"}),(0,r.jsx)("th",{children:"Mehr"}),(0,r.jsx)("th",{children:"Venue"}),(0,r.jsx)("th",{children:"Marriage Date"}),(0,r.jsx)("th",{className:"pr-6 text-right",children:"Actions"})]})}),(0,r.jsx)("tbody",{children:0===_.length?(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{colSpan:7,className:"text-center py-12 text-muted-foreground",children:[(0,r.jsx)(c.A,{size:40,className:"mx-auto mb-3 opacity-30 text-pink-500"}),(0,r.jsx)("p",{children:"No marriage entries registered yet"})]})}):_.map((e,t)=>(0,r.jsxs)(l.P.tr,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.02*t},className:"group",children:[(0,r.jsx)("td",{className:"pl-6",children:(0,r.jsx)("code",{className:"text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-1 rounded-xl font-bold dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-400",children:e.nikahNo})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-foreground",children:e.groomName}),(0,r.jsxs)("p",{className:"text-xs text-muted-foreground",children:["S/o: ",e.groomFatherName]})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-foreground",children:e.brideName}),(0,r.jsxs)("p",{className:"text-xs text-muted-foreground",children:["D/o: ",e.brideFatherName]})]})}),(0,r.jsx)("td",{className:"text-sm font-bold text-emerald-600",children:(0,N.vv)(e.mehr||0)}),(0,r.jsx)("td",{className:"text-sm text-muted-foreground",children:e.venue||"Mahallu Auditorium"}),(0,r.jsx)("td",{className:"text-sm text-muted-foreground",children:(0,N.Yq)(e.date)}),(0,r.jsx)("td",{className:"pr-6 text-right",children:(0,r.jsxs)("div",{className:"flex items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity",children:[(0,r.jsx)("button",{onClick:()=>R(e),className:"p-2 rounded-lg hover:bg-emerald-50 text-emerald-600 transition-colors",title:"Download Certificate",children:(0,r.jsx)(x.A,{size:14})}),(0,r.jsx)("button",{onClick:()=>w(e),className:"p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors",title:"Edit",children:(0,r.jsx)(g.A,{size:14})}),(0,r.jsx)("button",{onClick:()=>{confirm("Are you sure you want to delete this Nikah record permanently?")&&P.mutate(e._id)},className:"p-2 rounded-lg hover:bg-rose-50 text-rose-600 transition-colors",title:"Delete",children:(0,r.jsx)(b.A,{size:14})})]})})]},e._id))})]})})}),!!v&&(0,r.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:(0,r.jsxs)("div",{className:"bg-background rounded-2xl shadow-lg w-full max-w-[500px] overflow-hidden",children:[(0,r.jsxs)("div",{className:"p-6 border-b flex justify-between items-center bg-muted/40",children:[(0,r.jsx)("h2",{className:"text-lg font-bold",children:"Edit Nikah Record"}),(0,r.jsx)("button",{onClick:()=>w(null),className:"p-1 rounded-lg hover:bg-slate-100",children:(0,r.jsx)(f.A,{size:16})})]}),(0,r.jsxs)("div",{className:"p-6 space-y-4 max-h-[70vh] overflow-y-auto",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Groom Name *"}),(0,r.jsx)("input",{type:"text",className:"w-full p-2.5 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",value:v.groomName||"",onChange:e=>w({...v,groomName:e.target.value})})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Groom Father *"}),(0,r.jsx)("input",{type:"text",className:"w-full p-2.5 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",value:v.groomFatherName||"",onChange:e=>w({...v,groomFatherName:e.target.value})})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Bride Name *"}),(0,r.jsx)("input",{type:"text",className:"w-full p-2.5 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",value:v.brideName||"",onChange:e=>w({...v,brideName:e.target.value})})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Bride Father *"}),(0,r.jsx)("input",{type:"text",className:"w-full p-2.5 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",value:v.brideFatherName||"",onChange:e=>w({...v,brideFatherName:e.target.value})})]})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Mehr Amount (INR) *"}),(0,r.jsx)("input",{type:"number",className:"w-full p-2.5 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",value:v.mehr||"",onChange:e=>w({...v,mehr:Number(e.target.value)})})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Marriage Date *"}),(0,r.jsx)("input",{type:"date",className:"w-full p-2.5 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",value:v.date?new Date(v.date).toISOString().split("T")[0]:"",onChange:e=>w({...v,date:e.target.value})})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Venue"}),(0,r.jsx)("input",{type:"text",className:"w-full p-2.5 border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",value:v.venue||"",onChange:e=>w({...v,venue:e.target.value})})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-end gap-2 p-6 border-t bg-muted/20",children:[(0,r.jsx)("button",{className:"px-4 py-2 text-sm border rounded-xl hover:bg-slate-50",onClick:()=>w(null),children:"Cancel"}),(0,r.jsx)("button",{className:"px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold disabled:opacity-50",onClick:()=>q.mutate(v),disabled:q.isPending,children:"Save Changes"})]})]})})]})}},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[5609,7611,9907,6201],()=>s(2551));module.exports=r})();