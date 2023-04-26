import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs (category);

    return (
        <>
            <h4>{category}</h4>
            {/*A continuación uso la compuerta lógica 'AND' para que se renderice el H5 solamente cuando isLoading sea true */}
            {                
                isLoading && <h5>Loading...</h5>
            }
            {/* Cuando quiero darle una clase a un HTML tag, no puedo usar la palabra reservada 'class' */}
            {/* En su lugar debo usar className, dado que 'class' está reservado para crear clases en JS */}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                        key={image.id}
                        url={image.url}
                        title={image.title}                        
                        />
                        
                    ))
                    
                }
            </div>
            {/* Existe otra manera de enviar TODAS las props al componente mediante el operador spread  : */}
            {/* {...image} */}
            {/* De esta manera, envío todas las props sin necesidad de llamarlas individualmente */}
        </>
    )
}
