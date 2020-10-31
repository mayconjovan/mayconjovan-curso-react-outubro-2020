/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import If from './if'

export default (params) => {
    const usuario = params.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigao</strong>! 
            </If>
        </div>
    )
}
