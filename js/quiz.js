window.onload = function(){
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })

    let btn = document.querySelector('.submit1');
    // let a = document.querySelector('#a').checked;
    let a = document.querySelector('#a');
    // a1.addEventListener('click',function(){
    //     console.log(a1.checked);
    // })
    let b = document.querySelector('#b');
    let c = document.querySelector('#c');
    let d = document.querySelector('#d');
    let radio1 = document.querySelector('#radio1');
    let radio2 = document.querySelector('#radio2');
    radio1.addEventListener('click',function(){
        if(!radio1.checked){
            radio1.checked = true;
        }
    })
    radio2.addEventListener('click',function(){
        if(!radio2.checked){
            radio2.checked = true;
        }
    })
    btn.addEventListener('click',function(){
    if(a.checked && c.checked && d.checked && radio2.checked && !b.checked){//回答正确
        document.querySelector('.title2').style.cssText = "opacity:1;"
        window.sessionStorage.setItem('learning7',3);
        setTimeout(() => {
            document.querySelector('.title2').style.cssText = "opacity:0;"
            window.location.href = 'skillTree.html'
        }, 5000);
       }else{//回答错误
        document.querySelector('.title1').style.cssText = "opacity:1;"
        setTimeout(() => {
            document.querySelector('.title1').style.cssText = "opacity:0;"
        }, 1000);
       }
    })
}