//Template 처리

//json으로 응답을 받고, javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후 dom에 추가
//데이터 + HTML문자열의 결합이 필요하기 때문

const data = [
    {
        name : 'coffee-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false
    }
];

const template = `<div>welcome ${data[0].name} !!`      

const template = `<div>welcome ${data[0].name} !!</div>     
    <h2>주문가능항목</h2><div>${data[0].items}</div>`;
//"<div>welcome coffee-bean !!"
//<h2>주문가능항목</h2><div>americano,milk,green-tea</div>`

console.log(template);
