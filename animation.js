/*
animation code for the splash screen
*/
let splash = document.querySelector('#splash');
let spHead = document.querySelector('#splash-header');
let spTxt = document.querySelectorAll('.sptxt');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        spTxt.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            spTxt.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);
        setTimeout(() => {
            splash.style.top = '-100vh';
        }, 2000)
    })
})
