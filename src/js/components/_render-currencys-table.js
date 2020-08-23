import {handleShowCalculator} from './_calculator';

export const renderCurrencysTable = (fetchRes, time)=>{
    
    const table = document.getElementById('tbody');
    const timeStamp = document.querySelector('#timeStamp');

    const render = (dataBase, updateTime)=> {
        timeStamp.innerText = updateTime;
        dataBase.rates.forEach((rate, index)=>{
            if(rate.code === 'XDR') return;
            const {currency, code, mid} = rate;
            let name = [...currency];
            name[0] = name[0].toUpperCase();
            name = name.join('');
            let bid = mid - 0.05;
            bid<0? bid = mid.toFixed(3): bid = bid.toFixed(3);
            let ask = (mid + 0.00).toFixed(3);
            const tr = document.createElement('tr');
            tr.setAttribute('id', `${code}-${index}`);
            tr.setAttribute('class', 'currencyTr');
            let flag = [...code].splice(0,2).join('');
            const content = `   
                                <td><img src="https://www.countryflags.io/${flag}/flat/64.png" alt="${code}"></td>
                                <td id="td-name">${name}</td>
                                <td>${code}</td>
                                <td>${bid}</td>
                                <td>${ask}</td>`;
            tr.innerHTML = content;
            table.appendChild(tr);
            document.querySelector(`#${code}-${index}`).addEventListener('click', ()=> handleShowCalculator(code, 'currencyTr'));
        });
    };
    render(fetchRes, time);
};