import './App.css'
import Login from './components/login'

function App() {

  return (
    <div className="relative">
    <div className=" absolute inset-0 bg-cover bg-center bg-[url('/src/assets/bg-img.png')] h-[100vh] w-full">
    </div>
    <div className="absolute inset-0 bg-black opacity-50 h-[100vh] w-full">
    </div>
    <div className="relative z-10 ">
      <div className=" static pt-10 sm:w-[50%] sm:absolute sm:mt-[216px] sm:ml-[300px] sm:p-0">
         <div className="flex justify-center mb-8 sm:mb-[152px] sm:justify-normal">
        <img src="./src/assets/logo.png" alt="" />
      </div>
      <div className='flex justify-center flex-col items-center sm:block'>
        <h1 className="text-[25px] font-[700] pb-4 sm:text-[40px] text-white">Building the Future...</h1>
        <p className= 'text-center text-white sm:w-[43%] sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      </div>
      <Login/>
      </div>
</div>


)}

export default App
