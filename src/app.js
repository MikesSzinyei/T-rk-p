/*
* File: app.js
* Author: Szinyei Mikes
* Copyright: 2023, Szinyei Mikes
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/MikesSzinyei/
* Licenc: GNU GPL
*/

const radiusInput = document.querySelector('#radius')
const heightInput = document.querySelector('#height')
const areaInput = document.querySelector('#area')
const calcButton = document.querySelector('#calcButton')


calcButton.addEventListener('click',()=>{
    console.log('Terület')
    const radius =Number(radiusInput.value);
    const height= Number(heightInput.value);

    let area = (1./3) * Math.pow(radius, 2) * Math.PI * height;
    areaInput.value=area;
    console.log(area)
});