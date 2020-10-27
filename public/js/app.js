console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errror = document.querySelector('#err')
const datta = document.querySelector('#dat')
const datta1 = document.querySelector('#dat1')
const datta2 = document.querySelector('#dat2')
const datta3 = document.querySelector('#dat3')
const datta4 = document.querySelector('#dat4')
const datta5 = document.querySelector('#dat5')
const datta6 = document.querySelector('#dat6')



weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value

    datta.textContent = 'Loading Data';
    datta1.textContent = '';
    datta2.textContent = '';
    datta3.textContent = '';
    datta4.textContent = '';
    datta5.textContent = '';
    datta6.textContent = '';

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
               return errror.textContent = error            
            }

            /* return datta.textContent = data.data.temp */
                        
            datta.textContent = data.data.temp;
            datta1.textContent = data.data.srise;
            datta2.textContent = data.data.sset;
            datta3.textContent = data.data.weather;
            datta4.textContent = data.data.downpour;
            datta5.textContent = data.data.rem 
            datta6.textContent = 'Friendly reminder, these are the results for ' + data.address + '.'
            
            return { datta, datta1, datta2, datta3, datta4, datta5, datta6 }
        })
    })
})