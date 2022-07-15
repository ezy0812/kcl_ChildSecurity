window.onload = function(){
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function () {
        window.location.href = './index.html'
    })
    
    document.querySelector('.play').addEventListener('click',function(){
        window.location.href = 'games.html'
    })
    
    document.querySelector('.next').addEventListener('click',function(){
        document.querySelector('.Well').style.cssText = 'opacity:1;'
        setTimeout(() => {
            window.location.href = 'malicious-quiz.html'
        }, 500);
    })
}