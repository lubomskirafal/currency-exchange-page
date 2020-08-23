import '.././sass/index.scss';
import {initCookies} from './components/_handleCookies';
import {scrollEvents} from './components/_scrollEvents';
import {slider} from './components/_slider';
import {fetchTableData} from './components/_fetchData';
import {handleBtns} from './components/_handleBtns';



document.addEventListener('DOMContentLoaded', ()=> {
    
    initCookies();
    fetchTableData();
    handleBtns();
    scrollEvents();
    slider();
});




