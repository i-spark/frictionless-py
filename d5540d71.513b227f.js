(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(131)),o={title:"Introduction"},s={unversionedId:"introduction/introduction",id:"introduction/introduction",isDocsHomePage:!1,title:"Introduction",description:"Build",source:"@site/../docs/introduction/introduction.md",slug:"/introduction/introduction",permalink:"/docs/introduction/introduction",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/../docs/introduction/introduction.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1611144640,sidebar:"introduction",next:{title:"What's next?",permalink:"/docs/introduction/whats-next"}},c=[{value:"Purpose",id:"purpose",children:[]},{value:"Features",id:"features",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/frictionlessdata/frictionless-py/actions"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/workflow/status/frictionlessdata/frictionless-py/general/master",alt:"Build"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://codecov.io/gh/frictionlessdata/frictionless-py"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/codecov/c/github/frictionlessdata/frictionless-py/master",alt:"Coverage"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.python.org/pypi/frictionless"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/frictionless.svg",alt:"Registry"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/frictionlessdata/frictionless-py"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/github-master-brightgreen",alt:"Codebase"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.com/channels/695635777199145130/695635777199145133"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/chat-discord-brightgreen",alt:"Support"})))),Object(i.b)("p",null,"Frictionless is a framework to describe, extract, validate, and transform tabular data (DEVT Framework). It supports a great deal of data schemes and formats, as well as provides popular platforms integrations. The framework is powered by the lightweight yet comprehensive ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://specs.frictionlessdata.io/"}),"Frictionless Data Specifications"),"."),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Describe your data"),": You can infer, edit and save metadata of your data tables. It's a first step for ensuring data quality and usability. Frictionless metadata includes general information about your data like textual description, as well as, field types and other tabular data details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Extract your data"),": You can read your data using a unified tabular interface. Data quality and consistency are guaranteed by a schema. Frictionless supports various file protocols like HTTP, FTP, and S3 and data formats like CSV, XLS, JSON, SQL, and others."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Validate your data"),": You can validate data tables, resources, and datasets. Frictionless generates a unified validation report, as well as supports a lot of options to customize the validation process."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Transform your data"),": You can clean, reshape, and transfer your data tables and datasets. Frictionless provides a pipeline capability and a lower-level interface to work with the data.")),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Powerful Python framework"),Object(i.b)("li",{parentName:"ul"},"Convenient command-line interface"),Object(i.b)("li",{parentName:"ul"},"Low memory consumption for data of any size"),Object(i.b)("li",{parentName:"ul"},"Reasonable performance on big data"),Object(i.b)("li",{parentName:"ul"},"Support for compressed files"),Object(i.b)("li",{parentName:"ul"},"Custom checks and formats"),Object(i.b)("li",{parentName:"ul"},"Fully pluggable architecture"),Object(i.b)("li",{parentName:"ul"},"The included API server"),Object(i.b)("li",{parentName:"ul"},"More than 1000+ tests")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'$ frictionless validate data/invalid.csv\n[invalid] data/invalid.csv\n\n  row    field  code              message\n-----  -------  ----------------  --------------------------------------------\n             3  blank-header      Header in field at position "3" is blank\n             4  duplicate-header  Header "name" in field "4" is duplicated\n    2        3  missing-cell      Row "2" has a missing cell in field "field3"\n    2        4  missing-cell      Row "2" has a missing cell in field "name2"\n    3        3  missing-cell      Row "3" has a missing cell in field "field3"\n    3        4  missing-cell      Row "3" has a missing cell in field "name2"\n    4           blank-row         Row "4" is completely blank\n    5        5  extra-cell        Row "5" has an extra value in field  "5"\n')))}d.isMDXComponent=!0},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);