import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search';
import { Footer } from './components/footer';
import axios from 'axios';

function App() {
  const [dark, setDark] = useState(false)
  
  return (
    <>
      <div className={dark ? 'dark' : ''}>
        <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
          <Navbar dark={dark} setDark={setDark}/>
          <h1 className="text-9xl m-40  font-bold text-center">Google</h1>
          <Search/>
          <Footer/>
        </div>
      </div>
    </>
  )
}
 
export default App
