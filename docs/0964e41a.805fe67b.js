(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,s(s({ref:t},l),{},{components:r})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(134)),i={id:"customgens",title:"Custom Generators",slug:"custom-generators.html"},s={unversionedId:"proptest/customgens",id:"proptest/customgens",isDocsHomePage:!1,title:"Custom Generators",description:"To write your own generator for a type T, you just create an instance of Arb or Exhaustive.",source:"@site/docs/proptest/customgens.md",slug:"/proptest/custom-generators.html",permalink:"/docs/proptest/custom-generators.html",editUrl:"https://github.com/kotest/kotest/docs/proptest/customgens.md",version:"current",sidebar:"proptest",previous:{title:"Configuration",permalink:"/docs/proptest/property-test-config.html"},next:{title:"Global Configuration",permalink:"/docs/proptest/property-test-global-config.html"}},c=[{value:"Arbitrary",id:"arbitrary",children:[]},{value:"Exhaustive",id:"exhaustive",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To write your own generator for a type T, you just create an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"Arb<T>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Exhaustive<T>"),"."),Object(o.b)("h3",{id:"arbitrary"},"Arbitrary"),Object(o.b)("p",null,"When writing a custom arbitrary we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"arbitrary")," builder which accepts a lambda that must return the type we are generating for.\nThe parameter to this lambda is a ",Object(o.b)("inlineCode",{parentName:"p"},"RandomSource")," parameter which contains the seed and the ",Object(o.b)("inlineCode",{parentName:"p"},"Random")," instance. We should typically\nuse the provided ",Object(o.b)("inlineCode",{parentName:"p"},"RandomSource")," if we need access to a ",Object(o.b)("inlineCode",{parentName:"p"},"kotlin.Random")," instance, as this instance will have been seeded by the framework to allow for repeatable tests."),Object(o.b)("p",null,"For example, here is a custom arb that generates a random int between 3 and 6 using the ",Object(o.b)("inlineCode",{parentName:"p"},"arbitrary")," builder."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val sillyArb = arbitrary { rs: RandomSource ->\n   rs.random.nextInt(3..6)\n}\n\n")),Object(o.b)("p",null,"We can also use this random if we are composing other arbs when building ours."),Object(o.b)("p",null,"For example, here is an ",Object(o.b)("inlineCode",{parentName:"p"},"Arbitrary")," that supports a custom class called ",Object(o.b)("inlineCode",{parentName:"p"},"Person"),", delegating to a String arbitrary and an Int arbitrary."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"data class Person(val name: String, val age: Int)\n\nval personArb = arbitrary { rs ->\n   val name = Arb.string(10..12).next(rs)\n   val age = Arb.int(21, 150).next(rs)\n   Person(name, age)\n}\n")),Object(o.b)("p",null,"Although in the real world this type of arb would use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/proptest/generator-operations.html#bind"}),"bind"),", it demonstrates the principle of composing."),Object(o.b)("h3",{id:"exhaustive"},"Exhaustive"),Object(o.b)("p",null,"When writing a custom exhaustive we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"exhaustive()")," extension function on a List. Nothing more to it than that really!"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val singleDigitPrimes = listOf(2,3,5,7).exhaustive()\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'class PropertyExample: StringSpec({\n    "testing single digit primes" {\n        checkAll(singleDigitPrimes) { prime ->\n           isPrime(prime) shouldBe true\n           isPrime(prime * prime) shouldBe false\n        }\n    }\n})\n')))}p.isMDXComponent=!0}}]);