console.log("first template");
const setHoraActual = () => {
    let retorno;

    myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;

    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;

    retorno = hours+ ":" +minutes+ ":" +seconds;

    return retorno;
};

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

var localStorage = window.localStorage;

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
        },
        {
            emisor : "Luis Miguel",
            correoEmisor : "luism@gmail.com",
            asunto : "Ah simon",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "03:00am",
            leido : false,
            destacado : false,
            spam : false,
        }
    ];

    if (localStorage.getItem('recibidos') == null) {
        localStorage.setItem('recibidos',JSON.stringify(recibidos));
    } else {
        console.log('local storage full');
    }
};

setMensajesRecibidos();

const setMensajesEnviados  = () => {
    let enviados = [
        {
            receptor : "Juan Perez",
            emailReceptor : "jperez@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "10:00am"
        },
        {
            receptor : "Victor Amaya",
            emailReceptor : "amaya@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "08:00am"
        },
        {
            receptor : "Euclidiano Acosta",
            emailReceptor : "eucli@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "11:00am"
        },
        {
            receptor : "Piter Table",
            emailReceptor : "pedromeza@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "07:00am"
        },
        {
            receptor : "Javier Matute",
            emailReceptor : "jmatute@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "15:00pm"
        },
        {
            receptor : "Luis Miguel",
            emailReceptor : "luism@gmail.com",
            asunto : "Tarea primer parcial",
            mensaje : "Lorem ipsum dolor sit amet, consectetur adipisicing",
            hora : "03:00am"
        }
    ];

    if (localStorage.getItem('enviados') == null) {
        localStorage.setItem('enviados',JSON.stringify(enviados));
    } else {
        console.log('local storage full');
    }
};

setMensajesEnviados();

const getReceivedEmails = () => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    let mails = dataLocalStorage;

    document.getElementById('tab-recibidos').innerHTML = '';
    mails.forEach((mail,index) => {

        switch (mail.spam) {
            case false:
                if (mail.destacado && mail.leido) {
                    document.getElementById('tab-recibidos').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i>${mail.emisor}</td>
                            <td>${mail.asunto} - ${mail.mensaje.substring(0,20)}</t
                            console.log();d>
                            <td class="hora-item">${mail.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensaje-leido" onclick="mensajeLeido(${index})"></i></td>
                        </tr>   
                    `; 
                } else if (mail.destacado && mail.leido == false) {
                    document.getElementById('tab-recibidos').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.emisor}</strong></td>
                            <td><strong>${mail.asunto}</strong> - ${mail.mensaje.substring(0,20)}</td>
                            <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensaje-leido" onclick="mensajeLeido(${index})"></i></td>
                        </tr>   
                    `; 
                }else if (mail.destacado == false && mail.leido) {
                    document.getElementById('tab-recibidos').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i>${mail.emisor}</td>
                            <td>${mail.asunto} - ${mail.mensaje.substring(0,20)}</td>
                            <td class="hora-item">${mail.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensaje-leido" onclick="mensajeLeido(${index})"></i></td>
                        </tr>   
                    `;
                }else if (mail.destacado == false && mail.leido == false) {
                    document.getElementById('tab-recibidos').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.emisor}</strong></td>
                            <td><strong>${mail.asunto}</strong> - ${mail.mensaje.substring(0,20)}</td>
                            <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensaje-leido" onclick="mensajeLeido(${index})"></i></td>
                        </tr>   
                    `;
                }
                
                break;
            default:
                break;
        }
    });
};

const getReceivedEmailsSpam = () => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    let mails = dataLocalStorage;
    document.getElementById('tab-recibidos').innerHTML = '';

    mails.forEach((mail, index) => {

        switch (mail.spam) {
            case true:
                document.getElementById('tab-recibidos').innerHTML += `
                    <tr>
                        <td><i class="far fa-star btns-nav items-table"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.emisor}</strong></td>
                        <td><strong>${mail.asunto}</strong> - ${mail.mensaje.substring(0,20)}</td>
                        <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i></td>
                    </tr>   
                `;
                break;
        
            default:
                break;
        }
    });
};


const setDestacado = (indice) => {
    console.log('setDestacado');
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    let mails = dataLocalStorage;

    if (mails[indice].destacado) {
        mails[indice].destacado = false;
    }else if (mails[indice].destacado == false) {
        mails[indice].destacado = true;
    }
    
    localStorage.setItem('recibidos',JSON.stringify(mails));
    //location.reload();

    getReceivedEmails();

};

const setSpam = (indice) => {
    console.log('set Spam');
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    let mails = dataLocalStorage;

    if (mails[indice].spam) {
        mails[indice].spam = false;
    }else if (mails[indice].spam == false) {
        mails[indice].spam = true;
    }
    
    localStorage.setItem('recibidos',JSON.stringify(mails));
    //location.reload();

    getReceivedEmailsSpam();
};

const deleteItem = (indice) => {
    console.log('delete item');

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    let mails = dataLocalStorage;

    mails.splice(indice,1);
    
    localStorage.setItem('recibidos',JSON.stringify(mails));

    getReceivedEmails();
};


const getSendsEmails = () => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('enviados'));

    let emails = dataLocalStorage;
    document.getElementById('tab-recibidos').innerHTML = '';

    emails.forEach((email,index) => {
        document.getElementById('tab-recibidos').innerHTML += `
            <tr>
                <td>Para: ${email.receptor}</td>
                <td>${email.asunto} - ${email.mensaje.substring(0,20)}</td>
                <td class="hora-item">${email.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteEnviado(${index})"></i></td>
            </tr>  
        `;
    });
};


const deleteEnviado = (indice) => {
    console.log('borrando enviado',indice);

    let dataLocalStorage = JSON.parse(localStorage.getItem('enviados'));

    let mails = dataLocalStorage;

    mails.splice(indice,1);
    
    localStorage.setItem('enviados',JSON.stringify(mails));

    getSendsEmails();

};


const getMensajesDestacados = () => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    let mails = dataLocalStorage;

    document.getElementById('tab-recibidos').innerHTML = '';
    mails.forEach((mail,index) => {

        switch (mail.destacado) {
            case true:
                if (mail.destacado && mail.leido) {
                    document.getElementById('tab-recibidos').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i>${mail.emisor}</td>
                            <td>${mail.asunto} - ${mail.mensaje.substring(0,20)}</t
                            console.log();d>
                            <td class="hora-item">${mail.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensaje-leido" onclick="mensajeLeido(${index})"></i></td>
                        </tr>   
                    `; 
                } else if (mail.destacado && mail.leido == false) {
                    document.getElementById('tab-recibidos').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.emisor}</strong></td>
                            <td><strong>${mail.asunto}</strong> - ${mail.mensaje.substring(0,20)}</td>
                            <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensaje-leido" onclick="mensajeLeido(${index})"></i></td>
                        </tr>   
                    `; 
                }                
                break;
            default:
                break;
        }
    });
};


const getPapelera = () => {
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    let emails = dataLocalStorage;
    document.getElementById('tab-recibidos').innerHTML = '';

    emails.forEach((email,index) => {
        document.getElementById('tab-recibidos').innerHTML += `
            <tr>
                <td>${email.emisor}</td>
                <td>${email.asunto} - ${email.mensaje.substring(0,20)}</td>
                <td class="hora-item">${email.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deletePapelera(${index})"></i></td>
            </tr>  
        `;
    });
};

const deletePapelera = () => {
    console.log('mensaje borrado de la papelera');
};


const enviarMensaje = () => {
    const mensaje = {
        receptor : document.getElementById('inputDe').value,
        emailReceptor : document.getElementById('inputPara').value,
        asunto :document.getElementById('inputAsunto').value,
        mensaje : document.getElementById('inputMensaje').value,
        hora: setHoraActual()
    }

    console.log(mensaje);
    
    let data = JSON.parse(localStorage.getItem('enviados'));

    data.push(mensaje);
    localStorage.setItem('enviados', JSON.stringify(data));
    showSectionRedactar();
    getSendsEmails();
};

const mensajeLeido = (indice) => {
    
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidos'));

    if (dataLocalStorage[indice].leido) {
        dataLocalStorage[indice].leido = false;
    }else if (dataLocalStorage[indice].leido == false) {
        dataLocalStorage[indice].leido = true;
    } 

    localStorage.setItem('recibidos',JSON.stringify(dataLocalStorage));
    getReceivedEmails();

};