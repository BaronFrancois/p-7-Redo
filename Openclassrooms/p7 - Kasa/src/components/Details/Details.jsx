import React, {useState} from 'react'
import data from '../data'


const Details = (props) => {

    let str = JSON.stringify(data[props.detailsIndex])
    return(
        <div>
            <img src = {data[props.detailsIndex].cover} />
           {str}
        </div>
    )
}

export default Details