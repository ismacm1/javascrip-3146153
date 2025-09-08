



const titulComic = document.queryquerySelector('titulo-Comic')
const descripcionComic = document.querySelector('descripcion-Comic')
const imagenComic = document.querySelector('imagen-Comic')
const listaCaps = document.querySelector('lista-Caps')

//mostrar informacion de la base de datos en la pagina 

tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.descripcion

//imprimir informacion del capitulo

comic.capituos.forEach(cap => {
    const li = document.createElement('li')
    li.innerHTML = 
    `<img src="" alt="">
    <p>Descripcion</p>`
    
 listaCaps.appendChild(li)
});