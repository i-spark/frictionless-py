(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return l})),r.d(e,"toc",(function(){return c})),r.d(e,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(131)),o={title:"Multipart Tutorial",sidebar_label:"Multipart"},l={unversionedId:"tutorials/multipart-tutorial",id:"tutorials/multipart-tutorial",isDocsHomePage:!1,title:"Multipart Tutorial",description:"You can read and write files split into chunks with Frictionless.",source:"@site/../docs/tutorials/multipart-tutorial.md",slug:"/tutorials/multipart-tutorial",permalink:"/docs/tutorials/multipart-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/multipart-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1611670308,sidebar_label:"Multipart",sidebar:"tutorials",previous:{title:"Local Tutorial",permalink:"/docs/tutorials/local-tutorial"},next:{title:"Remote Tutorial",permalink:"/docs/tutorials/remote-tutorial"}},c=[{value:"Reading Multipart Data",id:"reading-multipart-data",children:[]},{value:"Writing Multipart Data",id:"writing-multipart-data",children:[]},{value:"Configuring Local Data",id:"configuring-local-data",children:[]}],u={toc:c};function p(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can read and write files split into chunks with Frictionless."),Object(i.b)("h2",{id:"reading-multipart-data"},"Reading Multipart Data"),Object(i.b)("p",null,"You can read using ",Object(i.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(path=['data/chunk1.csv', 'data/chunk2.csv'])\nprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(i.b)("h2",{id:"writing-multipart-data"},"Writing Multipart Data"),Object(i.b)("p",null,"The actual for writing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(path='data/table.json')\nresource.write('tmp/table{number}.json', scheme=\"multipart\", control={\"chunkSize\": 1000000})\n")),Object(i.b)("h2",{id:"configuring-local-data"},"Configuring Local Data"),Object(i.b)("p",null,"There is a control to configure how Frictionless read files using this scheme. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\nfrom frictionless.plugins.multipart import MultipartControl\n\ncontrol = MultipartControl(chunk_size=1000000)\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table{number}.json', scheme=\"multipart\", control=control)\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/schemes-reference/#multipart"}),"Multipart Control"))))}p.isMDXComponent=!0},131:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=a.a.createContext({}),p=function(t){var e=a.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(m,l(l({ref:e},u),{},{components:r})):a.a.createElement(m,l({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);