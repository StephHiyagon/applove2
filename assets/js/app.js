function crearProducto(event){
  var panel=document.getElementById('misImg');
  var fragment=document.createDocumentFragment();
  var tamano=10;
  for(var i=1;i<tamano;i++){
    var div=document.createElement('div');
    div.className="work-div";
    var img=document.createElement('img');
    img.className="myImg myWork";
    img.src="assets/images/img-"+ i + ".jpg";
    img.alt="Proyecto"+i;
    img.width="300";
    var span=document.createElement('span');
    span.className="span-name";
    span.innerHTML="Nombre del Producto";

    div.appendChild(img);
    div.appendChild(span);
    fragment.appendChild(div);
    }
  panel.appendChild(fragment);
}

var images=document.getElementById('misImg');
var span = document.getElementById("close");
var modal = document.getElementById('myModal');

//images.onclick=function captura(e){
images.addEventListener('click',function (e){
  e.preventDefault();
  // colocar condicional para solo seleccionar la img
  if(e.target.tagName == "IMG"){
    // console.log(images);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display="block";
    modalImg.src = e.target.src;
    captionText.innerHTML = e.target.alt;
  }
});

function cerrar (event){
  event.preventDefault();
  // console.log(event.target);
    modal.style.display="none";
  }

window.addEventListener('load', crearProducto);
span.addEventListener('click',cerrar);

// función modal es génerica, falta obtener el id de forma génerica
// var img1 = document.getElementById("myImg1");
// var img2 = document.getElementById('myImg2');
// var img3= document.getElementById('myImg3');
// var img4= document.getElementById('myImg4');
// var img5= document.getElementById('myImg5');
// var img6= document.getElementById('myImg6');
// var img7= document.getElementById('myImg7');
// var img8= document.getElementById('myImg8');
// var img9= document.getElementById('myImg9');
//
// function modal(event){
//   var modal = document.getElementById('myModal');
//   var modalImg = document.getElementById("img01");
//   var captionText = document.getElementById("caption");
//   var span = document.getElementById("close");
//   modal.style.display="block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
//   function cerrar(event){
//     modal.style.display="none";
//   }
//   span.addEventListener('click',cerrar);
// }
//
// img1.addEventListener('click', modal);
// img2.addEventListener('click',modal);
// img3.addEventListener('click',modal);
// img4.addEventListener('click',modal);
// img5.addEventListener('click',modal);
// img6.addEventListener('click',modal);
// img7.addEventListener('click',modal);
// img8.addEventListener('click',modal);
// img9.addEventListener('click',modal);
