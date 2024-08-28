document.addEventListener('DOMContentLoaded', () => {
    // Poemas
    const poems = [
        "En un universo lleno de estrellas brillantes,<br> Tú eres la que hace que todo sea radiante.<br> Como galletas frescas con sabor a caramelo,<br> Eres única, un verdadero anhelo.",
        "Eres tan única como una galleta de chispas de chocolate,<br> No hay nadie como tú, es la verdad total.<br> Como un dulce regalo en un día lluvioso,<br> Eres especial, ¡y eso es grandioso!",
        "Como una galleta en un frasco lleno de dulzura,<br> Tu presencia es una deliciosa aventura.<br> Con tu risa y alegría que contagian el aire,<br> Eres un regalo que nunca deja de brillar."
    ];

    const poemElement = document.getElementById('poem');
    const changePoemButton = document.getElementById('change-poem');
    let poemIndex = 0;

    changePoemButton.addEventListener('click', () => {
        poemIndex = (poemIndex + 1) % poems.length;
        poemElement.innerHTML = poems[poemIndex];
    });

    // Chistes
    const jokes = [
        "¿Por qué la galleta fue al médico? ¡Porque se sentía desmigajada!",
        "¿Cómo se llama una galleta que no sabe chistes? ¡Una galleta sin gracia!",
        "¿Qué hace una galleta en el gimnasio? ¡Se pone en forma!"
    ];

    const jokeElement = document.getElementById('joke');
    const changeJokeButton = document.getElementById('change-joke');
    let jokeIndex = 0;

    changeJokeButton.addEventListener('click', () => {
        jokeIndex = (jokeIndex + 1) % jokes.length;
        jokeElement.innerHTML = jokes[jokeIndex];
    });

    // Modal
    const revealButton = document.getElementById('reveal-button');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');

    revealButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
