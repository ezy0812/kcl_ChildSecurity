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
    next.addEventListener('click',function(){
        if(radio1.checked){
            title1.style.cssText = 'opacity: 1;'
            setTimeout(()=>{
                title1.style.cssText = 'opacity: 0;'
            },1000)
        }
        if(radio2.checked){
            console.log('回答正确');
            //跳转到新页面
            window.location.href = 'malicious-quiz2.html'
        }
    })
}