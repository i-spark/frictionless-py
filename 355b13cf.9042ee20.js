(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var b=2;b<o;b++)a[b]=n[b];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(131)),a={title:"Contributing"},l={unversionedId:"development/contributing",id:"development/contributing",isDocsHomePage:!1,title:"Contributing",description:"General Guideline",source:"@site/../docs/development/contributing.md",slug:"/development/contributing",permalink:"/docs/development/contributing",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/development/contributing.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1611670308,sidebar:"development",previous:{title:"Development",permalink:"/docs/development/development"},next:{title:"Changelog",permalink:"/docs/development/changelog"}},c=[{value:"General Guideline",id:"general-guideline",children:[]},{value:"Docs Contribution",id:"docs-contribution",children:[{value:"Building Process",id:"building-process",children:[]}]},{value:"Code Contribution",id:"code-contribution",children:[{value:"Development Environment",id:"development-environment",children:[]}]},{value:"Release Process",id:"release-process",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general-guideline"},"General Guideline"),Object(o.b)("p",null,"We use Github as a code and issues hosting platform. To report a bug or propose a new feature, please open an issue. For pull requests, we would ask you initially create an issue and then create a pull requests linked to this issue."),Object(o.b)("h2",{id:"docs-contribution"},"Docs Contribution"),Object(o.b)("p",null,"We use a flexible documentation system as the docs are generated from:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"markdown documents in the ",Object(o.b)("inlineCode",{parentName:"li"},"docs")," directory interpreted by the Jupyter Notebook runner"),Object(o.b)("li",{parentName:"ul"},"python scripts in the ",Object(o.b)("inlineCode",{parentName:"li"},"docs")," directory generating references or copying documents from the root directory such as ",Object(o.b)("inlineCode",{parentName:"li"},"README.md"),", ",Object(o.b)("inlineCode",{parentName:"li"},"CHANGELOG.md")," etc")),Object(o.b)("p",null,"To contribute to the documentation, please check to the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"docs/name.md|py")," file to understand the source of a document. If it's a markdown just edit it in-line if it's a script edit it or find a corresponding document in the root directory."),Object(o.b)("h3",{id:"building-process"},"Building Process"),Object(o.b)("p",null,"There are two main ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," directories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"source directory: ",Object(o.b)("inlineCode",{parentName:"li"},"docs")),Object(o.b)("li",{parentName:"ul"},"target directory: ",Object(o.b)("inlineCode",{parentName:"li"},"docs/build"))),Object(o.b)("p",null,"To build only one document run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"python scripts/docs.py name\n")),Object(o.b)("p",null,"To build the whole documentation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"python scripts/docs.py # or make docs\n")),Object(o.b)("h2",{id:"code-contribution"},"Code Contribution"),Object(o.b)("p",null,"Frictionless is a Python3.6+ framework, and it uses some basically standard Python tools for the development process:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"testing: ",Object(o.b)("inlineCode",{parentName:"li"},"pytest")),Object(o.b)("li",{parentName:"ul"},"linting: ",Object(o.b)("inlineCode",{parentName:"li"},"pylama")),Object(o.b)("li",{parentName:"ul"},"formatting: ",Object(o.b)("inlineCode",{parentName:"li"},"black")),Object(o.b)("li",{parentName:"ul"},"type checking: ",Object(o.b)("inlineCode",{parentName:"li"},"mypy")," (under construction)")),Object(o.b)("p",null,"It's a commonplace but, of course, you need ",Object(o.b)("inlineCode",{parentName:"p"},"git")," to work on the project, also ",Object(o.b)("inlineCode",{parentName:"p"},"make")," is recommended."),Object(o.b)("h3",{id:"development-environment"},"Development Environment"),Object(o.b)("p",null,"After cloning the repository, it's recommended to create a virtual environment and install the dependencies:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"it will install a ",Object(o.b)("inlineCode",{parentName:"p"},"git commit")," hook running the tests")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'python3.8 -m venv .python\nsource .python/bin/activate\npip install wheel\nmake install\nalias "frictionless=python -m frictionless"\n')),Object(o.b)("p",null,"Then you can run various make commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"make docs")," - build the docs"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"make format")," - format source code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"make install")," - install the dependencies (we did before)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"make lint")," - lint the project"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"make release")," - release a new version"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"make test")," - run the tests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"make test-ci")," - run the tests (including integration)")),Object(o.b)("p",null,"Of course, it's possible and recommended to run underlying commands like ",Object(o.b)("inlineCode",{parentName:"p"},"pytest")," or ",Object(o.b)("inlineCode",{parentName:"p"},"pylama")," to speed up the development process."),Object(o.b)("h2",{id:"release-process"},"Release Process"),Object(o.b)("p",null,"To release a new version:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"check that you have push access to the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch"),Object(o.b)("li",{parentName:"ul"},"update ",Object(o.b)("inlineCode",{parentName:"li"},"frictionless/assets/VERSION")," following the SemVer standard"),Object(o.b)("li",{parentName:"ul"},"add changes to ",Object(o.b)("inlineCode",{parentName:"li"},"CHANGELOG.md")," if it's not a patch release (major or micro)"),Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"make release")," which create a release commit and tag and push it to Github"),Object(o.b)("li",{parentName:"ul"},"an actual release will happen on the Travis CI platform after running the tests")))}s.isMDXComponent=!0}}]);