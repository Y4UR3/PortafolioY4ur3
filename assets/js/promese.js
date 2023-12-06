document.addEventListener('DOMContentLoaded', function () {

    const conteinerProjects = document.getElementById('container_projects');
    const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'
  
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')
    const articleUl = document.querySelector('.article__ul')
  
    const data = fetch(URL)
    // console.log(data);
  
    data
      .then((res) => res.json())
      .then((data) => {
  
        // console.log(data)
  
  
        data.forEach(element => {
  
          // console.log(element);
  
  
          conteinerProjects.innerHTML += `
          
          <li class='article__li'>
            <img src='${element.image}' alt='${element.title}' class='article__img'>
            <h3 data-en="${element.title}" data-es="${element.titulo}" class='article__h3'>${element.titulo}</h3>
            <p data-en="${element.description}" data-es="${element.descripcion}">${element.descripcion}</p>
            <h4 data-en="${element.tecnologias}" data-es="${element.tecnologias}" class='article__h4'>${element.tecnologias}</h4>
          </li>
          `
        });
  
        let index = 0
  
        left.addEventListener('click', function () {
          // window.alert('left')
          index = (index > 0) ? --index : data.length - 1
          articleUl.style.transform = `translateX(-${index * 100}%)`
        })
  
        right.addEventListener('click', function () {
          //window.alert('rigth')
          index = (index < data.length - 1) ? ++index : 0
          articleUl.style.transform = `translateX(-${index * 100}%)`
        })
  
  
  
  
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Termine de hacer la peticion');
      })
  
  })