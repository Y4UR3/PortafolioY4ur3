document.addEventListener('DOMContentLoaded', function(){
     

    const left = document.querySelector('#left')
    const right = document.querySelector('#right')
    const articleUl = document.querySelector('.article__ul')

    let index = 0

    left.addEventListener('click', function(){
       // window.alert('left')
       index= (index > 0)? --index : 3 - 1
       articleUl.style.transform = ` translate(-${index * 100}%)` 
    })


    right.addEventListener('click', function(){
        //window.alert('right')  
        index= (index < 3 - 1)? ++index : 0
        articleUl.style.transform = ` translate(-${index * 100}%)` 
    })
     
  })