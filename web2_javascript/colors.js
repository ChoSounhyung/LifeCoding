var Links = {
    setColor:function(color) {
        var i = 0;
        var alist = document.querySelectorAll('a');
        while(i < alist.length) {
            alist[i].style.color=color;
            i += 1;
        }
    }
}

var Body = {
    setColor:function(color) {
        document.querySelector('body').style.color=color;  
    },  //객체의 프로퍼티를 구분할때는 ,를 찍어야함
    setBackgroundColor:function(color) {
        document.querySelector('body').style.backgroundColor=color;
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('yellow');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}