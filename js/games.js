window.onload = function(){
    let childSecurity = document.querySelector('.header-left');
    childSecurity.addEventListener('click',function(){
        window.location.href = 'index.html'
    })

    let images1 =  document.querySelector('.images1');
    let form = document.querySelector('.form')
    images1.addEventListener('click',function(){
        form.style.cssText = 'display:block;'
    })
    
    let btn = document.querySelector('.register-btn');
    let text = document.querySelector('.text');
    let pwd = document.querySelector('.password');
    let title = document.querySelector('.title');
    btn.addEventListener('click',function(){
        if(!text.value || !pwd.value){
            title.style.cssText = 'opacity: 1;'
            setTimeout(()=>{
                title.style.cssText = 'opacity: 0;'
            },2000)
        }else{
            window.localStorage.setItem('username',text.value);
            window.localStorage.setItem('password',pwd.value);
            window.location.href = 'login.html'
        }
    })
}