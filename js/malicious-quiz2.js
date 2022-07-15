window.onload = function(){
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })

    let next = document.querySelector('.next');
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
    let title1 = document.querySelector('.title1');
    let title2 = document.querySelector('.title2');
    next.addEventListener('click',function(){
        //回答错误
        if(radio1.checked){
            title1.style.cssText = 'opacity: 1;'
            setTimeout(()=>{
                title1.style.cssText = 'opacity: 0;'
                window.location.href = './malicious-quiz.html'
            },10000)
        }
        if(radio2.checked){
            //跳转到新页面
            // window.location.href = 'malicious-quiz2.html'
            title2.style.cssText = 'opacity: 1;'
            window.sessionStorage.setItem('learning3',3)
            setTimeout(()=>{
                title2.style.cssText = 'opacity: 0;'
                window.location.href = './skillTree.html'
            },1000)
        }
    })
}