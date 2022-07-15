window.onload = function(){
    window.sessionStorage.setItem('learning2',3);
    let next = document.querySelector('.next');
    next.addEventListener('click',function(){
        window.location.href = './games-before.html'
    })

    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })
}