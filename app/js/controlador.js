console.log("first template");

const showSectionRedactar = () => {

    let redactarDiv = document.getElementById('div-redactar');

    if (redactarDiv.style.display === "none") {
        redactarDiv.style.display = "block";
        redactarDiv.style.position = "fixed";
        redactarDiv.style.bottom = "0";
        redactarDiv.style.right= "10px";
    } else {
        redactarDiv.style.display = "none";
        console.log('div oculto');
    }
};

showSectionRedactar();


const setMensajesRecibidos = () => {

    let recibidos = [
        {
            emisor : "Juan Perez",
            correoEmisor : "jperez@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "10:00am",
            leido : true,
            destacado : true,
            spam : false,
        },
        {
            emisor : "Victor Amaya",
            correoEmisor : "amaya@gmail.com",
            asunto : "Tarea favor imprimir",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "08:00am",
            leido : true,
            destacado : false,
            spam : false,
        },
        {
            emisor : "Euclidiano Acosta",
            correoEmisor : "eucli@gmail.com",
            asunto : "Archivos compra",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "11:00am",
            leido : false,
            destacado : true,
            spam : false,
        },
        {
            emisor : "Piter Table",
            correoEmisor : "pedromeza@gmail.com",
            asunto : "Aprendiendo Inglish",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "07:00am",
            leido : false,
            destacado : false,
            spam : false,
        },
        {
            emisor : "Javier Matute",
            correoEmisor : "jmatute@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "15:00pm",
            leido : false,
            destacado : false,
            spam : true,
        }
    ];

    let localStorage = window.localStorage;
    
    localStorage.setItem('recibidos',JSON.stringify(recibidos));
    console.log(recibidos);
};

setMensajesRecibidos();