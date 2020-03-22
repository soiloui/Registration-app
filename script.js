'use strict'

const FORM = document.querySelector('#registration-form');
const INPUTS = document.querySelectorAll('.form-input');
let errors = 0;

function createPop(input, txt) {
    const POPUP_div = document.createElement('p');
    POPUP_div.id = 'reg-pop';
    POPUP_div.classList.add('reg-popup');
    input.previousElementSibling.appendChild(POPUP_div);
    POPUP_div.innerHTML = txt;
    errors++;
}

function deletePop(PREV) {
        if(PREV.querySelector('#reg-pop')!=null){
            PREV.removeChild(PREV.firstElementChild);
            errors--;
        }
}

function checkInput(){
    switch(this.id)
    {
    case 'name-input':
        if(this.value.length<3 && this.value.length>0){
            let PREV = this.previousElementSibling;
            if(PREV.querySelector('#reg-pop')==null){
                let txt = 'Min 3 characters';
                createPop(this, txt);
            }
        }
        else if(this.value.length>18){
            let PREV = this.previousElementSibling;
            if(PREV.querySelector('#reg-pop')==null){
                let txt = 'Max 18 characters';
                createPop(this, txt);
            }
        } else{
            deletePop(this.previousElementSibling);
        }
        break;


    case 'lastname-input':
        if(this.value.length<3 && this.value.length>0){
            let PREV = this.previousElementSibling;
            if(PREV.querySelector('#reg-pop')==null){
                let txt = 'Min 3 characters';
                createPop(this, txt);
            }
        }
        else if(this.value.length>18){
            let PREV = this.previousElementSibling;
            if(PREV.querySelector('#reg-pop')==null){
                let txt = 'Max 18 characters';
                createPop(this, txt);
            }
        } else{
            deletePop(this.previousElementSibling);
        }
        break;


    case 'email-input':
        if(!this.value.match(/^\w+@\w+\.[a-z]{2,3}/gi) && this.value.length>0){
            let PREV = this.previousElementSibling;
            if(PREV.querySelector('#reg-pop')==null){
                let txt = 'Invalid e-mail';
                createPop(this, txt);
            }
        } else{
            deletePop(this.previousElementSibling);
        }
        break;


    case 'pass-input':
        if((this.value.length<8 || !this.value.match(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!@#$%^&*()-/:?{}~"_`\[\]])/g) || this.value.match(/\s/g)) && this.value.length>0){
            let PREV = this.previousElementSibling;
            if(PREV.querySelector('#reg-pop')==null){
                let txt = 'Min 8 characters, requried 1 digit, symbol, uppercase & lowercase letter, no spaces';
                createPop(this, txt);
            }
        } else{
            deletePop(this.previousElementSibling);
        }
        break;


    case 'passconfirm-input':
        if(this.value != document.querySelector("#pass-input").value){
            let PREV = this.previousElementSibling;
            if(PREV.querySelector('#reg-pop')==null){
                let txt = 'Must be the same as above';
                createPop(this, txt);
            }
        } else{
            deletePop(this.previousElementSibling);
        }
        break;
    }
}



FORM.addEventListener('submit', e =>{
    if(!errors == 0){
        e.preventDefault();
    }
});

INPUTS.forEach(input => {
    input.addEventListener('input', checkInput);
});