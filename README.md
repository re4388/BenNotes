# BenNote

## ShowCase My works

## Live Demo
To Add


## Notes while building this site..
1. pug轉移
1.1 可以利用網站幫忙
1.2 轉移後，效益很有可觀的，本來的html寫法，很快就喪失閱讀性了。


2. Vuex導入和參考Real World App進行模組化
2.1 導入相關套件要留意，類似Vux一開始的main.js就要注入
2.2 用模組分，import export多了，不過這部分弄錯也很好解。
2.3 store把actions.type和mutaitons.type拉出來管理，不同服務和基本的API service也分開管理


3. repo.vue ->改最多的地方
3.1 axios call拉到store去處理，這邊只需要透過getter語法，拿store下的fetchRepo和validUsername即可
3.2 卡比較久的地方，一開始亂改，後來仔細觀察，是render順序出問題，後來發現是因為應該要await的地方沒有下好await, 非同步處理要留意。
3.3 會非同步的地方，都要用async and await處理，不然就會資料還在拿，已經render畫面，因此畫面沒顯示的情況。
3.4 因為目前程式碼還不多，這次refactor主要只是把api call和幾個全局變數拉到store, 感覺程式碼在view層少一點而已。
3.5 預計未來view層和api call變多，view層會如果不把這些call和變數拉到store統一管理，是會變的很複雜。


## Reference resource
1. [re4388/real_world_vue_practice](https://github.com/re4388/real_world_vue_practice)
2. [re4388/vue_github_search](https://github.com/re4388/vue_github_search)
3. [PugHtml - Pug and HTML online converter in realtime](https://pughtml.com/)
