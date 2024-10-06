import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/dialogs/dialogs'
import { Layout } from './components/Layout/Layout'

function App () {
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
