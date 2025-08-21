document.addEventListener('DOMContentLoaded', function() {
    const background = document.createElement('div');
    background.classList.add('background');
    document.body.appendChild(background);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let content = '';
    for (let i = 0; i < 1000; i++) {
        content += chars.charAt(Math.floor(Math.random() * chars.length)) + ' ';
    }
    background.textContent = content;
});
