let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

// Alterna o tema ao clicar no botão
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
});


links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão (recarregar a página)
            const pageId = link.getAttribute('data-page');

        // Esconde todas as seções
        pages.forEach(page => page.classList.add('hidden'));

        // Mostra a seção correspondente
        document.getElementById(pageId).classList.remove('hidden');
    });
});

