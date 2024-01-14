import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Users/> }></Route>
      <Route path='/create' element={ <CreateUser/> }  ></Route>
      <Route path='/update/:id' element={<UpdateUser/>} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
