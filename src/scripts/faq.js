document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq__content__questions__item__question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = this.classList.contains('--is-open');
            const icon = this.querySelector('.faq__content__questions__item__icon');

            answer.classList.toggle('faq__content__questions__item__answer--is-open');

            faqQuestions.forEach(question => {
                question.classList.remove('--is-open');
                question.nextElementSibling.style.height = '0';
            });

            if (!isOpen) {
                this.classList.add('--is-open');
                answer.style.height = answer.scrollHeight + 'px';
            }

            if (answer.classList.contains('faq__content__questions__item__answer--is-open')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});