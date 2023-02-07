
function convertLength(inputValue){
    const length = document.getElementById('length-display')
    let ftToMeter = (inputValue/3.281).toFixed(2)
    let meterToFt = (inputValue * 3.281).toFixed(2)
    length.textContent = `${inputValue} m = ${meterToFt} ft | ${inputValue} ft = ${ftToMeter} m`
}

function convertVolume(inputValue){
    const volume = document.getElementById('volume-display')
    let lToGal = (inputValue*.0264).toFixed(2)
    let galToL = (inputValue/.0264).toFixed(2)
    volume.textContent = `${inputValue} L = ${lToGal} gal | ${inputValue} gal = ${galToL} L`
}

function convertMass(inputValue){
    const mass = document.getElementById('mass-display')
    let kgToLb = (inputValue*2.204).toFixed(2)
    let lbToKg = (inputValue/2.204).toFixed(2)
    mass.textContent = `${inputValue} kg = ${kgToLb} lb | ${inputValue} lb = ${lbToKg} kg`
}



document.getElementById('conversion').addEventListener('click', () => {
    let value = document.getElementById('input').value
    if (!isNaN(value)){
        convertLength(value)
        convertVolume(value)
        convertMass(value)
    } else {
        console.log('please enter a number')
    }
})