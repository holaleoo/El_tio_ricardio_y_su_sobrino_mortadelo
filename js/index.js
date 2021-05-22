const mostrarPersonaje = function(){
    let personaje = this.personaje;
    const molde = document.querySelector(".molde-detalle").cloneNode(true);
    molde.querySelector(".nombre-sa-personaje").innerText = personaje.name;
    molde.querySelector(".imagen-sa-personaje").scr = personaje.image;
    molde.querySelector(".estado-sa-personaje").innerText = personaje.status;
    swal.fire({
        title:personaje.name,
        html: molde.innerHTML
    });
};
const cargarpersonajes = async function (){
    //llamar a la api
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    let personajes = res.data.results;
    const contenedor = document.querySelector("#contenedor-personajes");
    const molde = document.querySelector(".molde-personaje");
    personajes.forEach(p => {

        let copia = molde.cloneNode(true);
        copia.querySelector(".nombre-personaje").innerText = p.name;
        copia.querySelector(".imagen-personaje").src = p.image;
        copia.querySelector(".btn-ver-personaje").personaje = p;
        copia.querySelector(".btn-ver-personaje").addEventListener("click",mostrarPersonaje);
        contenedor.appendChild(copia);
    });

};


document.addEventListener("DOMContentLoaded", ()=>{
    //todo lo que ponga aqui se cargara cuando cargue la pagina
    cargarpersonajes();
});