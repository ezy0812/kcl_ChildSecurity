window.onload = function(){
    window.sessionStorage.setItem('learning14',3);
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function () {
        window.location.href = './index.html'
    })

    let next = document.querySelector('.next');
    next.addEventListener('click',function(){
        window.location.href = './sensitiveInformation.html'
    })
}