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
