document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const buttons = document.querySelectorAll('button')
    const display = document.querySelector('#display')
    let salida = ''
    const operadores = ['/', '*', '-', '+', '=']

    buttons.forEach(button => {
        button.addEventListener('click', calculator)
    })

    function calculator(e){
        const button = e.target.dataset.value
        console.log(button)

        if(button === 'AC'){
            salida = ''
        }
        else if(button === 'DEL'){
            salida = salida.toString().slice(0, -1)
        }
        else{
            if(button === '' && operadores.includes(button)) return

            salida+= button
        }

        if(button === '='){
            salida = eval(display.value)
        }

        display.value = salida
    }
})