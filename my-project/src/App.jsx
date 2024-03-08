import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './font.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div class="firstDiv" className=' bg-white p-5 flex flex-col  justify-center content-center gap-4 py-5 rounded-lg max-w-56 mx-auto flex-wrap'>
    <img className='w-56 block mx-auto rounded-lg' src="./images/image-qr-code.png" alt="" />
    <p class="titre">Improve your front-end skills by building projects</p>
    <p class="text"> Scan the QR code to visit Frontend
Mentor and take your coding skills to
the next level</p>
</div>


    </>
  )
}

export default App
