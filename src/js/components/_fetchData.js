import {renderCurrencysTable} from './_render-currencys-table.js';
import {renderCurrencysList, renderCalculatorRate, renderCalculatorResults} from './_calculator';
import {getDataStamp} from './_getTimeStamp';

const fetchTableData = ()=> {
    const url = 'https://api.nbp.pl/api/exchangerates/tables/a';
    fetch(url)
    .then(res=> {
        if(res.ok) return res.json();

        return;
    })
    .then(data=>{
        renderCurrencysTable(data[0], getDataStamp(data[0].no));
        renderCurrencysList(data[0]);
        setTimeout(fetchTableData,600000);
    });
};

const fetchCalculatorData = (from, to, amountFrom)=> {
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    fetch(url)
        .then(res => {
            if(res.ok) return res.json();

            return;
        })
        .then(data => {
            const result = amountFrom * data.rates[to];
            renderCalculatorRate(data.rates[to].toFixed(3),from, to);
            renderCalculatorResults(result.toFixed(2));
        })
};

export {
    fetchTableData,
    fetchCalculatorData,
};