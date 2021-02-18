(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{149:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return p}));var r=t(3),n=t(7),c=(t(0),t(157)),o={title:"Package Guide"},i={unversionedId:"guides/framework/package-guide",id:"guides/framework/package-guide",isDocsHomePage:!1,title:"Package Guide",description:"The Data Package is a core Frictionless Data concept meaning a set of resources with additional metadata provided. You can read Data Package Spec for more information.",source:"@site/../docs/guides/framework/package-guide.md",slug:"/guides/framework/package-guide",permalink:"/docs/guides/framework/package-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/framework/package-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1613639971,sidebar:"guides",previous:{title:"Transform Steps",permalink:"/docs/guides/transform-steps"},next:{title:"Resource Guide",permalink:"/docs/guides/framework/resource-guide"}},s=[{value:"Creating Package",id:"creating-package",children:[]},{value:"Describing Package",id:"describing-package",children:[]},{value:"Resoure Management",id:"resoure-management",children:[]},{value:"Saving Descriptor",id:"saving-descriptor",children:[]},{value:"Package Options",id:"package-options",children:[{value:"Basepath",id:"basepath",children:[]},{value:"Detector",id:"detector",children:[]},{value:"Onerror",id:"onerror",children:[]},{value:"Trusted",id:"trusted",children:[]},{value:"Hashing",id:"hashing",children:[]}]},{value:"Import/Export",id:"importexport",children:[{value:"BigQuery",id:"bigquery",children:[]},{value:"Ckan",id:"ckan",children:[]},{value:"Sql",id:"sql",children:[]},{value:"Zip",id:"zip",children:[]}]}],l={toc:s};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Data Package is a core Frictionless Data concept meaning a set of resources with additional metadata provided. You can read ",Object(c.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/data-package/"},"Data Package Spec")," for more information."),Object(c.b)("h2",{id:"creating-package"},"Creating Package"),Object(c.b)("p",null,"Let's create a data package:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Package, Resource\n\npackage = Package('data/table.csv') # from a resource path\npackage = Package('data/tables/*') # from a resources glob\npackage = Package(['data/tables/chunk1.csv', 'data/tables/chunk2.csv]') # from a list\npackage = Package('data/package/datapackage.json') # from a descriptor path\npackage = Package({'resources': {'path': 'data/table.csv'}}) # from a descriptor\npackage = Package(resources=[Resource(path='data/table.csv')]) # from arguments\n")),Object(c.b)("p",null,"As you can see it's possible to create a package providing different kinds of sources which will be detector to have some type automatically (e.g. whether it's a glob or a path). It's possible to make this step more explicit:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Package, Resource\n\npackage = Package(resources=[Resource(path='data/table.csv')]) # from resources\npackage = Package(descriptor='data/package/datapackage.json') # from a descriptor\n")),Object(c.b)("h2",{id:"describing-package"},"Describing Package"),Object(c.b)("p",null,"The specs support a great deal of package metadata which is possible to have with Frictionless Framework too:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Package, Resource\n\npackage = Package(\n    name='package',\n    title='My Package',\n    descriptor='My Package for the Guide',\n    resources=[Resource(path='data/table.csv')],\n    # it's possible to provide all the official properties like homepage, version, etc\n)\n")),Object(c.b)("p",null,"If you have created a package, for example, from a descriptor you can access this properties:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Package\n\npackage = Package('some/datapackage.json')\npackage.name\npackage.title\npackage.description\n# and others\n")),Object(c.b)("p",null,"And edit them:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Package\n\npackage = Package('some/datapackage.json')\npackage.name = 'new-name'\npackage.title = 'New Title'\npackage.description = 'New Description'\n# and others\n")),Object(c.b)("h2",{id:"resoure-management"},"Resoure Management"),Object(c.b)("p",null,"The core purpose of having a package is to provide an ability to have a set of resources. The Package class provides useful methods to manage resources:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Package, Resource\n\npackage = Package('data/package/datapackage.json')\nprint(package.resources)\nprint(package.resource_names)\npackage.add_resource(Resource(name='new', data=[['key1', 'key2'], ['val1', 'val2']]))\nresource = package.get_resource('new')\nprint(package.has_resource('new'))\npackage.remove_resource('new')\n")),Object(c.b)("h2",{id:"saving-descriptor"},"Saving Descriptor"),Object(c.b)("p",null,"As any of the Metadata classes the Package class can be saved as JSON or YAML:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Package\npackage = Package('data/tables/*')\npackage.to_json('package.json') # Save as JSON\npackage.to_yaml('package.yaml') # Save as YAML\n")),Object(c.b)("h2",{id:"package-options"},"Package Options"),Object(c.b)("p",null,"The Package consturctor accept a few additional options to tweak how it and the underlaying resoures will work:"),Object(c.b)("h3",{id:"basepath"},"Basepath"),Object(c.b)("p",null,"Will make all the paths treated as relative to this path."),Object(c.b)("h3",{id:"detector"},"Detector"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/guides/framework/detector-guide"},"Detector")," object to tweak metadata detection."),Object(c.b)("h3",{id:"onerror"},"Onerror"),Object(c.b)("p",null,"There are 3 possible values for reacting on tabular errors:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ignore (default)"),Object(c.b)("li",{parentName:"ul"},"warn"),Object(c.b)("li",{parentName:"ul"},"raise")),Object(c.b)("h3",{id:"trusted"},"Trusted"),Object(c.b)("p",null,"By default an error will be reaised on ",Object(c.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/data-resource/#url-or-path"},"unsafe paths"),". Setting ",Object(c.b)("inlineCode",{parentName:"p"},"trusted")," to ",Object(c.b)("inlineCode",{parentName:"p"},"True")," will disable this behaviour."),Object(c.b)("h3",{id:"hashing"},"Hashing"),Object(c.b)("p",null,"Will be passed to underlaying resources as a default hasing algorithm."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/guides/framework/detector-guide"},"Detector")," object to tweak metadata detection."),Object(c.b)("h2",{id:"importexport"},"Import/Export"),Object(c.b)("p",null,"It's possible to import and export package from/to:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"bigquery"),Object(c.b)("li",{parentName:"ul"},"ckan"),Object(c.b)("li",{parentName:"ul"},"sql"),Object(c.b)("li",{parentName:"ul"},"zip")),Object(c.b)("h3",{id:"bigquery"},"BigQuery"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This functionality is in the draft state.")),Object(c.b)("h3",{id:"ckan"},"Ckan"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This functionality is in the draft state.")),Object(c.b)("h3",{id:"sql"},"Sql"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This functionality is in the draft state.")),Object(c.b)("h3",{id:"zip"},"Zip"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This functionality is in the draft state.")))}p.isMDXComponent=!0},157:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return g}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var a=n.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,g=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return t?n.a.createElement(g,i(i({ref:a},l),{},{components:t})):n.a.createElement(g,i({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);