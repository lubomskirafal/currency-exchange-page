
export const scrollEvents = ()=> {
    const goTopBtn = document.querySelector('.goTopBtn');
    const navBar = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const manu = document.querySelector('.manu__list');
    let initialScrollPos = 0;

    const apearHidden = ()=> {
        const scrollY = window.scrollY;
        const windowH = window.innerHeight;
        if(scrollY>windowH/4) {
            goTopBtn.style.opacity = '1';
        }else {
            goTopBtn.style.opacity = '0';
        };
    };

    const handleHideNavBar = (e)=> {
        
        const currentScrollPos = window.scrollY;
        if(currentScrollPos> initialScrollPos + 100) {
            navBar.style.transform =  'translateY(-200px)';
            initialScrollPos = currentScrollPos;
            manu.classList.remove('manu__list--active');
            hamburger.classList.remove('hamburger--active');
        };
        if(currentScrollPos< initialScrollPos) {
            navBar.style.transform =  'translateY(0)';
            initialScrollPos = currentScrollPos;
        };
    };

    const init = ()=> {
        window.addEventListener('scroll', ()=>{
            handleHideNavBar();
            apearHidden();
        });
    };
    return init();
};

export const smoothScroll = (item)=>{
    
    if(!item.dataset.target) return;

    const target = document.querySelector(item.dataset.target);
    const targetPosition = target.offsetTop;
    const currentPosition = window.pageYOffset;
    const distance = targetPosition - currentPosition;
    
    let startTime  = null;
    const duration = 500;

    const animate = (currentTime) => {
        if(startTime === null) startTime = currentTime;
        const progress = currentTime - startTime;
        window.scrollTo(0, distance*(progress/duration)+currentPosition);
        if(progress<duration) window.requestAnimationFrame(animate);
    };
    window.requestAnimationFrame(animate);
};
