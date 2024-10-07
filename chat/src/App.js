import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/dialogs/dialogs'
import { Layout } from './components/Layout/Layout'
import { Message } from './components/dialogs/Messages/message'

function App () {
    let messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'},
        {id: '5', message: 'Yo'}
    ]
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/' index element={<Profile />}/>
      <Route path='/dialogs/*' element={<Dialogs />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
