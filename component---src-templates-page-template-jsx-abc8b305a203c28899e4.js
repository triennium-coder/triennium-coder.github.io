(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(166),o=a.n(i),c=a(181),l=a(171),s=a(187),p=a(191),m=function(e){var t=e.postNode,a=e.slug,n=t.frontmatter;return n.id||(n.id=a),r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"padding-top padding-bottom",dangerouslySetInnerHTML:{__html:t.html}}))},u=a(178),g=a(163),d=a.n(g);a.d(t,"pageQuery",function(){return f});t.default=function(e){var t=e.data,a=e.pageContext,n=a.slug,i=a.tagList,g=a.categoryList,f=a.latestPostEdges,h=t.markdownRemark,E=h.frontmatter.title,y=r.a.createElement(m,{postNode:h,slug:n}),v=r.a.createElement(p.a,{tagList:i,categoryList:g,latestPostEdges:f,links:d.a.sidebarLinks});return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("title",null,E+" - "+d.a.siteTitle)),r.a.createElement(u.a,{postPath:n,postNode:h,postSEO:!0}),r.a.createElement(l.a,{title:E}),r.a.createElement(s.a,{content:y,sidebar:v}))};var f="4179841679"},169:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},178:function(e,t,a){"use strict";a(179);var n=a(9),r=a.n(n),i=a(0),o=a.n(i),c=a(166),l=a.n(c),s=a(169),p=a.n(s),m=a(163),u=a.n(m),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,c=r.postPath,s=r.postSEO,m="";if(s){var g=i.frontmatter;e=g.title,t=g.description?g.description:i.excerpt,a=g.keywords,g.cover&&(m=g.cover.childImageSharp.fixed.src),n=p()(u.a.siteUrl,u.a.pathPrefix,c)}else e=u.a.siteTitle,t=u.a.siteDescription,m=u.a.siteLogo;m=p()(u.a.siteUrl,u.a.pathPrefix,m);var d=p()(u.a.siteUrl,u.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return s&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:m}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:m},description:t}),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:m}),a&&o.a.createElement("meta",{name:"keywords",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:s?n:d}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:m}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:m}))},t}(i.Component);t.a=g},179:function(e,t,a){"use strict";a(180)("fixed",function(e){return function(){return e(this,"tt","","")}})},180:function(e,t,a){var n=a(12),r=a(19),i=a(20),o=/"/g,c=function(e,t,a,n){var r=String(i(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-abc8b305a203c28899e4.js.map