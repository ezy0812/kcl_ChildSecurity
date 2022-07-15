window.onload = function(){
    window.sessionStorage.setItem('learning1',3);
    let next = document.querySelector('.next');
    next.addEventListener('click',function(){
        window.location.href = './malinks2.html'
    })

    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })
}