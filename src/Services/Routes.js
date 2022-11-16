import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Bio from '../Pages/Bio'
import Projetos from '../Pages/Projetos'
import Social from '../Pages/Social'
import Contato from '../Pages/Contato'

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bio' element={<Bio/>}/>
                <Route path='/projetos' element={<Projetos/>}/>
                <Route path='/social' element={<Social/>}/>
                <Route path='/contato' element={<Contato/>}/>
            </Routes>
        </Router>
    );
}