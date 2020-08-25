console.log('Client side javascript file is loaded!')

/* fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=Lagos').then((response) => {
    response.json().then((data) => {
        if(data.error){
            return console.log('error is ' + error)
        }
        console.log(data)
    })
}) */

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errror = document.querySelector('#err')
const datta = document.querySelector('#dat')



weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value

    datta.textContent = 'Loading Data' 

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
               return errror.textContent = error            
            }
            return datta.textContent = data.data +'Results for ' + data.address
        })
    })
})