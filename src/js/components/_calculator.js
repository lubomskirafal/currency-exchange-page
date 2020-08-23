
import {fetchCalculatorData} from './_fetchData';
const selects = document.querySelectorAll('.calculator__form-select');
const calculator = document.querySelector('.calculator');
let selectCurrencyFrom = document.querySelector('.calculator__form-select--from');
let selectCurrencyTo = document.querySelector('.calculator__form-select--to');
const calculatorForms = document.querySelectorAll('.calculator__form');
const rateInfoSpanFrom = document.querySelector('.claculator__rate-info--from');
const rateInfoSpanTo = document.querySelector('.claculator__rate-info--to');
const rateInfo = document.querySelector('.calculator__rate-info');
const amountFrom = document.querySelector('.calculator__form-number--from');
const amountTo = document.querySelector('.calculator__form-number--to');

const renderCalculatorRate = (rate, from, to)=> {
     rateInfoSpanFrom.innerText = ` ${from} =`;
     rateInfoSpanTo.innerText = ` ${rate} ${to}`;
     rateInfo.classList.add('calculator__rate-info--active');
};

const renderCalculatorResults = (result) => {
     amountTo.value = result;
};

const fromReset = (form, spanFrom, spanTo)=>{
     spanFrom.innerText = null;
     spanTo.innerText = null;
     rateInfo.classList.remove('calculator__rate-info--active');
     form.reset();
};

const handleShowCalculator = (rate, itemClass)=> {
     const options = document.querySelectorAll('option');

     options.forEach(option=> {
          if(option.value !=='PLN'&&option.parentNode.classList.contains('calculator__form-select--to')||option.parentNode.classList.contains('calculator__form-select--to')) {
               option.removeAttribute('selected');
          };
          
          if(rate === option.value&&option.parentNode.classList.contains('calculator__form-select--to')) {
               option.setAttribute('selected', true);
          };
     });
     
     if(calculator.classList.contains('calculator--active')&&itemClass==='currencyTr') return fetchCalculatorData(selectCurrencyFrom.value, selectCurrencyTo.value, amountFrom.value);; 
     
     calculator.classList.toggle('calculator--active');
     
     if(calculator.classList.contains('calculator--active')) calculatorForms.forEach(form=>form.addEventListener('input', (e)=>{
          e.preventDefault();
          fetchCalculatorData(selectCurrencyFrom.value, selectCurrencyTo.value, amountFrom.value);
     }));
     if(!calculator.classList.contains('calculator--active')) calculatorForms.forEach(form=>fromReset(form, rateInfoSpanFrom,rateInfoSpanTo));
};

const renderCurrencysList = (dataBase)=> {
     selects.forEach(select=>{
          dataBase.rates.forEach(rate=>{
               if(rate.code === 'XDR') {
                    rate.code = 'PLN';
                    rate.currency = 'Polski złoty';
               };
               const {currency, code, mid} = rate;
               const option = document.createElement('option');
               option.setAttribute('value', code);
               if(rate.code === 'PLN' && select.classList.contains('calculator__form-select--from')) option.setAttribute('selected',true);
               if(rate.code === 'EUR' && select.classList.contains('calculator__form-select--to')) option.setAttribute('selected',true);
               option.innerHTML = `${code}`;
               select.appendChild(option);
          });
     });
};

const swapRates = ()=> {
     const newSelectCurrencyFrom = selectCurrencyFrom.value;
     selectCurrencyFrom.value = selectCurrencyTo.value;
     selectCurrencyTo.value = newSelectCurrencyFrom;
     fetchCalculatorData(selectCurrencyFrom.value, selectCurrencyTo.value, amountFrom.value);
};

export {
     renderCurrencysList,
     handleShowCalculator,
     swapRates,
     renderCalculatorRate,
     renderCalculatorResults,
}