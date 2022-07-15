window.onload = function(){
    
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function () {
        window.location.href = './index.html'
    })

    let skillTree = document.querySelector('.skillTree');
    skillTree.addEventListener('click',function(){
        window.location.href = './skillTree.html'
    })

    let maliciousLinks = document.querySelector('.maliciousLinks');
    maliciousLinks.addEventListener('click',function(){
        window.location.href = './maliciousLinks.html'
    })

    let cyberbullying = document.querySelector('.cyberbullying');
    cyberbullying.addEventListener('click',function(){
        window.location.href = './maliao-before.html'
    })

    let sensitiveInformation = document.querySelector('.sensitiveInformation');
    sensitiveInformation.addEventListener('click',function(){
        window.location.href = './dangers.html'
    })

    let passwordSecurity = document.querySelector('.passwordSecurity');
    passwordSecurity.addEventListener('click',function(){
        window.location.href = './passwordSecurity.html'
    })


}