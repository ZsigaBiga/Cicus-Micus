'use strict'

const activeMen = (el) => {
    var parent = document.getElementById('menuOpts').children;

    for (let i = 0; i < parent.length; i++) {
        if(parent[i].children[0].classList.contains('active')){
            parent[i].children[0].classList.remove('active');
        }
    }

    el.classList.add('active');
}

const nextPic = () => {

}

const prevPic = () => {
    
}