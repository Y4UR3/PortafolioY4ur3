//CAMBIO DE IDIOMA 
document.addEventListener('DOMContentLoaded', function () {   
    const elementsToTransalate = document.querySelectorAll('[data-es]')
    
    const changeMode = document.querySelector('#idiom')   

const body = document.querySelector('material-symbols-outlined')   
     
changeMode.addEventListener('click', function () {     
   ;      
    const currentMode = changeMode.textContent.trim()    
          
     if (currentMode === 'language_us') {       
        changeMode.textContent = 'language_spanish';
        for ( const phrase of elementsToTransalate){
            const translation = phrase.getAttribute('data-en');
            phrase.textContent = translation
        } 
        document.getElementById('Cv').href ="./assets/cv/cv_en.png"           
    } else {       
        changeMode.textContent = 'language_us';
        for ( const phrase of elementsToTransalate){
            const translation = phrase.getAttribute('data-es');
            phrase.textContent = translation
        }
        document.getElementById('Cv').href = "./assets/cv/cv_es.png"                     
    }    
})     
// console.log(changeMode); 
})


// CAMBIO DE MODO CLARO O OSCURO

const toggle = document.querySelector('.switch');
const body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('body--dark')
}





// Boton de menu 

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('#menu')
    const navMenu = document.querySelector('.nav--menu')
  
    menu.addEventListener('click', function () {
      navMenu.classList.toggle('nav--transalate')
    })
  })



 





  