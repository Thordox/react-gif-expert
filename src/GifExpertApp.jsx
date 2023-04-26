import { useState } from "react";
//Cuando hago referencia a una carpeta, si no especifico el nombre de un archivo entonces se interpreta que estoy apuntando al index que se encuentre en la carpeta
import {AddCategory, GifGrid} from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        //newCategory es el evento que viene del componente AddCategory

        //El siguiente if checkea si la nueva categoría está incluida en el array de categorías
        //Esta comprobación compara los strings exactos, por lo tanto 'One Punch' y 'one punch' son arrays distintos para react
        if (categories.includes(newCategory)) return;
        //Para 'crear' un nuevo array manteniendo el contenido del array original y agregando el elemento nuevo a la cadena puedo usar el operador spread '...'
        //El operador Spread copia el array original y permite hacer incerciones
        //Para que setCategories devuelva un array que pueda ser recorrido por .map() debe quedar contenido por []
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onAddCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
