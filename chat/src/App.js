import './App.css'
import {Profile} from './components/profile/Profile'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'


function App () {
  return (
    <div className='app_wrapper'>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  )
}

export default App
