// export const RESULT_DATA = [
//     {
//         correct: { id: 0, text: '錯了餒', img: '/bad_face.png' },
//         wrong: { id: 1, text: '錯了餒', img: '/bad_face.png' },
//     }
// ];


export const QA = [
    {
        id: 1,
        title: '第一題',
        content: '請排出下列四張照片的先後順序！',
        options: ['A. 1234', 'B. 2134', 'C. 1243', 'D. 2143'],
        imgs: [
            '/pics/qa01/qa01_2.JPG',
            '/pics/qa01/qa01_1.JPG',
            '/pics/qa01/qa01_3.JPG',
            '/pics/qa01/qa01_4.JPG',
        ],
        orders: [1,2,3,4],
        ans: 2,
    },
    {
        id: 2,
        title: '第二題',
        content: '這顆蛋糕的壽星是慶祝幾歲誕辰？',
        options: ['A. 35', 'B. 36', 'C. 37', 'D. 38'],
        imgs: ['/pics/qa02/qa02_1.JPG'],
        orders: [1],
        ans: 4,
    },
    {
        id: 3,
        title: '第三題',
        content: '這隻貓貓叫啥名？',
        options: ['A. 謝志強', 'B. 小美', 'C. 謝明玉', 'D. 小醜'],
        imgs: ['/pics/qa03/qa03_1.JPG'],
        orders: [1],
        ans: 1,
    },
    {
        id: 4,
        title: '第四題',
        content: '哪一張是用蘋果菜的富士拍的？',
        options: ['A. 1', 'B. 2', 'C. 都是', 'D. 都不是'],
        imgs: ['/pics/qa04/qa04_1.JPG', '/pics/qa04/qa04_2.JPG'],
        orders: [1,2],
        ans: 2,
    },
    {
        id: 5,
        title: '第五題',
        content: '排出以下各種學士服照先後順序！',
        options: ['A. 2134', 'B. 3214', 'C. 2431', 'D. 3124'],
        imgs: [
            '/pics/qa05/qa05_1.JPG',
            '/pics/qa05/qa05_2.JPG',
            '/pics/qa05/qa05_3.JPG',
            '/pics/qa05/qa05_4.JPG',
        ],
        orders: [1,2,3,4],
        ans: 4,
    },
    {
        id: 6,
        title: '第六題',
        content: '在哪裡遇到這隻貓貓？',
        options: ['A. 大金門', 'B. 馬祖南竿', 'C. 小金門', 'D. 馬祖北竿'],
        imgs: ['/pics/qa06/qa06_1.JPG'],
        orders: [1],
        ans: 3,
    },
    {
        id: 7,
        title: '第七題',
        content: '碗裡面有幾個陶作不是蘋果菜的？',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
        imgs: ['/pics/qa07/qa07_1.JPG'],
        orders: [1],
        ans: 2,
    },
    {
        id: 8,
        title: '第八題',
        content: '以下出遊照請由北到南排出！',
        options: ['A. 153246', 'B. 513246', 'C. 153426', 'D. 513426'],
        imgs: [
            '/pics/qa08/qa08_1.JPG',
            '/pics/qa08/qa08_2.JPG',
            '/pics/qa08/qa08_3.JPG',
            '/pics/qa08/qa08_5.JPG',
            '/pics/qa08/qa08_4.JPG',
            '/pics/qa08/qa08_6.JPG',
        ],
        orders: [1,2,3,4,5,6],
        ans: 1,
    },
    {
        id: 9,
        title: '第九題',
        content: '哪張照片跟其他張拍攝所在縣市不同？',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        imgs: [
            '/pics/qa09/qa09_1.JPG',
            '/pics/qa09/qa09_2.JPG',
            '/pics/qa09/qa09_3.JPG',
            '/pics/qa09/qa09_4.JPG',
        ],
        orders: [1,2,3,4],
        ans: 3,
    },
    {
        id: 10,
        title: '第十題',
        content: '小火龍後來成為迪士尼哪位公主？',
        imgs: ['/pics/qa10/qa10_1.png'],
        orders: [1],
        princess: 'ARIEL',
        ans: 1,
    },
];


export const SCORE_PATH = [
    { id: 0, path: 'g5yb6yE8'},
    { id: 1, path: 'JFVyThfc'},
    { id: 2, path: 'WnTBs64q'},
    { id: 3, path: 'qKQY5tUu'},
    { id: 4, path: 'hEF2jGp7'},
    { id: 5, path: 'VXCZvn7P'},
    { id: 6, path: 'JwW4tNkh'},
    { id: 7, path: 'GPqrabdf'},
    { id: 8, path: 'ZTbEYwxN'},
    { id: 9, path: 'Z64uV892'},
    { id: 10, path: 'Nmpjtbr5'},
];


export const POSTCARD_DATA = [
    { 
        id: 1, 
        content: '😡😡😡😡😡 只對一題是怎樣！！！！是年紀到ㄌ所以失憶ㄅ呵呵',
        hashtags: ['#太爛ㄌ', '#翻船翻船'],
        timestamp: '21 Jan 2021'
    },
    { 
        id: 2, 
        content: '欸只答對兩題會不會太扯....就跟去金門接二連三發生的荒謬事一樣扯哈哈哈哈哈但還是有狠多美好回憶🥹祝菜大姐半半百森快🥳🥳🥳',
        hashtags: ['#金門', '#陳景蘭洋樓'],
        timestamp: '4 Jan. 2022'
    },
    { 
        id: 3, 
        content: '看到這照片就覺得好好笑，採草莓採到變嗎斗XD就用這張被拿來下臉書廣告的照片祝菜大姐半半百森快🥳🥳🥳然後請繼續加油答對題目🤗',
        hashtags: ['#草屯', '#青年春農場'],
        timestamp: '13 Mar. 2021'
    },
    { 
        id: 4, 
        content: '耶～～我最愛ㄉ馬祖😍那次旅行實在是太讚！還好妳有找偶一起報🥹好想一直那樣放肆ㄉ玩耍哈哈哈哈好勒祝菜大姐半半百森快🥳🥳🥳',
        hashtags: ['#馬祖', '#美美ㄉ芹壁村'],
        timestamp: '18 Sep. 2021'
    },
    { 
        id: 5, 
        content: '厚...才答對一半會不會太遜！！！被妳巴頭的照片已經數不清🤗大概有N百張了ㄅ：） 但我還是人很好ㄉ祝菜大姐半半百森快🥳🥳🥳',
        hashtags: ['#武嶺', '#友情小船＿＿＿＿'],
        timestamp: '24 Oct. 2020'
    },
    { 
        id: 6, 
        content: '笑死我也要巴頭巴回來！但我巴妳的照片數量跟被妳巴大概是小巫見大巫🥲祝菜大姐半半百森快啦🥳🥳🥳然後請向全數答對邁進🤗🤗',
        hashtags: ['#馬祖', '#最讚中秋節'],
        timestamp: '18 Sep. 2021'
    },
    { 
        id: 7, 
        content: '去武嶺就是一趟很瘋的半夜殺上山行程，每次提這種計畫都不會被妳否決XD雖然妳也覺得很瘋哈哈哈哈祝瘋子玩伴半半百森快🥳🥳🥳',
        hashtags: ['#武嶺', '#SE拍不出星星'],
        timestamp: '24 Oct. 2020'
    },
    { 
        id: 8, 
        content: '又是一趟很讚ㄉ九十路行程，雖然踩到釘子很荒唐，而且騎機車超累ㄉ🤗之後再一起報國外團玩爆啦！！！祝菜大姐半半百森快🥳🥳🥳',
        hashtags: ['#蘭嶼', '#小心惡靈'],
        timestamp: '24 Oct. 2020'
    },
    { 
        id: 9, 
        content: '唉唷答對九題唷～很不錯餒XD送一張鐘樓怪人(只有妳是)的照片🤓好想再吃和記油條🤤私房菜也豪好ㄘ！祝菜大姐半半百森快拉🥳🥳🥳',
        hashtags: ['#金門', '#元旦爬山'],
        timestamp: '1 Jan. 2022'
    },
];