# BenNote

## ShowCase My works

## Live Demo

To Add

## Lib used in this site

- vuex
- vuex
- axios
- bootstrap-vue
- pug

## Notes while building this site..

1. pug 轉移
   1.1 可以利用網站幫忙
   1.2 轉移後，效益很有可觀的，本來的 html 寫法，很快就喪失閱讀性了。

2) Vuex 導入和參考 Real World App 進行模組化
   2.1 導入相關套件要留意，類似 Vux 一開始的 main.js 就要注入
   2.2 用模組分，import export 多了，不過這部分弄錯也很好解。
   2.3 store 把 actions.type 和 mutaitons.type 拉出來管理，不同服務和基本的 API service 也分開管理

3. repo.vue ->改最多的地方
   3.1 axios call 拉到 store 去處理，這邊只需要透過 getter 語法，拿 store 下的 fetchRepo 和 validUsername 即可
   3.2 卡比較久的地方，一開始亂改，後來仔細觀察，是 render 順序出問題，後來發現是因為應該要 await 的地方沒有下好 await, 非同步處理要留意。
   3.3 會非同步的地方，都要用 async and await 處理，不然就會資料還在拿，已經 render 畫面，因此畫面沒顯示的情況。
   3.4 因為目前程式碼還不多，這次 refactor 主要只是把 api call 和幾個全局變數拉到 store, 感覺程式碼在 view 層少一點而已。
   3.5 預計未來 view 層和 api call 變多，view 層會如果不把這些 call 和變數拉到 store 統一管理，是會變的很複雜。

## Reference resource

1. [re4388/real_world_vue_practice](https://github.com/re4388/real_world_vue_practice)
2. [re4388/vue_github_search](https://github.com/re4388/vue_github_search)
3. [PugHtml - Pug and HTML online converter in realtime](https://pughtml.com/)
