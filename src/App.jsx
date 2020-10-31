import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuIMpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className='Cards'>

                <Card titulo="#08 - Repetição Condicional" color='#982395'>
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{nome: 'Fernando'}} />
                    <UsuarioInfo usuario={{email: 'fernando@gmail.com'}} />
                </Card>
                <Card titulo="#07 - Repetição Desafio" color='#3A9AD9'>
                    <TabelaProdutos />
                </Card>
                <Card titulo="#06 - Repetição" color='#FF4C65'>
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 - Componente com Filhos" color='#00C8F8'>
                    <Familia sobrenome='Silva' >
                        <FamiliaMembro nome='Pedro' />
                        <FamiliaMembro nome='Ana' />
                        <FamiliaMembro nome='Gustavo' />
                    </Familia>
                </Card>
                <Card titulo='#04 - Desafio Aleatório' color='#FA6900'>
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo='#03 - Fragmento' color='#E94C6F'>
                    <Fragmento />
                </Card>

                <Card titulo='#02 - Com Parametros' color='#E8B71A'>
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>

                <Card titulo='#01 - Primeiro Component' color='#588C73'>
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}

