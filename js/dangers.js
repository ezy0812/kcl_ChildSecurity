window.onload = function(){
    window.sessionStorage.setItem('learning10',3);
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function () {
        window.location.href = './index.html'
    })
    
    let next = document.querySelector('.next');
    next.addEventListener('click',function(){
        window.location.href = 'sensitive-quiz.html'
    })
}