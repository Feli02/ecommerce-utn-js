const gustosContainer = document.getElementById('gustos-container')

function createGusto(x){
    const gusto = document.createElement('li')
    gusto.textContent = `${x}`
    gusto.classList.add('gusto-agregado')
    gustosContainer.appendChild(gusto)
}

$('form#form-add-gusto').on('submit', (event) => {
    event.preventDefault()
    const myTarget = event.target.gusto.value
    createGusto(myTarget)
})