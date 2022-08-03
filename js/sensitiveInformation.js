window.onload = function () {
    window.sessionStorage.setItem('learning15',2);
    function getTime(time) {
        let tim = Number(time);
        let date = new Date(tim); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
        let m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
        let s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
        let all = Y + M + D + h + m + s;
        let Times = all.substring(0, all.length - 3);
        return Times
    }

    let isTerminal = false;
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click', function () {
        window.location.href = './index.html';
    })

    let Browser = document.querySelector('.Browser-register');
    let registerForm = document.querySelector('.register');
    Browser.addEventListener('click', function () {
        registerForm.style.cssText = 'display: block;'
    })
    let registerBtn = document.querySelector('.register-btn');
    let message3 = document.querySelector('.message3');
    registerBtn.addEventListener('click', function () {
        let username = document.querySelector('.text').value;
        let password = document.querySelector('.password').value;
        if (password == '123456' || password == 'qwer1234' || password == 'iloveyou') {
            registerForm.style.cssText = 'display: none;';
            let message = document.querySelector(".message");
            message.style.cssText = 'display:block;';
            isTerminal = true;
            sessionStorage.setItem('pjUsername', username);
            sessionStorage.setItem('pjPassword', password);
            setTimeout(() => {
                message.style.cssText = 'display:none;';
            }, 1000)
        } else {
            message3.style.cssText = 'display:block;';
            setTimeout(() => {
                message3.style.cssText = 'display:none;';
            }, 8000);
        }
    })

    let Terminal = document.querySelector('.Terminal');
    Terminal.addEventListener('click', function () {
        if (isTerminal) {
            //显示黑窗口
            document.querySelector('.root').style.cssText = 'display:block;'
            document.querySelector('.message2').style.cssText = 'display:block;'
            setTimeout(() => {
                document.querySelector('.message2').style.cssText = 'display:none;'
            }, 1000)
            //隐藏注册
            registerForm.style.cssText = 'display: none;'
        } else {
            console.log('请先注册');
        }
    })

    let input1 = document.querySelector('.toot-input');
    let text1 = document.querySelector('.text1');
    text1.addEventListener('focus', function () {
        document.onkeydown = function (event) {
            let e = window.event || event;
            if ((e.keyCode || e.which) == 13) {
                if (text1.value == 'hydra') {
                    let child = document.createElement('div');
                    child.innerHTML = `
                    Hydra v9.2 (c) 2021 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes
How to use this tool?
Simply type in the following:
hydra -l admin -P top_100.txt small-game.com

                    `
                    input1.appendChild(child);
                }
            }
        }
    })
    let input2 = document.querySelector('.toot-input2');
    let text2 = document.querySelector('.text2');
    text2.addEventListener('focus', function () {
        document.onkeydown = function (event) {
            let e = window.event || event;
            if ((e.keyCode || e.which) == 13) {
                console.log(text1.value, text2.value);
                if (text1.value == 'hydra' && text2.value == 'hydra -l admin -P top_100.txt small-game.com') {
                    let child1 = document.createElement('div');
                    child1.innerHTML = `
                    Hydra v9.2 (c) 2021 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).
                    `
                    input2.appendChild(child1);
                    setTimeout(() => {
                        let child2 = document.createElement('div');
                        let timeStr = getTime(new Date().getTime());
                        child2.innerHTML = `
                        Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at ${timeStr}
[DATA] max 16 tasks per 1 server, overall 16 tasks, 101 login tries (l:1/p:101), ~7 tries per task
[DATA] attacking http-post-form://small-game.com:80/a.php:username=^USER^&password=^PASS^&check=login&submit=Submit:wrong pass
                    `
                        input2.appendChild(child2);
                    }, 500)
                    setTimeout(() => {
                        let child3 = document.createElement('div');
                        child3.innerHTML = `
                        [ATTEMPT] target small-game.com - login "admin" - pass "admin" - 1 of 101 [child 0] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "123456" - 2 of 101 [child 1] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "123456789" - 3 of 101 [child 2] 
                    `
                        input2.appendChild(child3);
                    }, 1000)
                    setTimeout(() => {
                        let child4 = document.createElement('div');
                        child4.innerHTML = `
                        [ATTEMPT] target small-game.com - login "admin" - pass "admin" - 1 of 101 [child 0] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "123456" - 2 of 101 [child 1] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "123456789" - 3 of 101 [child 2] 
                    `
                        input2.appendChild(child4);
                    }, 1500)
                    setTimeout(() => {
                        let child5 = document.createElement('div');
                        child5.innerHTML = `
                        [ATTEMPT] target small-game.com - login "admin" - pass "test1" - 4 of 101 [child 3] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "password" - 5 of 101 [child 4] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "12345678" - 6 of 101 [child 5] 
                    `
                        input2.appendChild(child5);
                    }, 2000)
                    setTimeout(() => {
                        let child6 = document.createElement('div');
                        child6.innerHTML = `
                        [ATTEMPT] target small-game.com - login "admin" - pass "zinch" - 7 of 101 [child 6] (0/0)
[ATTEMPT] target small-game.com - login "admin" - pass "g_czechout" - 8 of 101 [child 7] 
                    `
                        input2.appendChild(child6);
                    }, 2500)
                    setTimeout(() => {
                        let child7 = document.createElement('div');
                        child7.innerHTML = `
                        [ATTEMPT] target small-game.com - login "admin" - pass "asdf" - 9 of 101 [child 8] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "qwerty" - 10 of 101 [child 9] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "1234567890" - 11 of 101 [child 
                    `
                        input2.appendChild(child7);
                    }, 3000)
                    setTimeout(() => {
                        let child8 = document.createElement('div');
                        child8.innerHTML = `
                        [ATTEMPT] target small-game.com - login "admin" - pass "1234" - 15 of 101 [child 14] (0/0)
                        [ATTEMPT] target small-game.com - login "admin" - pass "abc123" - 16 of 101 [child 15] 
                    `
                        input2.appendChild(child8);
                    }, 3500)
                    setTimeout(() => {
                        let child9 = document.createElement('div');
                        let timeStr = getTime(new Date().getTime());
                        let username = window.sessionStorage.getItem('pjUsername');
                        let password = window.sessionStorage.getItem('pjPassword');
                        console.log(username,password);
                        child9.innerHTML = `
                        [80][http-post-form] host: small-game.com   login: <span style='color:red;'> ${username}</span>   password: <span style='color:red;'>${password}</span>
                        [STATUS] attack finished for small-game.com (valid pair found)
                        1 of 1 target successfully completed, 1 valid password found
                        Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at ${timeStr}

                    `
                        input2.appendChild(child9);
                        document.querySelector('.next').style.cssText = 'display:block'
                    }, 4000)

                    document.querySelector('.next').addEventListener('click',function(){
                        window.location.href = 'password-quiz.html'
                    })
                    // setTimeout(()=>{
                    //     window.location.href = 'password-quiz.html'
                    // },30000)
                }
            }
        }
    })
}