export async function slider() {
    const urls = [
        'images/currency-3133236_640-min.jpg',
        'images/business-suit-690048_640-min.jpg',
        'images/business-1031754_640-min.jpg',
        'images/bank-note-941246_640-min.jpg',
    ];
    const titles = [
        'tradycja',
        'ekonomia',
        'waluty',
        'ochrona'
    ];
    const signs = [
        'Już od ponad 10-ciu lat oferujemy naszym klientom profesjonalne i bezpieczne usługi',
        'Możliwość negocjowania ceny, abyś zawsze otrzymał najlepszy kurs w zależności od wymienianej kwoty',
        'Aktualne kursy walut z całego świata.',
        'Bezpieczeństwo transakcji online i na miejscu'
    ];
    const title = document.querySelector('.header__title p');
    const header = document.querySelector('header');
    const sign = document.querySelector('.header__sign p');
    let index = 0
    

    async function slide(url){
        index===urls.length? index=0:index;
        title.classList.add('slide');
        sign.classList.add('slide');
        header.style.opacity = '1';
        header.style.backgroundImage = `url(${urls[index]})`;
        title.innerText = titles[index];
        sign.innerText = signs[index];
        index++;
        
        setTimeout(()=>{
            header.style.opacity = '0';
            setTimeout(()=>{
                title.classList.remove('slide');
            sign.classList.remove('slide');
            },350);
        },4600);
        setTimeout(slide, 5000);
    };

    const init = ()=> {
        slide();
    };
    return init();
};

