const button = document.querySelector('button');
let isPink = true;

button.addEventListener('click', function() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff', '#FFA500'];
    randomIndex = Math.floor(Math.random() * 7);
    document.body.style.backgroundColor = colors[randomIndex];
});
