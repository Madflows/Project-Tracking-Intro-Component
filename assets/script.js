var navBtn = document.querySelector('.nav-toggle');
var navLinks = document.querySelectorAll('.navLinks')

navBtn.addEventListener('click', (e) => {
    navBtn.classList.toggle('active');
})

navLinks.forEach((e) => {
    e.addEventListener('click', (e) => {
        navBtn.classList.remove('active');
    })
})