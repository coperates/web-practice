const quotes = [
    {
        quote: "명성을 쌓는 것에는 20년이란 세월이 걸리며 명성을 무너뜨리는 것에는 5분도 걸리지 않는다. 그걸 명심한다면 당신의 행동이 달라질 것이다.",
        author: "워렌버핏"
    },
    {
        quote: "간단함이 훌륭함의 열쇠다.",
        author: "이소룡"
    },
    {
       quote:"승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
       author: "크리스티 메튜슨"
    },
    {
        quote: "승자는 책임지는 태도로 살며, 패자는 약속을 남발한다.",
        author: "유태경전"
    },
    {
        quote: "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
        author: "하우얼"
    },
    {
        quote: "내 자신의 무식을 아는 것은 지식으로의 첫걸음이다.",
        author: "바이런"
    },
    {
        quote: "가시에 찔리지 않고서는 장미를 모을 수 없다.",
        author: "핀페이"
    },
    {
        quote: "고통을 거치지 않고 얻은 승리는 영광이 아니다.",
        author: "나폴레옹"
    },
    {
        quote: "기와 한 장 아껴서 대들보 썩는다.", 
        author: "한국속담"
    },
    {
        quote: "바람이 불지 않으면 노를 저어라.",
        author: "윈스턴 처칠"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;