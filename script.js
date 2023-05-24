const listObjectImage = document.querySelectorAll('.object-image');

document.addEventListener('mousemove', (e)=>{
  listObjectImage.forEach( (value) =>{
    let mouvingValue = value.getAttribute('data-value');
    let x = (e.clientX * mouvingValue) / 100;
    let y = (e.clientY * mouvingValue) / 100;

    value.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })  
});

const mouveParalax = (e)=>{
  
}