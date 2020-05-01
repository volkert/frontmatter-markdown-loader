(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{328:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migrate-to-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-to-3"}},[t._v("#")]),t._v(" Migrate to "),a("code",[t._v("3.*")])]),t._v(" "),a("p",[t._v("If you're using "),a("code",[t._v("vue.component")]),t._v(", "),a("code",[t._v("vue.render")]),t._v(" or "),a("code",[t._v("vue.staticRenderFns")]),t._v(" by importing. The upgrade may affect your project.")]),t._v(" "),a("p",[t._v("On the template for Vue component by compiling markdown,")]),t._v(" "),a("ul",[a("li",[t._v("Source attributes for "),a("code",[t._v("img")]),t._v(", "),a("code",[t._v("video")]),t._v(", "),a("code",[t._v("source")]),t._v(", "),a("code",[t._v("image")]),t._v(", "),a("code",[t._v("use")]),t._v(" tag")]),t._v(" "),a("li",[a("code",[t._v("![alt text](Image URL)")]),t._v(" on Markdown")])]),t._v(" "),a("p",[t._v("are transformed as Webpack env's assets like "),a("code",[t._v("require(originalPath)")]),t._v(" as default. So, check each element is working as you intended.")]),t._v(" "),a("p",[t._v("To disable this transformation, give "),a("code",[t._v("vue.transformAssetUrls: false")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      transformAssetUrls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("And "),a("code",[t._v("vue.render")]),t._v(", "),a("code",[t._v("vue.staticRenderFns")]),t._v(" becomes to return functions instead of string of functions.")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v('import fm from "something.md"\nimport OtherComponent from "OtherComponent.vue"\n\nexport default {\n'),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  data () {\n    return {\n      templateRender: null\n    }\n  },\n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  components: {\n    OtherComponent // If markdown has `<other-component>` in body, will work :)\n  },\n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v('  render (createElement) {\n    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");\n  },\n')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  created () {\n")]),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("-    this.templateRender = new Function(fm.vue.render)();\n-    this.$options.staticRenderFns = new Function(fm.vue.staticRenderFns)()\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+    this.templateRender = fm.vue.render;\n+    this.$options.staticRenderFns = fm.vue.staticRenderFns;\n")]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  }\n")]),t._v("}\n")])])]),a("h1",{attrs:{id:"migrate-to-2-3-from-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-to-2-3-from-1"}},[t._v("#")]),t._v(" Migrate to "),a("code",[t._v("2.*")]),t._v("/"),a("code",[t._v("3.*")]),t._v(" from "),a("code",[t._v("1.*")])]),t._v(" "),a("p",[t._v("From "),a("code",[t._v("2.0.0")]),t._v(", "),a("code",[t._v("mode")]),t._v(" is added to load contents selectively. That was breaking change but compresses the build size a lot.")]),t._v(" "),a("p",[t._v("See the section as your use-case in 1.x.y:")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#was-importing-md-html-only"}},[t._v("Was importing md.html only")])]),a("li",[a("a",{attrs:{href:"#was-importing-md-body"}},[t._v("Was importing md.body")])]),a("li",[a("a",{attrs:{href:"#was-importing-md-attributes-meta"}},[t._v("Was importing md.attributes._meta")])]),a("li",[a("a",{attrs:{href:"#was-using-vue-true-option"}},[t._v("Was using vue: true option")]),a("ul",[a("li",[a("a",{attrs:{href:"#to-use-md-vue-render-md-vue-staticrenderfns"}},[t._v("To use md.vue.render, md.vue.staticRenderFns")])]),a("li",[a("a",{attrs:{href:"#to-use-md-vue-component"}},[t._v("To use md.vue.component")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"was-importing-md-html-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#was-importing-md-html-only"}},[t._v("#")]),t._v(" Was importing "),a("code",[t._v("md.html")]),t._v(" only")]),t._v(" "),a("p",[t._v("As v2's default behavior, "),a("code",[t._v("html")]),t._v(" and "),a("code",[t._v("attributes")]),t._v(" will be returned. So nothing to configure in your end. The config will be really simple.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Then the loader gives "),a("code",[t._v("[Mode.HTML]")]),t._v(" for "),a("code",[t._v("options.mode")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"was-importing-md-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#was-importing-md-body"}},[t._v("#")]),t._v(" Was importing "),a("code",[t._v("md.body")])]),t._v(" "),a("p",[t._v("Have "),a("code",[t._v("Mode.BODY")]),t._v(" ("),a("code",[t._v("body")]),t._v(" as string) on "),a("code",[t._v("options.mode")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frontmatter-markdown-loader/mode"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BODY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"was-importing-md-attributes-meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#was-importing-md-attributes-meta"}},[t._v("#")]),t._v(" Was importing "),a("code",[t._v("md.attributes._meta")])]),t._v(" "),a("p",[t._v("Have "),a("code",[t._v("Mode.META")]),t._v(" ("),a("code",[t._v("meta")]),t._v(" as string) on "),a("code",[t._v("options.mode")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frontmatter-markdown-loader/mode"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("META")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"was-using-vue-true-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#was-using-vue-true-option"}},[t._v("#")]),t._v(" Was using "),a("code",[t._v("vue: true")]),t._v(" option")]),t._v(" "),a("h3",{attrs:{id:"to-use-md-vue-render-md-vue-staticrenderfns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-use-md-vue-render-md-vue-staticrenderfns"}},[t._v("#")]),t._v(" To use "),a("code",[t._v("md.vue.render")]),t._v(", "),a("code",[t._v("md.vue.staticRenderFns")])]),t._v(" "),a("p",[t._v("Have "),a("code",[t._v("Mode.VUE_RENDER_FUNCTIONS")]),t._v(" ("),a("code",[t._v("vue-render-functions")]),t._v(" as string) on "),a("code",[t._v("options.mode")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frontmatter-markdown-loader/mode"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_RENDER_FUNCTIONS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If you had "),a("code",[t._v("vue.root")]),t._v(", you can keep that to specify the class name of root element.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_RENDER_FUNCTIONS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myAwesomeMarkdown'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"to-use-md-vue-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-use-md-vue-component"}},[t._v("#")]),t._v(" To use "),a("code",[t._v("md.vue.component")])]),t._v(" "),a("p",[t._v("Have "),a("code",[t._v("Mode.VUE_COMPONENT")]),t._v(" ("),a("code",[t._v("vue-component")]),t._v(" as string) on "),a("code",[t._v("options.mode")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frontmatter-markdown-loader/mode"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If you had "),a("code",[t._v("vue.root")]),t._v(", you can keep that to specify the class name of root element.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myAwesomeMarkdown'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);