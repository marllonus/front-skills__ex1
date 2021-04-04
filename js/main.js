//add swipe by js on slider

const slider = document.querySelector('.slide');
if (slider) {
    document.addEventListener('drag', (ev)=>{
        console.log(ev);
    }, false);
}