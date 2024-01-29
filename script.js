document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');

    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        overlay.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, transparent 50px, #000 100px)`;
        overlay.style.cursor = 'none';
    });
});
