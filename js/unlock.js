window.onload = function(){
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })

    let unlock = document.querySelector('.unlock');
    unlock.addEventListener('click',function(){
        let username = window.localStorage.getItem('username');
        username = username + '123'
        window.localStorage.setItem('username',username)
        let password = window.localStorage.getItem('password');
        password = password + '123'
        window.localStorage.setItem('password',password)
        window.location.href = './login2.html'
    })

}