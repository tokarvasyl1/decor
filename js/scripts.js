$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:54,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:4
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
});






// Тест бургер меню
// document.querySelector('.hamburger').addEventListener('click', function (e){
//     e.preventDefault();
//     // this.classList.toggle('is-active');
//     if (this.classList.contains('is-active')) {
//         this.classList.remove('is-active');
//         document.querySelector('#menu').classList.remove('nav-active');
//         document.body.classList.remove('body-active');
//     }
//     else {
//         this.classList.add('is-active');
//         document.querySelector('#menu').classList.add('nav-active');
//         document.body.classList.add('body-active');
//     }
// })