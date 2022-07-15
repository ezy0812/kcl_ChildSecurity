window.onload = function(){
    window.sessionStorage.setItem('learning11',2);
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })

    let btn = document.querySelector('.submit1');

    let radio1 = document.querySelector('#radio1');
    let radio2 = document.querySelector('#radio2');
    let radio3 = document.querySelector('#radio3');
    let radio4 = document.querySelector('#radio4');
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
    radio3.addEventListener('click',function(){
        if(!radio3.checked){
            radio3.checked = true;
        }
    })
    radio4.addEventListener('click',function(){
        if(!radio4.checked){
            radio4.checked = true;
        }
    })
    btn.addEventListener('click',function(){
    if(radio2.checked && radio3.checked){//回答正确
        document.querySelector('.title2').style.cssText = "opacity:1;"
        window.sessionStorage.setItem('learning11',3);
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