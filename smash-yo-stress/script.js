const player = document.querySelector('#player');
const hammer = document.querySelector('#hammer');
const object = document.querySelector('#typeWriter');

hammer.addEventListener('collide', function(e) {
   console.log('Player has collided with body #' + e.detail.body.id);
}