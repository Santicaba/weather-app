let urlBase = 'https://api.openweathermap.org/data/2.5/weather?'
let apiKey = '0052c6d9a6fae5a320bddbd33992952c';
let ciudad = ''
let difKelvin = 273.15
    
document.getElementById('botonBusqueda').addEventListener('click',()=>{

    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }

});


function fetchDatosClima(ciudad) {
    fetch(`${urlBase}q=${ciudad}&appid=${apiKey}`)
    .then(data =>data.json())
    .then(data =>mostrarDatosClima(data))
}


function mostrarDatosClima (data){

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    let ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadadNombre}${paisNombre}`;

    let temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin )} ºC`;

    let humedadInfo = document.createElement('p');
    humedadInfo.textContent = `Humedad: ${humedad}`; 

    let iconoInfo = document.createElement('img');
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`;

    let descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);
}



























// function mostrarDatosDelClima(data) {
//     const divDatosClima = document.getElementById('ciudadEntrada')
//     divDatosClima.innerHTML = ''

//     const ciudadadNombre = data.name
//     const paisNombre = data.sys.country
//     const temperatura = data.main.temp
//     const humedad = data.main.humidity
//     const descripcion = data.weather[0].description
//     const icono = data.weather[0].icon

//     let ciudadTitulo = document.createElement('h2');
//     ciudadTitulo.textContent = `${ciudadadNombre}${paisNombre}`;

//     let temperaturaInfo = document.createElement('p')
//     temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)} ºC`;

//     let humedadInfo = document.createElement('p');
//     humedadInfo.textContent = `Humedad: ${humedad}`; 

//     let iconoInfo = document.createElement('img');
//     iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`;

//     let descripcionInfo = document.createElement('p');
//     descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

//     divDatosClima.appendChild(ciudadTitulo);
//     divDatosClima.appendChild(temperaturaInfo);
//     divDatosClima.appendChild(humedadInfo);
//     divDatosClima.appendChild(iconoInfo);
// }

