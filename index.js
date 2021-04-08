function SaveAndHide(esconder){
  esconder.style.display = "none";

}



function show(){
  const mostrarContainerRules = document.getElementById("containerRules");
  mostrarContainerRules.style.display = "block";
  console.log (mostrarContainerRules);
} 

function init(){
  const buscarContainerRules = document.getElementById("containerRules");
  buscarContainerRules.style.display = "none";

}


init();