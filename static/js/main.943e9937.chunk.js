(this["webpackJsonpvisualize-data"]=this["webpackJsonpvisualize-data"]||[]).push([[0],{181:function(e,a,t){e.exports=t(372)},186:function(e,a,t){},187:function(e,a,t){},372:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(13),i=t.n(r),s=(t(186),t(187),t(10)),c=function(){return o.a.createElement("div",{className:"ad-dashboard-info"},o.a.createElement("p",{className:"ad-dashboard-info__text"},"- Select zero to N Datasources"),o.a.createElement("p",{className:"ad-dashboard-info__text"},"- Select zero to N Campaigns"),o.a.createElement("span",{className:"ad-dashboard-info__text -small"},'(where zero means "ALL")'),o.a.createElement("p",{className:"ad-dashboard-info__text"},'Hitting "Apply", filters the chart to show a timeseries for both Clicks and Impressions for given Datasources and Campaigns - logical AND'))};c.displayName="AdDashboardInfoComponent";var l=c,u=t(7),d=t(8),m=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"createItemFromResponse",value:function(e){return{campaign:e.campaign,clicks:+e.clicks,dataSource:e.datasource,date:e.date,impressions:+e.impressions}}}]),e}()),p=t(139),f=t.n(p),h={Date:"date",Datasource:"datasource",Campaign:"campaign",Clicks:"clicks",Impressions:"impressions"},v=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"getData",value:function(){return new Promise((function(e,a){f.a.parse("https://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv",{download:!0,transformHeader:function(e){return h[e]||""},header:!0,error:function(e){a(e)},complete:function(a){e(a.data)}})}))}}]),e}()),g=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"getData",value:function(){return v.getData().then((function(e){for(var a=[],t=[],n=[],o=0;o<e.length;o++)e[o].date&&(n.push(m.createItemFromResponse(e[o])),-1===t.indexOf(n[o].dataSource)&&t.push(n[o].dataSource),-1===a.indexOf(n[o].campaign)&&a.push(n[o].campaign));return{items:n,campaigns:a,dataSources:t}}))}},{key:"getDisplayData",value:function(e,a,t){return this.groupDataByDate(e.filter((function(e){return(!t||e.campaign===t)&&-1!==a.indexOf(e.dataSource)})))}},{key:"groupDataByDate",value:function(e){for(var a,t=[],n=0,o=0,r=(null===(a=e[0])||void 0===a?void 0:a.date)||"",i=0,s=0;s<e.length;s++){var c;if(n+=e[s].clicks,o+=e[s].impressions,i++,s===e.length-1||e[s+1].date!==r)if(t.push({date:r,clicks:Math.round(n/i),impressions:Math.round(o/i),dataSource:"",campaign:""}),e[s+1])n=0,o=0,r=(null===(c=e[s+1])||void 0===c?void 0:c.date)||"",i=0}return t}}]),e}()),b=t(14),E=function(e){if(!e.data.length)return null;return o.a.createElement("div",null,o.a.createElement(b.e,{height:300},o.a.createElement(b.d,{data:e.data,margin:{top:5,right:30,left:20,bottom:5}},o.a.createElement(b.a,{strokeDasharray:"3 3"}),o.a.createElement(b.h,{yAxisId:0,scale:"sequential",dataKey:"clicks",stroke:"#3480eb"}),o.a.createElement(b.h,{yAxisId:1,dataKey:"impressions",orientation:"right",stroke:"#012252"}),o.a.createElement(b.g,{dataKey:"date"}),o.a.createElement(b.f,null),o.a.createElement(b.b,null),o.a.createElement(b.c,{dataKey:"clicks",yAxisId:0,stroke:"#3480eb"}),o.a.createElement(b.c,{dataKey:"impressions",yAxisId:1,stroke:"#012252"}))))};E.displayName="AdDashboardChartComponent";var D=E,y=t(56),C=function(e){return o.a.createElement(y.a,{value:e.value.map((function(e){return{label:e,value:e}})),options:e.options.map((function(e){return{value:e,label:e}})),isMulti:!0,onChange:function(a){var t;e.onChange((null===(t=a)||void 0===t?void 0:t.map((function(e){return e.value})))||[])}})};C.displayName="MultiSelectComponent";var k=C,S=function(e){return o.a.createElement("div",null,o.a.createElement(y.a,{value:{value:e.value,label:e.value},options:e.options.map((function(e){return{value:e,label:e}})),isMulti:!1,onChange:function(a){e.onChange((null===a||void 0===a?void 0:a.value)||"")},isClearable:!0}))};S.displayName="SingleSelectComponent";var O=S,N=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"Filter dimension values"),o.a.createElement("p",null,"Datasource"),o.a.createElement(k,{onChange:e.onDataSourceChange,value:e.selectedDataSources,options:e.dataSourceOptions}),o.a.createElement("p",null,"Campaign"),o.a.createElement(O,{onChange:e.onCampaignChange,value:e.selectedCampaign,options:e.campaignOptions}))};N.displayName="AdDashboardFiltersComponent";var w=N,_=function(){var e=Object(n.useState)({campaigns:[],dataSources:[],items:[]}),a=Object(s.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),c=Object(s.a)(i,2),u=c[0],d=c[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),f=p[0],h=p[1],v=Object(n.useMemo)((function(){return g.getDisplayData(t.items,u,f)}),[t,f,u]);return Object(n.useEffect)((function(){g.getData().then((function(e){r(e)}))}),[]),Object(n.useEffect)((function(){d(t.dataSources)}),[t.dataSources]),o.a.createElement("div",{className:"ad-dashboard"},o.a.createElement("div",{className:"ad-dashboard__info"},o.a.createElement(l,null)),o.a.createElement("div",{className:"ad-dashboard__main"},o.a.createElement("div",{className:"ad-dashboard__filters"},o.a.createElement(w,{campaignOptions:t.campaigns,selectedCampaign:f,onCampaignChange:h,dataSourceOptions:t.dataSources,selectedDataSources:u,onDataSourceChange:d})),o.a.createElement("div",{className:"ad-dashboard__chart"},o.a.createElement(D,{data:v}))))};_.displayName="AdDashboardComponent";var j=_,A=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__container"},o.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[181,1,2]]]);
//# sourceMappingURL=main.943e9937.chunk.js.map