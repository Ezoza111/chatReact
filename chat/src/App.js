import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/dialogs/dialogs'
import { Layout } from './components/Layout/Layout'

function App () {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
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
      <Route path='/dialogs/*' element={<Dialogs dialogs = {dialogs} messageArr={messages}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
