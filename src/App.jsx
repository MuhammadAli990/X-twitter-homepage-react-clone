import './App.css'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'

function App() {

  return (
    <div className='flex gap-8 max-w-[1100px] mx-auto p-2 max-h-screen'>
      <div className='flex gap-1 sm:gap-10'>
        <Sidebar1/>
        <Main/>
      </div>
      <Sidebar2/>
    </div>
  )
}

export default App
