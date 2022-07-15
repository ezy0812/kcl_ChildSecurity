window.onload = function(){
    let childSecurity = document.querySelector('.header-left');
    childSecurity.addEventListener('click',function(){
        window.location.href = 'index.html'
    })
    
    let btn = document.querySelector('.register-btn');
    let text = document.querySelector('.text');
    let pwd = document.querySelector('.password');
    let title1 = document.querySelector('.title1');
    let title2 = document.querySelector('.title2');
    let next = document.querySelector('.next');
    
    title1.style.cssText = 'visibility: visible;'
    setTimeout(()=>{
        title1.style.cssText = 'display:none;'
    },1500)

    btn.addEventListener('click',function(){
        if(text.value && pwd.value){
            title2.style.cssText = 'visibility: visible;'
            next.style.cssText = 'visibility: visible;'
            setTimeout(()=>{
                title2.style.cssText = 'visibility: hidden;'
            },1000)
        }
    })
    next.addEventListener('click',function(){
        window.location.href = './Cautious.html'
    })
}