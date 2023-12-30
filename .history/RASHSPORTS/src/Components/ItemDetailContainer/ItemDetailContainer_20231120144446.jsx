import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect ( () => {
        getProductById("34")
        .then(resp => setItem(resp))
        .catch(error => console.log(error));

    }, [item])
    return (
        <>
        {item && <ItemDetail {...item} />}
        </>
    )
}