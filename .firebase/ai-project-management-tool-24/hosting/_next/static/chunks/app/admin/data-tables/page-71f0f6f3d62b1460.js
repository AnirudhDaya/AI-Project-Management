(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{237:function(e,t,a){Promise.resolve().then(a.bind(a,8820))},8820:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return page}});var r=a(2500),s=[{name:"Marketplace",tech:["apple","android","windows"],date:"12.Jan.2021",progress:75.5},{name:"Venus DB PRO",tech:["apple"],date:"21.Feb.2021",progress:35.4},{name:"Venus DS",tech:["apple","windows"],date:"13.Mar.2021",progress:25},{name:"Venus 3D Asset",tech:["apple","android","windows"],date:"24.Jan.2021",progress:100},{name:"Marketplace",tech:["apple","windows"],date:"Oct 24, 2022",progress:75.5},{name:"Marketplace",tech:["apple","android","windows"],date:"Oct 24, 2022",progress:75.5},{name:"Marketplace",tech:["apple","android","windows"],date:"12.Jan.2021",progress:75.5},{name:"Venus DB PRO",tech:["apple"],date:"21.Feb.2021",progress:35.4},{name:"Venus DS",tech:["apple","windows"],date:"13.Mar.2021",progress:25},{name:"Venus 3D Asset",tech:["apple","android","windows"],date:"24.Jan.2021",progress:100},{name:"Marketplace",tech:["apple","windows"],date:"Oct 24, 2022",progress:75.5}],l=a(8020),n=a(4053),d=a(32),c=a(6008),o=a(2115),i=a(3629),x=a(5208),data_tables_CheckTable=function(e){let{tableData:t}=e,[a,s]=n.useState([]),l=[h.accessor("name",{id:"name",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"NAME"}),cell:e=>(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(c.Z,{defaultChecked:e.getValue()[1],colorScheme:"brandScheme",me:"10px"}),(0,r.jsx)("p",{className:"ml-3 text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()[0]})]})}),h.accessor("progress",{id:"progress",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"PROGRESS"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),h.accessor("quantity",{id:"quantity",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"QUANTITY"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),h.accessor("date",{id:"date",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"DATE"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})})],[m,g]=n.useState(()=>[...t]),p=(0,i.b7)({data:m,columns:l,state:{sorting:a},onSortingChange:s,getCoreRowModel:(0,x.sC)(),getSortedRowModel:(0,x.tj)(),debugTable:!0});return(0,r.jsxs)(o.Z,{extra:"w-full h-full sm:overflow-auto px-6",children:[(0,r.jsxs)("header",{className:"relative flex items-center justify-between pt-4",children:[(0,r.jsx)("div",{className:"text-xl font-bold text-navy-700 dark:text-white",children:"Check Table"}),(0,r.jsx)(d.Z,{})]}),(0,r.jsx)("div",{className:"mt-8 overflow-x-scroll xl:overflow-x-hidden",children:(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:p.getHeaderGroups().map(e=>(0,r.jsx)("tr",{className:"!border-px !border-gray-400",children:e.headers.map(e=>{var t;return(0,r.jsx)("th",{colSpan:e.colSpan,onClick:e.column.getToggleSortingHandler(),className:"cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30",children:(0,r.jsxs)("div",{className:"items-center justify-between text-xs text-gray-200",children:[(0,i.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:"",desc:""})[e.column.getIsSorted()])&&void 0!==t?t:null]})},e.id)})},e.id))}),(0,r.jsx)("tbody",{children:p.getRowModel().rows.slice(0,5).map(e=>(0,r.jsx)("tr",{children:e.getVisibleCells().map(e=>(0,r.jsx)("td",{className:"min-w-[150px] border-white/0 py-3  pr-4",children:(0,i.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})]})};let h=(0,x.Cl)();var m=[{name:"Horizon UI PRO",quantity:2458,progress:"17.5%",date:"12 Jan 2021"},{name:"Horizon UI Free",quantity:1485,progress:"10.8%",date:"21 Feb 2021"},{name:"Weekly Update",quantity:1024,progress:"21.3%",date:"13 Mar 2021"},{name:"Venus 3D Asset",quantity:858,progress:"31.5%",date:"24 Jan 2021"}],g=a(1018),p=a(2075),b=a(3345),DevelopmentTable=function(e){let{tableData:t}=e,[a,s]=n.useState([]),l=[u.accessor("name",{id:"name",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"NAME"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),u.accessor("tech",{id:"tech",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"TECH"}),cell:e=>(0,r.jsx)("div",{className:"flex items-center gap-2",children:e.getValue().map((e,t)=>"apple"===e?(0,r.jsx)("div",{className:"text-[22px] text-gray-600 dark:text-white",children:(0,r.jsx)(p.pCI,{})},t):"android"===e?(0,r.jsx)("div",{className:"text-[21px] text-gray-600 dark:text-white",children:(0,r.jsx)(p.mQf,{})},t):"windows"===e?(0,r.jsx)("div",{className:"text-xl text-gray-600 dark:text-white",children:(0,r.jsx)(p.Doe,{})},t):null)})}),u.accessor("progress",{id:"progress",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"PROGRESS"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),u.accessor("date",{id:"date",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"DATE"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),u.accessor("progress",{id:"quantity",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"QUANTITY"}),cell:e=>(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsxs)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:[e.getValue(),"%"]}),(0,r.jsx)(b.Z,{width:"w-[68px]",value:e.getValue()})]})})],[c,h]=n.useState(()=>[...t]),m=(0,i.b7)({data:c,columns:l,state:{sorting:a},onSortingChange:s,getCoreRowModel:(0,x.sC)(),getSortedRowModel:(0,x.tj)(),debugTable:!0});return(0,r.jsxs)(o.Z,{extra:"w-full h-full sm:overflow-auto px-6",children:[(0,r.jsxs)("header",{className:"relative flex items-center justify-between pt-4",children:[(0,r.jsx)("div",{className:"text-xl font-bold text-navy-700 dark:text-white",children:"Check Table"}),(0,r.jsx)(d.Z,{})]}),(0,r.jsx)("div",{className:"mt-8 overflow-x-scroll xl:overflow-x-hidden",children:(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:m.getHeaderGroups().map(e=>(0,r.jsx)("tr",{className:"!border-px !border-gray-400",children:e.headers.map(e=>{var t;return(0,r.jsx)("th",{colSpan:e.colSpan,onClick:e.column.getToggleSortingHandler(),className:"cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30",children:(0,r.jsxs)("div",{className:"items-center justify-between text-xs text-gray-200",children:[(0,i.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:"",desc:""})[e.column.getIsSorted()])&&void 0!==t?t:null]})},e.id)})},e.id))}),(0,r.jsx)("tbody",{children:m.getRowModel().rows.slice(0,5).map(e=>(0,r.jsx)("tr",{children:e.getVisibleCells().map(e=>(0,r.jsx)("td",{className:"min-w-[150px] border-white/0 py-3  pr-4",children:(0,i.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})]})};let u=(0,x.Cl)();var data_tables_ColumnsTable=function(e){let{tableData:t}=e,[a,s]=n.useState([]),l=[k.accessor("name",{id:"name",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"NAME"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),k.accessor("progress",{id:"progress",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"PROGRESS"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),k.accessor("quantity",{id:"quantity",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"QUANTITY"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),k.accessor("date",{id:"date",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"DATE"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})})],[c,h]=n.useState(()=>[...t]),m=(0,i.b7)({data:c,columns:l,state:{sorting:a},onSortingChange:s,getCoreRowModel:(0,x.sC)(),getSortedRowModel:(0,x.tj)(),debugTable:!0});return(0,r.jsxs)(o.Z,{extra:"w-full pb-10 p-4 h-full",children:[(0,r.jsxs)("header",{className:"relative flex items-center justify-between",children:[(0,r.jsx)("div",{className:"text-xl font-bold text-navy-700 dark:text-white",children:"4-Columns Table"}),(0,r.jsx)(d.Z,{})]}),(0,r.jsx)("div",{className:"mt-8 overflow-x-scroll xl:overflow-x-hidden",children:(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:m.getHeaderGroups().map(e=>(0,r.jsx)("tr",{className:"!border-px !border-gray-400",children:e.headers.map(e=>{var t;return(0,r.jsx)("th",{colSpan:e.colSpan,onClick:e.column.getToggleSortingHandler(),className:"cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30",children:(0,r.jsxs)("div",{className:"items-center justify-between text-xs text-gray-200",children:[(0,i.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:"",desc:""})[e.column.getIsSorted()])&&void 0!==t?t:null]})},e.id)})},e.id))}),(0,r.jsx)("tbody",{children:m.getRowModel().rows.slice(0,5).map(e=>(0,r.jsx)("tr",{children:e.getVisibleCells().map(e=>(0,r.jsx)("td",{className:"min-w-[150px] border-white/0 py-3  pr-4",children:(0,i.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})]})};let k=(0,x.Cl)();var w=a(4793);let f=(0,x.Cl)();function ComplexTable(e){let{tableData:t}=e,[a,s]=n.useState([]),l=[f.accessor("name",{id:"name",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"NAME"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),f.accessor("status",{id:"status",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"STATUS"}),cell:e=>(0,r.jsxs)("div",{className:"flex items-center",children:["Approved"===e.getValue()?(0,r.jsx)(w.ZSR,{className:"me-1 text-green-500 dark:text-green-300"}):"Disable"===e.getValue()?(0,r.jsx)(w.B4e,{className:"me-1 text-red-500 dark:text-red-300"}):"Error"===e.getValue()?(0,r.jsx)(w.Fbu,{className:"me-1 text-amber-500 dark:text-amber-300"}):null,(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})]})}),f.accessor("date",{id:"date",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"DATE"}),cell:e=>(0,r.jsx)("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),f.accessor("progress",{id:"progress",header:()=>(0,r.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-white",children:"PROGRESS"}),cell:e=>(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(b.Z,{width:"w-[108px]",value:e.getValue()})})})],[c,h]=n.useState(()=>[...t]),m=(0,i.b7)({data:c,columns:l,state:{sorting:a},onSortingChange:s,getCoreRowModel:(0,x.sC)(),getSortedRowModel:(0,x.tj)(),debugTable:!0});return(0,r.jsxs)(o.Z,{extra:"w-full h-full px-6 pb-6 sm:overflow-x-auto",children:[(0,r.jsxs)("div",{className:"relative flex items-center justify-between pt-4",children:[(0,r.jsx)("div",{className:"text-xl font-bold text-navy-700 dark:text-white",children:"Complex Table"}),(0,r.jsx)(d.Z,{})]}),(0,r.jsx)("div",{className:"mt-8 overflow-x-scroll xl:overflow-x-hidden",children:(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:m.getHeaderGroups().map(e=>(0,r.jsx)("tr",{className:"!border-px !border-gray-400",children:e.headers.map(e=>{var t;return(0,r.jsx)("th",{colSpan:e.colSpan,onClick:e.column.getToggleSortingHandler(),className:"cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30",children:(0,r.jsxs)("div",{className:"items-center justify-between text-xs text-gray-200",children:[(0,i.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:"",desc:""})[e.column.getIsSorted()])&&void 0!==t?t:null]})},e.id)})},e.id))}),(0,r.jsx)("tbody",{children:m.getRowModel().rows.slice(0,5).map(e=>(0,r.jsx)("tr",{children:e.getVisibleCells().map(e=>(0,r.jsx)("td",{className:"min-w-[150px] border-white/0 py-3  pr-4",children:(0,i.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})]})}var page=()=>(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2",children:[(0,r.jsx)(DevelopmentTable,{tableData:s}),(0,r.jsx)(data_tables_CheckTable,{tableData:l.Z})]}),(0,r.jsxs)("div",{className:"mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2",children:[(0,r.jsx)(data_tables_ColumnsTable,{tableData:m}),(0,r.jsx)(ComplexTable,{tableData:g.Z})]})]})},32:function(e,t,a){"use strict";var r=a(2500),s=a(4053),l=a(4978),n=a(5797),d=a(6234),c=a(5264),o=a(9944);t.Z=function(e){let{transparent:t,vertical:a}=e,[i,x]=s.useState(!1);return(0,r.jsx)(l.Z,{button:(0,r.jsx)("button",{onClick:()=>x(!i),className:"flex items-center text-xl hover:cursor-pointer ".concat(t?"bg-none text-white hover:bg-none active:bg-none":a?"bg-none text-navy-700 dark:text-white":"bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"," linear justify-center rounded-lg font-bold transition duration-200"),children:a?(0,r.jsx)("p",{className:"text-[24px] hover:cursor-pointer",children:(0,r.jsx)(d.FQA,{})}):(0,r.jsx)(d.evw,{className:"h-6 w-6"})}),animation:"origin-top-right transition-all duration-300 ease-in-out",classNames:"".concat(t?"top-8":"top-11"," right-0 w-max"),children:(0,r.jsxs)("div",{className:"z-50 w-max rounded-xl bg-white px-4 py-3 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none",children:[(0,r.jsxs)("p",{className:"hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium",children:[(0,r.jsx)("span",{children:(0,r.jsx)(n.nf1,{})}),"Panel 1"]}),(0,r.jsxs)("p",{className:"hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium",children:[(0,r.jsx)("span",{children:(0,r.jsx)(n.kr8,{})}),"Panel 2"]}),(0,r.jsxs)("p",{className:"hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium",children:[(0,r.jsx)("span",{children:(0,r.jsx)(o.VBp,{})}),"Panel 3"]}),(0,r.jsxs)("p",{className:"hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium",children:[(0,r.jsx)("span",{children:(0,r.jsx)(c.nbt,{})}),"Panel 4"]})]})})}},2115:function(e,t,a){"use strict";var r=a(2500);t.Z=function(e){let{variant:t,extra:a,children:s,...l}=e;return(0,r.jsx)("div",{className:"!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl ".concat(e.default?"shadow-shadow-500 dark:shadow-none":"shadow-shadow-100 dark:shadow-none","  dark:!bg-navy-800 dark:text-white  ").concat(a),...l,children:s})}},6008:function(e,t,a){"use strict";var r=a(2500);t.Z=e=>{let{extra:t,color:a,id:s,...l}=e;return(0,r.jsx)("input",{id:s,type:"checkbox",className:"defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center \n      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]\n      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 ".concat("red"===a?"checked:border-none checked:bg-red-500 dark:checked:bg-red-400":"blue"===a?"checked:border-none checked:bg-blue-500 dark:checked:bg-blue-400":"green"===a?"checked:border-none checked:bg-green-500 dark:checked:bg-green-400":"yellow"===a?"checked:border-none checked:bg-yellow-500 dark:checked:bg-yellow-400":"orange"===a?"checked:border-none checked:bg-orange-500 dark:checked:bg-orange-400":"teal"===a?"checked:border-none checked:bg-teal-500 dark:checked:bg-teal-400":"navy"===a?"checked:border-none checked:bg-navy-500 dark:checked:bg-navy-400":"lime"===a?"checked:border-none checked:bg-lime-500 dark:checked:bg-lime-400":"cyan"===a?"checked:border-none checked:bg-cyan-500 dark:checked:bg-cyan-400":"pink"===a?"checked:border-none checked:bg-pink-500 dark:checked:bg-pink-400":"purple"===a?"checked:border-none checked:bg-purple-500 dark:checked:bg-purple-400":"amber"===a?"checked:border-none checked:bg-amber-500 dark:checked:bg-amber-400":"indigo"===a?"checked:border-none checked:bg-indigo-500 dark:checked:bg-indigo-400":"gray"===a?"checked:border-none checked:bg-gray-500 dark:checked:bg-gray-400":"checked:bg-brand-500 dark:checked:bg-brand-400"," ").concat(t),name:"weekly",...l})}},4978:function(e,t,a){"use strict";var r=a(2500),s=a(4053);t.Z=e=>{let{button:t,children:a,classNames:l,animation:n}=e,d=s.useRef(null),[c,o]=s.useState(!1);return s.useEffect(()=>{function handleClickOutside(e){d.current&&!d.current.contains(e.target)&&o(!1)}return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}},[d,o]),(0,r.jsxs)("div",{ref:d,className:"relative flex",children:[(0,r.jsx)("div",{className:"flex",onMouseDown:()=>o(!c),children:t}),(0,r.jsx)("div",{className:"".concat(l," absolute z-10 ").concat(n||"origin-top-right transition-all duration-300 ease-in-out"," ").concat(c?"scale-100":"scale-0"),children:a})]})}},3345:function(e,t,a){"use strict";var r=a(2500);t.Z=e=>{let{value:t,color:a,width:s}=e;return(0,r.jsx)("div",{className:"h-2 ".concat(s||"w-full"," rounded-full bg-gray-200 dark:bg-navy-700"),children:(0,r.jsx)("div",{className:"flex h-full items-center justify-center rounded-full ".concat("red"===a?"bg-red-500 dark:bg-red-400":"blue"===a?"bg-blue-500 dark:bg-blue-400":"green"===a?"bg-green-500 dark:bg-green-400":"yellow"===a?"bg-yellow-500 dark:bg-yellow-400":"orange"===a?"bg-orange-500 dark:bg-orange-400":"teal"===a?"bg-teal-500 dark:bg-teal-400":"navy"===a?"bg-navy-500 dark:bg-navy-400":"lime"===a?"bg-lime-500 dark:bg-lime-400":"cyan"===a?"bg-cyan-500 dark:bg-cyan-400":"pink"===a?"bg-pink-500 dark:bg-pink-400":"purple"===a?"bg-purple-500 dark:bg-purple-400":"amber"===a?"bg-amber-500 dark:bg-amber-400":"indigo"===a?"bg-indigo-500 dark:bg-indigo-400":"gray"===a?"bg-gray-500 dark:bg-gray-400":"bg-brand-500 dark:bg-brand-400"),style:{width:"".concat(t,"%")}})})}},8020:function(e,t){"use strict";t.Z=[{name:["Horizon UI PRO",!0],quantity:2458,progress:"17.5%",date:"12 Jan 2021",info:!1},{name:["Horizon UI Free",!0],quantity:1485,progress:"10.8%",date:"21 Feb 2021",info:!0},{name:["Weekly Update",!0],quantity:1024,progress:"21.3%",date:"13 Mar 2021",info:!0},{name:["Venus 3D Asset",!0],quantity:858,progress:"31.5%",date:"24 Jan 2021",info:!0},{name:["Marketplace",!0],quantity:258,progress:"12.2%",date:"24 Oct 2022",info:!1},{name:["Horizon UI Free",!0],quantity:1485,progress:"10.8%",date:"21 Feb 2021",info:!0},{name:["Weekly Update",!0],quantity:1024,progress:"21.3%",date:"13 Mar 2021",info:!0},{name:["Venus 3D Asset",!0],quantity:858,progress:"31.5%",date:"24 Jan 2021",info:!0},{name:["Horizon UI Free",!0],quantity:1485,progress:"10.8%",date:"21 Feb 2021",info:!0},{name:["Weekly Update",!0],quantity:1024,progress:"21.3%",date:"13 Mar 2021",info:!0},{name:["Venus 3D Asset",!0],quantity:858,progress:"31.5%",date:"24 Jan 2021",info:!0}]},1018:function(e,t){"use strict";t.Z=[{name:"Horizon UI PRO",progress:75.5,status:"Approved",date:"12 Jan 2021"},{name:"Horizon UI Free",progress:25.5,status:"Disable",date:"21 Feb 2021"},{name:"Weekly Update",progress:90,status:"Error",date:"13 Mar 2021"},{name:"Marketplace",progress:50.5,status:"Approved",date:"24 Oct 2022"}]}},function(e){e.O(0,[691,833,232,254,99,877,629,44,884,744],function(){return e(e.s=237)}),_N_E=e.O()}]);