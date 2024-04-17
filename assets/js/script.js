let map = document.getElementById('map');
let text = document.getElementById('text');

function show () {
    map.src= `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11935.301159631941!2d35.92236473335379!3d35
    .35850965675029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523fe3b216d9809%3A0x5f2b01a0fb9029d1!2sAl%
    20Jarkas%20Neighborhood%2C%20Jableh%2C%20Syria!5e0!3m2!1sen!2s!4v1707920354699!5m2!1sen!2s`;
    text.style.display = 'none';
}