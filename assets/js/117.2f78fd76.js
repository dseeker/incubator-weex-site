(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{480:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),n("p",[e._v("Using "),n("a",{attrs:{href:"http://dotwe.org/vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotWe"),n("OutboundLink")],1),e._v(" is a good choice, but if you want to develop locally on your own machine, you will need to set up your develop environment.")]),n("p",[e._v("You will need Node.js and the "),n("a",{attrs:{href:"https://github.com/weexteam/weex-toolkit",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weex CLI"),n("OutboundLink")],1),e._v(".")]),n("p",[e._v("Install Node.js using "),n("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),n("OutboundLink")],1),e._v(" (Simple bash script to manage multiple active Node.js versions). Run the following commands in a terminal after installing nvm:")]),e._m(1),e._m(2),e._m(3),n("p",[e._v("Run the following commands in a terminal:")]),e._m(4),n("p",[e._v("You can use 'weex update {component}@x.x.x' to update weex-devtool, weex-previewer, weex-builder and weexpack to a specific version.")]),e._m(5),e._m(6),n("p",[e._v("Then you can use the Weex command to verify if the installation is successful:")]),e._m(7),e._m(8),n("p",[e._v('Use the command line tool to generate a Weex project called "awesome-project". Run the following command in a terminal:')]),e._m(9),n("p",[e._v("Then enter the awesome-project folder, you will see a standard project skeleton has been generated.")]),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),e._m(16),e._m(17),n("p",[e._v("For more technical details, please continue to read the next section. And don't forget to write and preview your codes at "),n("a",{attrs:{href:"http://dotwe.org/vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotWe"),n("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"setup-develop-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-develop-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup Develop Environment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" 6.10.0\n$ nvm use 6.10.0\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("And "),t("code",[this._v("npm")]),this._v(" comes with Node.js, with which you can install the Weex command line tools.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("**NOTE: ** After upgrading the "),t("code",[this._v("weex-toolkit")]),this._v(" to v1.0.8, the "),t("code",[this._v("npm-shrinkwrap.json")]),this._v(" npm 5 specification has been added to lock the package dependencies, it is needed to upgrade your npm version to 5 above by command: "),t("code",[this._v("npm install npm@latest -g")]),this._v(" if your version is lower than this, please check your npm version before using it.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" -g weex-toolkit\n$ weex -v\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("weex update weex-devtool@latest // Here latest means to install the latest version\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("**NOTE: ** If you receive an error like "),t("code",[this._v("permission error")]),this._v(", check out where permission problems occur, please delete the corresponding file and reinstall or run the "),t("code",[this._v("chmod -R 777 [path]")]),this._v(" command to authorize.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1NzyNmY_I8KJjy1XaXXbsxpXa-631-270.png",alt:"success-setup-weex-toolkit"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"generate-a-new-weex-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-new-weex-project","aria-hidden":"true"}},[this._v("#")]),this._v(" Generate a new Weex project")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ weex create awesome-project\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("weex-toolkit")]),e._v(" will prompt you whether to automatically run "),n("code",[e._v("npm install")]),e._v(", if not running, manually "),n("code",[e._v("cd")]),e._v(" into the folder and run "),n("code",[e._v("npm install")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In the "),t("code",[this._v("awesome-project")]),this._v(" folder, install dependencies with the following command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" start\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It will open the preview server automaticly, if you just want to see the web site, you can visite "),t("code",[this._v("/index.html")]),this._v(", like "),t("code",[this._v("localhost:8081/index.html")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("strong",[this._v("NOTE")]),this._v(" When the port number is occupied, the port number may change, please pay attention to the console output.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"folder-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Folder Structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("| —— configs\n  | —— config.js                  global config of webpack\n  | —— helper.js                  helper functions\n  | —— logo.png\n  | —— plugin.js                  script for compile plugins\n  | —— utils.js                   tool functions\n  | —— vue-loader.conf.js         loader config of weex\n  | —— webpack.common.conf.js     webpack configuration for common environment\n  | —— webpack.dev.conf.js        webpack configuration for develop environment\n  | —— webpack.prod.conf.js       webpack configuration for production environment\n  | —— webpack.test.conf.js       webpack configuration for test environment\n| —— platforms\n  | —— platforms.json             platform meta data\n| —— plugins\n  | —— plugins.json               plugin data\n| —— src\n  | —— entry.js                   the entry file of whole bundle\n  | —— index.vue                  vue file source\n| —— test\n  | —— unit\n    | —— specs                    test scripts\n    | —— index.js                 source code and config test environment\n    | —— karma.conf.js            configuration for karma\n| —— web                          static source\n| —— .babelrc                     configuration for babel-loader\n| —— android.config.json          configuration for packing android project\n| —— ios.config.json              configuration for packing ios project\n| —— npm-shrinkwrap.json          npm dependence lock file\n| —— package.json\n| —— README.md\n| —— webpack.config.js            entry file of the webpack command\n\n")])])])}],!1,null,null,null);t.default=a.exports}}]);