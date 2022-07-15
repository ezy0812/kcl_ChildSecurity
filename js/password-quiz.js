window.onload = function(){
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })

    let Finish = document.querySelector('.next');

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
    Finish.addEventListener('click',function(){
    if(radio2.checked){//回答正确
        document.querySelector('.title2').style.cssText = "opacity:1;"
        window.sessionStorage.setItem('learning15',3);
        setTimeout(() => {
            document.querySelector('.title2').style.cssText = "opacity:0;"
            window.location.href = 'skillTree.html'
        }, 8000);
       }else{//回答错误
        console.log('回答错误');
        document.querySelector('.title1').style.cssText = "opacity:1;"
        setTimeout(() => {
            document.querySelector('.title1').style.cssText = "opacity:0;"
        }, 8000);
       }
    })
}