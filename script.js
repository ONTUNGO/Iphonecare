const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (bar) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

fetch(https://newsapi.org/v2/everything?q=tesla&from=2023-05-22&sortBy=publishedAt&apiKey=c13dd95ce8be4d37b1a5bec12cbba940

)