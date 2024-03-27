'use strict';

// const btn = document.querySelectorAll('.main__faq-content-block-up').addEventListener('click', forEach(listToggle));


// function listToggle(btn) {
//     const listToggle = document.querySelectorAll('.main__faq-content-block-down');

//     if (listToggle.style.display === 'none' || listToggle.style.display === '') {
//         listToggle.style.display = 'block';
//     } else {
//         listToggle.style.display = 'none';
//     }
// };


document.querySelectorAll('.main__faq-content-block-up').forEach(function (button) {
    button.addEventListener('click', function () {
        let content = this.parentElement.querySelector('.main__faq-content-block-down');
        listToggle(content);
    });
});

function listToggle(content) {
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
};



$(document).ready(function () {
    $('.information__content-right-bottom').slick({
        nextArrow: '<button class="btn slider-btn slider-next"><img src="img/arrow-left.svg"></button>',
        prevArrow: '<button class="btn slider-btn slider-prev"><img src="img/arrow-right.svg"></button>',
        



    });
});



