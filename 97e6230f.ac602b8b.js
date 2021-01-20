(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),l=(n(0),n(131)),r={title:"Getting Started"},o={unversionedId:"guides/getting-started",id:"guides/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Let's get started with Frictionless! We will learn how to install and use the framework. The simple example below will showcase the framework's basic functionality.",source:"@site/../docs/guides/getting-started.md",slug:"/guides/getting-started",permalink:"/docs/guides/getting-started",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/../docs/guides/getting-started.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1611144640,sidebar:"guides",previous:{title:"Guides Overview",permalink:"/docs/guides/guides-overview"},next:{title:"Introduction Guide",permalink:"/docs/guides/introduction-guide"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Let's get started with Frictionless! We will learn how to install and use the framework. The simple example below will showcase the framework's basic functionality."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Versioning follows the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://semver.org/"}),"SemVer Standard"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"! pip install frictionless\n# pip install frictionless[sql] - to install a core plugin\n")),Object(l.b)("p",null,"By default, the framework comes with the support of CSV, Excel, and JSON formats. Please use the command above to add support for SQL, Pandas, Html, and others. Usually, you don't need to think about it in advance - frictionless will show a useful error on a missing plugin with installation instruction."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"The framework can be used:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"as a Python library"),Object(l.b)("li",{parentName:"ul"},"as a command-line interface"),Object(l.b)("li",{parentName:"ul"},"as a restful API server")),Object(l.b)("p",null,"For example, all the examples below do the same thing:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import extract\n\nrows = extract('data/table.csv')\n# CLI: $ frictionless extract data/table.csv\n# API: [POST] /extract {\"source': 'data/table.csv\"}\n")),Object(l.b)("p",null,"All these interfaces are close as much as possible regarding naming and the way you interact with them. Usually, it's straightforward to translate e.g., Python code to a command-line call. Frictionless provides code completion for Python and command-line, which should help to get useful hints in real-time."),Object(l.b)("p",null,"Arguments follow this naming rule:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"for Python interfaces, they are lowercased, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"missing_values")),Object(l.b)("li",{parentName:"ul"},"within dictionaries or JSON objects they are camel-cased, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"missingValues")),Object(l.b)("li",{parentName:"ul"},"in a command line they use dashes, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"--missing-values"))),Object(l.b)("p",null,"To get documentation for a command-line interface just use the ",Object(l.b)("inlineCode",{parentName:"p"},"--help")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$ frictionless --help\n$ frictionless describe --help\n$ frictionless extract --help\n$ frictionless validate --help\n$ frictionless transform --help\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"All the examples use the data folder from this repository")),Object(l.b)("p",null,"We will take a very dirty data file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"! cat data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"id,name,,name\n1,english\n1,english\n\n2,german,1,2,3\n")),Object(l.b)("p",null,"First of all, let's infer the metadata. We can save and edit it to provide useful information about the table:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This output is in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://yaml.org/"}),"YAML"),", it is a default Frictionless output format.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"! frictionless describe data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"---\nmetadata: data/invalid.csv\n---\n\ncompression: 'no'\ncompressionPath: ''\ncontrol:\n  newline: ''\ndialect: {}\nencoding: utf-8\nformat: csv\nhashing: md5\nname: invalid\npath: data/invalid.csv\nprofile: tabular-data-resource\nquery: {}\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: name\n      type: string\n    - name: field3\n      type: integer\n    - name: name2\n      type: integer\nscheme: file\nstats:\n  bytes: 50\n  fields: 4\n  hash: 8c73c3d9d59088dcb2508e0b348bf8a8\n  rows: 4\n")),Object(l.b)("p",null,"Secondly, we can extract a normalized data. It conforms to the inferred schema from above e.g., the dimension is fixed, and bad cells are omitted:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"! frictionless extract data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"---\ndata: data/invalid.csv\n---\n\n====  =======  ======  =====\nid    name     field3  name2\n====  =======  ======  =====\n   1  english  None    None\n   1  english  None    None\nNone  None     None    None\n   2  german        1      2\n====  =======  ======  =====\n")),Object(l.b)("p",null,"Last but not least, let's get a validation report. This report will help us to fix all these errors as comprehensive information is provided for every tabular problem:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"! frictionless validate data/invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'---\ninvalid: data/invalid.csv\n---\n\n====  =====  ================  ================================================================================================\nrow   field  code              message\n====  =====  ================  ================================================================================================\nNone      3  blank-header      Header in field at position "3" is blank\nNone      4  duplicate-header  Header "name" in field at position "4" is duplicated to header in another field: at position "2"\n   2      3  missing-cell      Row at position "2" has a missing cell in field "field3" at position "3"\n   2      4  missing-cell      Row at position "2" has a missing cell in field "name2" at position "4"\n   3      3  missing-cell      Row at position "3" has a missing cell in field "field3" at position "3"\n   3      4  missing-cell      Row at position "3" has a missing cell in field "name2" at position "4"\n   4  None   blank-row         Row at position "4" is completely blank\n   5      5  extra-cell        Row at position "5" has an extra value in field at position "5"\n====  =====  ================  ================================================================================================\n')),Object(l.b)("p",null,"Now having all this information:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"we can clean up the table to ensure the data quality"),Object(l.b)("li",{parentName:"ul"},"we can use the metadata to describe and share the dataset"),Object(l.b)("li",{parentName:"ul"},"we can include the validation into our workflow to guarantee the validity"),Object(l.b)("li",{parentName:"ul"},"and much more: don't hesitate and read the following documentation!")))}d.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||l;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);