import { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const inputChange = (event) => {
        //EnputChange recive como parámetro el evento del Prop 'onChange'
        //Podemos buscar dentro del evento el valor actualizado y renderizarlo en el input
        setInputValue(event.target.value)
    }

    const submitChange = (event) => {
        const input = inputValue.trim();
        //Por el comportamiento preestablecido de un form, se va a recargar la pagina al enviarlo/presionar enter
        //Una manera de evitar que el submit del form recargue la página es 'preventDefault()'
        event.preventDefault();
        //A continuación me aseguro de que el input no pueda recibir un valor menor a 1 caracter
        if (input.length < 1) return;
        //A continuacion le paso como parámetro a onAddCategory el valor del input
        onAddCategory(input);
        setInputValue('');
    }


    return (
        <form onSubmit={ (event) => submitChange(event)}>
        <input
            type='text'
            placeholder='Buscar un tema...'
            value= {inputValue}
            onChange={(event) => inputChange(event)}
        />
        </form>
    )
}

// Las expresiones:
//  onChange={(event) => inputChange(event)}
// y
//  onChange={inputChange}
// son equivalentes.
// En este ejercicio se usa la primera para entender que 'inputChange' está devolviendo el evento.
