'use strict'

const INPUTS = document.querySelectorAll('.form-input');


function createPop(input, txt) {
    const POPUP_div = document.createElement('p');
    POPUP_div.id = 'reg-pop';
    input.previousElementSibling.appendChild(POPUP_div);
    POPUP_div.innerHTML = txt;
}
function deletePop(parent) {
        console.log(`object`);
        if(parent.querySelector('#reg-pop')!=null){
            parent.removeChild(parent.firstElementChild);
        }
}

function checkInput(){
    switch(this.id)
    {
    case 'name-input':
        let parent = this.previousElementSibling;

        if(this.value.length<3){
            if(document.querySelector('#reg-pop')==null){
                let txt = 'Min 3 characters';
                createPop(this, txt);
            }

            this.addEventListener('click', deletePop(parent));
        } else{
            deletePop(parent);
        }
        break;

    case 'lastname-input':
        //jakiś kod
        break;

        //...
    case 'email-input':
        //jakiś kod
        break;

    case 'pass-input':
        //jakiś kod
        break;

    case 'passconfirm-input':
        //jakiś kod
        break;
    }
}




INPUTS.forEach(input => {
    input.addEventListener('input', checkInput);
});