webpackJsonp([35783957827783],{106:function(e,t){"use strict";function n(e,t,i){if("string"!=typeof t){if(f){var d=s(t);d&&d!==f&&n(e,d,i)}var m=o(t);u&&(m=m.concat(u(t)));for(var p=0;p<m.length;++p){var h=m[p];if(!(r[h]||a[h]||i&&i[h])){var y=c(t,h);try{l(e,h,y)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,o=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,f=s&&s(Object);e.exports=n},128:function(e,t,n){"use strict";function r(e,t){if(!e){if(a)throw new Error(l);var n="function"==typeof t?t():t,r=n?l+": "+n:l;throw new Error(r)}}var a=!0,l="Invariant failed";e.exports=r},129:function(e,t,n){"use strict";function r(e,t){if(!a){if(e)return;var n="Warning: "+t;"undefined"!=typeof console&&console.warn(n);try{throw Error(n)}catch(e){}}}var a=!0;e.exports=r},73:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=r(u),s=function(e){function t(){a(this,t);var n=l(this,e.call(this));return n.state={renderLinks:!1},n}return o(t,e),t.prototype.componentDidMount=function(){this.setState({renderLinks:!0})},t.prototype.render=function(){var e=this;return c.default.createElement("section",{className:"section section--"+this.props.frontmatter.title.toLowerCase()},c.default.createElement("div",{className:"section__content",dangerouslySetInnerHTML:{__html:this.props.html}}),this.props.frontmatter.links.map(function(t,n){return e.state.renderLinks?c.default.createElement("a",{key:n,rel:"noopener noreferrer",target:"_blank",href:t.href},t.text):null}))},t}(c.default.Component);t.default=s,e.exports=t.default},74:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a);t.default=function(e){var t=e.frontmatter,n=e.html;return l.default.createElement("section",{className:"section section--"+t.title.toLowerCase()},l.default.createElement("h2",null,t.title),l.default.createElement("div",{className:"section__content",dangerouslySetInnerHTML:{__html:n}}))},e.exports=t.default},75:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),o=60;o*Math.PI;t.default=function(e){var t=e.score,n=e.name;return l.default.createElement("li",{className:"skill-item"},n,l.default.createElement("div",{className:"skill-item__indicator"},l.default.createElement("div",{className:"skill-item__level",style:{width:t+"0%"}})))},e.exports=t.default},76:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),o=n(75),u=r(o);t.default=function(){return l.default.createElement("section",{className:"section section--skills"},l.default.createElement("h2",null,"Skills"),l.default.createElement("div",{className:"section__content"},l.default.createElement("div",null,l.default.createElement("h3",null,"Code"),l.default.createElement("ul",null,l.default.createElement(u.default,{score:"9",name:"HTML/CSS"}),l.default.createElement(u.default,{score:"8",name:"Javascript"}),l.default.createElement(u.default,{score:"7",name:"Twig"}),l.default.createElement(u.default,{score:"7",name:"PHP"}),l.default.createElement(u.default,{score:"5",name:"Bash"}),l.default.createElement(u.default,{score:"3",name:"Python"}))),l.default.createElement("div",null,l.default.createElement("h3",null,"Design"),l.default.createElement("ul",null,l.default.createElement(u.default,{score:"9",name:"Adobe CC"}),l.default.createElement(u.default,{score:"8",name:"Sketch.app"})))))},e.exports=t.default},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(2),o=r(l),u=n(105),c=r(u),s=n(76),f=r(s),i=n(73),d=r(i),m=n(74),p=r(m),h=n(52),y=r(h),E=function(e){var t=e.data;return o.default.createElement("article",null,o.default.createElement("header",null,o.default.createElement("h1",null,o.default.createElement(c.default,{to:"/"},"Alex Jenter")),o.default.createElement("img",{className:"portrait",src:y.default,alt:"portrait of alex jenter"}),t.person.edges.map(function(e){return o.default.createElement(d.default,a({key:e.node.id},e.node))})),o.default.createElement("main",null,t.cv_sections.edges.map(function(e){return o.default.createElement(p.default,a({key:e.node.id},e.node))}),o.default.createElement(f.default,null)))};t.query="** extracted graphql fragment **";t.default=E},52:function(e,t,n){e.exports=n.p+"static/foto-av.ea963a79.jpg"}});
//# sourceMappingURL=component---src-pages-index-js-42475c5cc632fb653304.js.map