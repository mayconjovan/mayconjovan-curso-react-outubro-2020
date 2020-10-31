/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (params) => {
    const isPar = params.numero % 2 === 0
    return (
        <div>
            {isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}
