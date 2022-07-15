window.onload = function() {

    // play按钮
    let play = document.querySelector('.play');
    play.style.cssText = "transform: translateZ(-0px);opacity:1;"
    play.addEventListener('click',function(){
        window.location.href = './play.html'
    })

    let about = document.querySelector('.about');
    about.style.cssText = "transform: translateZ(-0px);opacity:1;"
    about.addEventListener('click',function(){
        window.location.href = './about.html'
    })

    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function () {
        window.location.href = './index.html'
    })

}