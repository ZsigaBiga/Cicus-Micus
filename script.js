'use strict'

const activeMen = (el) => {
    var parent = document.getElementById('menuOpts').children;

    for (let i = 0; i < parent.length; i++) {
        console.log(parent[i].classList)
        if(parent[i].children[0].classList.contains('active')){
            parent[i].children[0].classList.remove('active');
        }
    }

    el.classList.add('active');
}