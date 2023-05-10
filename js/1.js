const button = document.querySelector('button');
let isPink = true;

button.addEventListener('click', function() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];
    randomIndex = Math.floor(Math.random() * 6);
    document.body.style.backgroundColor = colors[randomIndex];
});
