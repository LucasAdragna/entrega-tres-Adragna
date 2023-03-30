let catalogo=[]; //array donde guardo lo autos

const inputNombre= document.getElementById("NombreAuto"),
    inputTraccíon= document.getElementById("TracciónAuto"),
    inputKlm= document.getElementById("KilometrosAuto"),
    inputImg= document.getElementById("URLAuto"),
    consecionaria= document.getElementById("container");

//las caragteristicas de los autos 

    class Auto{

    constructor(nombre,tracción,kilometros,info,cover,id){
        
     this.nombre=nombre;
     this.tracción=tracción;
     this.kilometros=parseInt(kilometros);
     this.info=info;
     this.id= id;

  //agregando imagen en caso que no pongan

   if(cover==""){
    this.cover= "https://static.motor.es/fotos-noticias/2023/02/ford-mustang-dark-horse-202392938-1676050292_1.jpg";
 }else{
    this.cover=cover;
   }
  }

asignarId(array){
    this.id=array.lenght;
}
asignarCover(sourceURL){
    this.cover=sourceURL;
}}

  //la creación de los vehiculos que recibamos 

    function guardarAuto(catalogo){    
    
const libreta= new Auto(inputNombre.value, inputTraccíon.value, inputKlm.value,inputInfo.value,inputImg.value)

catalogo.push(libreta);
libreta.asignarId(catalogo);
    }

//guardando en storage y convirtiendo en string con JSON

guardarEnStorage=(catalogo)=>{
localStorage.setItem("catalogoAutos",JSON.stringify(catalogo));}
 
//Recibimos los datos, con forEach los recorremos asignado como un elemento
//y los mostramos agregando Html.
 
  const mostrar=(datos)=>{

    datos.forEach(elemento =>{
      
      const consecionariaAut= document.createElement("article");

      consecionariaAut.setAttribute("id","tarjetas");
      consecionariaAut.innerHTML= `
      <img class="tarjeta-img" src="${elemento.cover}" alt="${elemento.inputNombre}" style="width:400px">
      <div class="contenido" id="${elemento.id}">
      <h5 class="nombre">${elemento.nombre}"</h5>
      <h5 class="tracción">${elemento.tracción}</h5>
      <h5 class="kilometros">${elemento.kilometros}</h5>
      <p class="información">${elemento.info}</p>
      </div>`;

        consecionaria.appendChild(consecionariaAut);
    })};

 let inputInfo= document.getElementById("InfoAuto");

let enviarBtn= document.getElementById("btn-enviar");

//con btn generamos la función, con el evento, bloqueo la gestión de click predeterminado.
//gguardamos en catalogo, generamos las tarjetas y las mostramos.
  
enviarBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  guardarAuto(catalogo)
  guardarEnStorage(catalogo)
  mostrar(catalogo,consecionaria)
});
