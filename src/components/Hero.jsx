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
       View Source code on Github
        </button>
        </nav>
<h1 className='head_text'>
Summarize articles with <br className='max-md:hidden'/> <span className='orange_gradient'>OpenAI GPT-4</span>
</h1>
<h2 className='desc'>
<strong> Hello there,</strong> Now you can summarize articles using AI. This website harnesses the power of
  AI through RapidAPI. Simply paste the link down below, and click 
  <strong> Enter!</strong> <br />
  &#128515;

</h2>
       
  
 
    </header> 
  


   
  )
}

export default Hero
