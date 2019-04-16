(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{178:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("p",[s._v("我在 PWA 這個技術剛出來不久就注意到了, 當然和 Youtube 頻道的推播有關係. 最早推出教學視頻的是大神 Maximilian Schwarzmuller, 他是 Udemy 最火紅的講師, 他的 Angular 課程多達 20 幾萬人購買, 現在持續增加中. 我先買了他的 Udemy 課程 "),e("a",{attrs:{href:"https://www.udemy.com/progressive-web-app-pwa-the-complete-guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v('"Progressive Web Apps (PWA) - The Complete Guide"'),e("OutboundLink")],1),s._v(", 不過因為課程長達 20 多小時, 我沒有耐性聽完, 不過也已經掌握到 PWA 的精髓. 然後我想找個短一點但全面的課程, 於是我找到了這門課, 6 小時的課程是我可以接受的, 這門課我聽了幾遍, 跟著實作專案, 讓我對 PWA 的掌握更為熟悉. PWA 是個 Google 推出的一項非常先進的技術, 它能把 web app 變成 native app, 也就是說 pwa 能把網站變成在裝置上執行的應用程序, 會在桌面安裝一個小圖示, 點擊圖示會播放 splash screen, 然後才會進入主頁面, 和操作 App 的方式一樣. 最大的特色是即使沒有網路連線也能執行, 和下載及安裝行動裝置 App 的方式一樣, 透過瀏覽器把網站下載到裝置上變成在本機執行, 不必透過連上網路使用 App. 真的非常強大. 這門課我認為是目前能找得到最棒的課程, 講解非常詳細, 從基礎的 API 講起, 搭配豐富的範例說明, 收穫非常多. 雖然現在的主流前端框架已經把 PWA 的功能納入, 不過我認為懂得其中的原理及編程, 也就是透過手動加入這項功能才可以算稱得上掌握這樣技術.")]),s._v(" "),s._m(4),s._v(" "),e("p",[s._v("我把這門課程的精華濃縮成兩個檔案 : manifest.json 和 sw.js, 只要在 index.html 引入這兩個檔案就行了, 你的 Web app 就會自動變成 native app 唷!")]),s._v(" "),s._m(5),s._v(" "),e("p",[s._v("這個檔案控制你的 web app 顯示, 方向, 桌面圖標, 檔案內容長這個樣子 :")]),s._v(" "),s._m(6),e("p",[s._v("如果覺得打這麼落落長的程式碼很累人, 可以使用 "),e("a",{attrs:{href:"https://app-manifest.firebaseapp.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Web App Manifest Generator 這個產生器"),e("OutboundLink")],1),s._v(" , 只需輸入重要資訊比如 display, orientation, name, 然後上傳圖檔, 就會自動產生 manifest.json 檔案, 真的省下很多時間呢.")]),s._v(" "),s._m(7),s._v(" "),e("p",[s._v("然後在 index.html 引入 :")]),s._v(" "),s._m(8),e("p",[e("a",{attrs:{href:"https://github.com/stephenlai2018/pwa-template",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://github.com/stephenlai2018/match-game/blob/master/manifest.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("manifest.json 範例"),e("OutboundLink")],1)])])},[function(){var s=this.$createElement,n=this._self._c||s;return n("h1",{attrs:{id:"漸進式網頁應用程序-pwa-學習心得"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漸進式網頁應用程序-pwa-學習心得","aria-hidden":"true"}},[this._v("#")]),this._v(" 漸進式網頁應用程序 (PWA) 學習心得")])},function(){var s=this.$createElement,n=this._self._c||s;return n("blockquote",[n("p",[this._v("Everything you need to build Progressive Web Apps from Scratch, or upgrade your existing Web Apps to PWAs.")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1600/1*hWVmsnBY6Fr6OoNvIU5pmg.png",alt:""}})])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#template","aria-hidden":"true"}},[this._v("#")]),this._v(" Template")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"manifest-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manifest-json","aria-hidden":"true"}},[this._v("#")]),this._v(" manifest.json")])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "name": "Match Game",\n  "short_name": "Match Game",\n  "description": "A Classic Matching Game",\n  "background_color": "#ffffff",\n  "display": "fullscreen",\n  "orientation": "portrait",\n  "start_url": "/",\n  "icons": [\n    {\n      "src": "assets/images/icons/icon-72x72.png",\n      "sizes": "72x72",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/images/icons/icon-96x96.png",\n      "sizes": "96x96",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/images/icons/icon-128x128.png",\n      "sizes": "128x128",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/images/icons/icon-144x144.png",\n      "sizes": "144x144",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/images/icons/icon-152x152.png",\n      "sizes": "152x152",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/images/icons/icon-192x192.png",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/images/icons/icon-384x384.png",\n      "sizes": "384x384",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/images/icons/icon-512x512.png",\n      "sizes": "512x512",\n      "type": "image/png"\n    }\n  ],\n  "splash_pages": null\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[n("img",{attrs:{src:"https://cdn.glitch.com/e2d0de36-c372-4b42-8f8f-5dea2faa4285%2Fmanifest.jpg?1552841978253",alt:""}})])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('<link rel="manifest" href="./manifest.json">\n')])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br")])])}],!1,null,null,null);n.default=t.exports}}]);