import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
        setisLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    //Cuando el nombre de la propiedad y su valor se llaman de la misma manera, puedo escribir una sola vez el nombre
    //Para fines de aprendizaje, dejo el objeto con propiedad y valor por separado
    return {
        images: images,
        isLoading: isLoading
    }
}
