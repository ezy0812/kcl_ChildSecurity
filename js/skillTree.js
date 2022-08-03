window.onload = function(){
    let ChildSecurity = document.querySelector('.header-left');
    ChildSecurity.addEventListener('click',function(){
        window.location.href = './index.html'
    })

    let ellipses = document.querySelectorAll('.ellipse');
    let learning1 = window.sessionStorage.getItem('learning1');
    let learning2 = window.sessionStorage.getItem('learning2');
    let learning3 = window.sessionStorage.getItem('learning3');
    if(learning1 == 3 && learning2 == 3 && learning3 == 3){
        window.sessionStorage.setItem('learning0',3);
    }
    let learning5 = window.sessionStorage.getItem('learning5');
    window.sessionStorage.setItem('learning6',3)
    let learning6 = window.sessionStorage.getItem('learning6');
    let learning7 = window.sessionStorage.getItem('learning7');
    if(learning5 == 3 && learning6 == 3 && learning7 == 3){
        window.sessionStorage.setItem('learning4',3);
    }
    let learning9 = window.sessionStorage.getItem('learning9');
    let learning10 = window.sessionStorage.getItem('learning10');
    let learning11 = window.sessionStorage.getItem('learning11');
    if(learning9 == 3 && learning10 == 3 && learning11 == 3){
        window.sessionStorage.setItem('learning8',3);
    }
    let learning13 = window.sessionStorage.getItem('learning13');
    let learning14 = window.sessionStorage.getItem('learning14');
    let learning15 = window.sessionStorage.getItem('learning15');
    if(learning13 == 3 && learning14 == 3 && learning15 == 3){
        window.sessionStorage.setItem('learning12',3);
    }
    for(let i = 0; i < ellipses.length; i++){
        ellipses[i].addEventListener('click',function(){
            if(i==0){
                window.sessionStorage.setItem('learning'+i,2);
                window.location.href = 'maliciousLinks.html';
            }
            if(i ==1){
                if(window.sessionStorage.getItem('learning0')!=3){
                    window.sessionStorage.setItem('learning0',2)
                }
                window.location.href = 'maliciousLinks.html';
                window.sessionStorage.setItem('learning'+i,3);
            }
            if(i==2){
                if(window.sessionStorage.getItem('learning0')!=3){
                    window.sessionStorage.setItem('learning0',2)
                }
                window.location.href = 'malinks2.html';
                window.sessionStorage.setItem('learning'+i,3);
            }
            if(i==3){
                if(window.sessionStorage.getItem('learning0')!=3){
                    window.sessionStorage.setItem('learning0',2)
                }
                window.sessionStorage.setItem('learning'+i,2);
                window.location.href = 'games-before.html';
            }
            if(i==4){
                window.sessionStorage.setItem('learning'+i,2);
                window.location.href = 'maliao-before.html';
            }
            if(i==5){
                if(window.sessionStorage.getItem('learning4')!=3){
                    window.sessionStorage.setItem('learning4',2)
                }
                window.sessionStorage.setItem('learning'+i,3);
                window.location.href = 'maliao-before.html';
            }
            if(i==6){
                if(window.sessionStorage.getItem('learning4')!=3){
                    window.sessionStorage.setItem('learning4',2)
                }
                window.sessionStorage.setItem('learning'+i,3);
                window.location.href = 'dangers.html';
            }
            if(i==7){
                if(window.sessionStorage.getItem('learning4')!=3){
                    window.sessionStorage.setItem('learning4',2)
                }
                window.sessionStorage.setItem('learning'+i,2);
                window.location.href = 'maliao-before.html';
            }
            if(i==8){
                window.sessionStorage.setItem('learning'+i,2);
                window.location.href = 'concepts.html';
            }
            if(i==9){
                if(window.sessionStorage.getItem('learning8')!=3){
                    window.sessionStorage.setItem('learning8',2)
                }
                window.sessionStorage.setItem('learning'+i,3);
                window.location.href = 'concepts.html';
            }
            if(i==10){
                if(window.sessionStorage.getItem('learning8')!=3){
                    window.sessionStorage.setItem('learning8',2)
                }
                window.sessionStorage.setItem('learning'+i,3);
                window.location.href = 'dangers.html';
            }
            if(i==11){
                if(window.sessionStorage.getItem('learning8')!=3){
                    window.sessionStorage.setItem('learning8',2)
                }
                window.location.href = 'sensitive-quiz.html';
                window.sessionStorage.setItem('learning'+i,2);
            }
            if(i==12){
                window.location.href = 'passwordSecurity.html';
                window.sessionStorage.setItem('learning'+i,2);
            }
            if(i==13){
                if(window.sessionStorage.getItem('learning12')!=3){
                    window.sessionStorage.setItem('learning12',2)
                }
                window.location.href = 'passwordSecurity.html';
                window.sessionStorage.setItem('learning'+i,3);
            }
            if(i==14){
                if(window.sessionStorage.getItem('learning12')!=3){
                    window.sessionStorage.setItem('learning12',2)
                }
                window.location.href = 'passwordSecurity-before.html';
                window.sessionStorage.setItem('learning'+i,2);
            }
            if(i==15){
                if(window.sessionStorage.getItem('learning12')!=3){
                    window.sessionStorage.setItem('learning12',2)
                }
                window.location.href = 'passwordSecurity-before.html';
                window.sessionStorage.setItem('learning'+i,2);
            }
        })
        if(window.sessionStorage.getItem('learning'+i)==1){
            ellipses[i].setAttribute('class','ellipse background-color3')
        }else if(window.sessionStorage.getItem('learning'+i)==2){
            ellipses[i].setAttribute('class','ellipse background-color2')
        }else if(window.sessionStorage.getItem('learning'+i)==3){
            ellipses[i].setAttribute('class','ellipse background-color3')
        }
    }

    let count = 0;
    for(let i = 0; i < 16; i++){
        if(window.sessionStorage.getItem('learning'+i)==3){
            count ++;
        }
    }

    if(count>=16){
        document.querySelector('.pointer').style.cssText = 'display: block;'
    }
}