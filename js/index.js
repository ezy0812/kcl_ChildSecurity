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

    let certificate = document.querySelector('.certificate');
    let isShow = false
    let count = 0;
    for(let i = 0; i < 16; i++){
        if(window.sessionStorage.getItem('learning'+i)==3){
            count ++;
        }
    }

    if(count>=16){
        certificate.style.cssText = "transform: translateZ(-0px);opacity:1;"
    }
    // 跳转到证书页
    certificate.addEventListener('click',function(){
        window.location.href = './certificate.html'
    })

    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function () {
        window.location.href = './index.html'
    })

}