const hammer = document.querySelector('#hammer');
const object = document.querySelector('#typeWriter');

hammer.addEventListener('collide', disappear() 
    



function disappear() {
    console.log("object is touched")
    console.log('Player has collided with body #' + e.detail.body.id);
    object.innerHTML = `<a-entity gblock="https://poly.google.com/view/2SmAWPS6_mH" ></a-entity>`
}