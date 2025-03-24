const links = document.querySelectorAll('.menu a');
const contents = document.querySelectorAll('.content');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        link.classList.add('active');
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});