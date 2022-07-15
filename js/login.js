window.onload = function(){
    let childSecurity = document.querySelector('.header-left');
    childSecurity.addEventListener('click',function(){
        window.location.href = 'index.html'
    })

    let btn = document.querySelector('.register-btn');
    let text = document.querySelector('.text');
    let pwd = document.querySelector('.password');
    let title = document.querySelector('.title');
    btn.addEventListener('click',function(){
        //判断用户名和密码是否错误
        let username = window.localStorage.getItem('username');
        let password = window.localStorage.getItem('password');
        if(text.value != username || pwd.value != password){
            title.style.cssText = 'opacity: 1;'
            setTimeout(()=>{
                title.style.cssText = 'opacity: 0;'
            },2000)
        }else{
            //密码正确 跳转到贪吃蛇页面
            window.location.href = 'snake.html'
        }
    })
}