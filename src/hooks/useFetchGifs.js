import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading:true
    });

    // para solo hacer la llamada http una sola vez
    useEffect(() => {
        getGifs( category )
            .then( img =>{
             setState({
                    data: img,
                    loading:false
                })
            })

    },[category])

   

    return state; // {data:[], loading:true}
}
