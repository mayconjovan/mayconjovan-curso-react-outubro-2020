/* eslint-disable import/no-anonymous-default-export */
import React from 'react'


export default (params) => {
    return(
        <div>
            <span>{params.nome} </span>
            <span><strong>{params.idade} </strong></span>
            <span>{params.nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}