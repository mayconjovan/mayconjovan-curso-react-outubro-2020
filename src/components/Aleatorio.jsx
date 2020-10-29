/*
solução feita por mim
export default (params) => {

    console.log(params)
    return Math.random(params.min, params.max);
}*/

import React from 'react'
export default function Aleatorio(props) {
    //const min = props.min;
    //const max = props.max;
    const { min, max } = props;
    //const [a, b] = [1, 2]
    //const {c, d, x } = {c: 12, d:45, x:'teste'}

    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor minimo: </strong>{min}</p>
            <p><strong>Valor maximo: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
            {/*<p>{c} + {d} + {x} </p>
            <p>{a} + {b}</p>*/}
        </div>
    )
}
