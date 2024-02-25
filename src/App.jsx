import './App.css'
import Login from './components/login'

function App() {

  return (
    <div class="relative">
    <div class="absolute inset-0 bg-cover bg-center bg-[url('/src/assets/bg-img.png')] h-screen w-full">
    </div>
    <div class="absolute inset-0 bg-black opacity-50 h-screen w-full">
    </div>
    <div class="relative z-10">
      <div className="absolute mt-[216px] ml-[300px]">
         <div className="mb-[152px]">
        <img src="./src/assets/logo.png" alt="" />
      </div>
      <div className='slide'>
        <h1 className="font-[700] text-[40px] text-white">Building the Future...</h1>
        <p className='text-white w-[43%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      </div>
      <Login/>
      </div>
</div>


)}

export default App
