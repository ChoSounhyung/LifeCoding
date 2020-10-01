var Links = {
    setColor:function(color) {
        // var i = 0;
        // var alist = document.querySelectorAll('a');
        // while(i < alist.length) {
        //     alist[i].style.color=color;
        //     i += 1;
        // }

        // $('a')-> 모든 a태그를 jQuery로 제어하겠다는 뜻
        $('a').css('color', color); 
    }
}

var Body = {
    setColor:function(color) {
        //document.querySelector('body').style.color=color;  
        $('body').css('color', color);
    },  //객체의 프로퍼티를 구분할때는 ,를 찍어야함
    setBackgroundColor:function(color) {
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
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