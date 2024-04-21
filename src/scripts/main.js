document.addEventListener('DOMContentLoaded', function (){
    
    const navLink = document.querySelectorAll('.header__nav__navbar__list__item__link');
    const sections = document.querySelectorAll('section');
    
    navLink.forEach(link => {
        link.addEventListener('click', function(event) {
            const isActive = this.querySelector('.header__nav__navbar__list__item__link--is-active');
            
            navLink.forEach(link => {
                link.classList.remove('header__nav__navbar__list__item__link--is-active');
            });

            this.classList.add('header__nav__navbar__list__item__link--is-active');
        });
    });


    // Função para verificar se a seção está visível na janela
    function isSectionInView(section) {
        const rect = section.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Função para adicionar ou remover a classe --is-active dos links
    function updateActiveLink() {
        sections.forEach(section => {
            const id = section.getAttribute('id');
            const link = document.querySelector(`.header__nav__navbar__list__item__link[href="#${id}"]` - `.header__nav__navbar__list__item__link[href="#${fourth-season}"]`);

            if (link && isSectionInView(section)) {
                // Remove a classe '--is-active' de todos os links
                navLink.forEach(link => {
                    link.classList.remove('header__nav__navbar__list__item__link--is-active');
                });

                // Adiciona a classe '--is-active' ao link correspondente à seção visível
                link.classList.add('header__nav__navbar__list__item__link--is-active');
            }
        });
    }

    // Adiciona um ouvinte de evento de rolagem para verificar as seções visíveis
    window.addEventListener('scroll', updateActiveLink);

    // Atualiza os links ativos quando a página é carregada
    updateActiveLink();
});

document.addEventListener('DOMContentLoaded', function () {
    // scroll anchor 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    // watch tabs 
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            hideAllTabs();
            tab.classList.add('watch__list--is-active');
            tab.classList.add('.animated-element')
            removeActiveButton();
            event.target.classList.add('watch__tabs__button--is-active');
        });
    });

    // functions 
    function removeActiveButton() {
        const buttons = document.querySelectorAll('[data-tab-button]');

        buttons.forEach(button => {
            button.classList.remove('watch__tabs__button--is-active');
        });
    }

    function hideAllTabs() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        tabsContainer.forEach(tab => {
            tab.classList.remove('watch__list--is-active');
            tab.classList.remove('.animated-element')
        });
    }
    
    // animations
    const element = document.querySelector('.animated-element');
    
    element.style.opacity = 0;
    element.style.transform = 'translateX(-100%)';
    
    function fadeInAndMoveIn() {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
    }
    
    setTimeout(fadeInAndMoveIn, 2000);

    
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.cast__content__carousel__carousel-track');
    const items = document.querySelectorAll('.cast__content__carousel__carousel-track__item');
    const prevBtn = document.querySelector('.cast__content__carousel__carousel-prev');
    const nextBtn = document.querySelector('.cast__content__carousel__carousel-next');
    const dots = document.querySelectorAll('.dot');
    
    let index = 0;
    
    function updateNav() {
        if (index === 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }
        
        if (index === items.length - 1) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
        
        dots.forEach(dot => dot.classList.remove('dot--is-active'));
        dots[index].classList.add('dot--is-active');
    }
    
    function moveToSlide(newIndex) {
        track.style.transform = `translateX(-${items[newIndex].offsetLeft}px)`;
        index = newIndex;
        updateNav();
    }
    
    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            moveToSlide(index - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (index < items.length - 1) {
            moveToSlide(index + 1);
        }
    });
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            moveToSlide(i);
        });
    });
    
    updateNav();
});