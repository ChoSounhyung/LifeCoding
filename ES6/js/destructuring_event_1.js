var diary = [
    {
        "title" : "My birthday",
        "date" : "2020/01/03",
        "content" : [
            "오늘은 내 생일이다",
            "미역국이랑 초코 케이크를 먹었다"
        ]
    },
    {
        "title" : "ES6",
        "date" : "2020/10/04",
        "content" : [
            "ES6 강의를 듣고 있는데 너무 어렵다",
            "리액트랑 리액트 네이티브도 빨리 배우고 싶은데",
            "열심히 해야지"
        ]
    }
];

function getDiaryContent([,{content}]) {
    console.log(content);
}

getDiaryContent(diary);         //[ "ES6 강의를 듣고 있는데 너무 어렵다", "리액트랑 리액트 네이티브도 빨리 배우고 싶은데", "열심히 해야지"]