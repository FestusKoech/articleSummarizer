import logo from '../assets/logo.svg' 

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'> 
    <nav className='flex justify-between items-center w-full mb-10 pt-3' >
      <img src={logo} alt='logo' className='w-28 object-contain'/> 
      <button 
      type='button' 
      onClick={() => 
      window.open('https://github.com/FestusKoech/articleSummarizer')}
      className='black_btn'
      >
        Github
        </button>

       
    </nav>
 
    </header> 
  


   
  )
}

export default Hero