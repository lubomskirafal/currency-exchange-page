import {handleShowCalculator, swapRates} from './_calculator';
import {smoothScroll} from './_scrollEvents';
import {handleCookieInfo} from './_handleCookies';

const btns = document.querySelectorAll('button');
const manu = document.querySelector('.manu__list');

const handleHamburgerClick = (hamburger)=> {
    manu.classList.toggle('manu__list--active');
    manu.addEventListener('click', ()=>handleHamburgerClick(hamburger));
    if(!hamburger.classList.contains('hamburger--active')) {
        hamburger.classList.remove('hamburger--noActive')
        hamburger.classList.add('hamburger--active')
    }else {
        hamburger.classList.add('hamburger--noActive')
        hamburger.classList.remove('hamburger--active');
    };
}; 

const handleClick = (btn)=> {
    if(btn.classList.contains('calculatorManuBtn')) return handleShowCalculator('EUR');
    if(btn.classList.contains('calculator__btn')) return handleShowCalculator('EUR');
    if(btn.classList.contains('hamburger')) return handleHamburgerClick(btn);
    if(btn.classList.contains('calculator__form-swapBtn')) return swapRates();
    if(btn.classList.contains('cookie-message__button--seaMore')) return handleCookieInfo();
    if(btn.classList.contains('closeBtn')) return handleCookieInfo();
    if(btn.classList.contains('showCookieBtn')) return handleCookieInfo();
    if(btn.dataset.target) return smoothScroll(btn);
};

export const handleBtns = ()=> {
    btns.forEach(btn=>btn.addEventListener('click',()=>handleClick(btn)));
};

