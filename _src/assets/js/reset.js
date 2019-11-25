"use strict";
const btnDelete = document.querySelector(".js-button--delete");
const handleReset = function() {
  console.log("escuchar click");
  deleteData();
  paintCardAfterReset();
};
//funcion para borra los datos del form

const deleteData = function() {
  document.getElementById("js-form").reset();
  console.log("borrar datos");
};

//Creamos un objeto que incluye todos los campos de card-result

const cardFieldsObject = {
  name: "Nombre Apellido",
  job: "Front-end developer",
  // picture: "",
  phone: "",
  email: ""
};

function paintCardAfterReset() {
  cardNameEle.innerHTML = cardFieldsObject.name;
  cardJobEle.innerHTML = cardFieldsObject.job;
  // cardEmailEle.innerHTML.href = cardFieldsObject.email;

  console.log(cardEmailEle);
}

//funcion restaurar valores de la tarjeta

//funcion para restablecer color por defecto

btnDelete.addEventListener("click", handleReset);
