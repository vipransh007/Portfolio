import './App.css'
import SplitText from './components/SplitText/SplitText.jsx'
import GhostCursor from './components/GhostCursor/GhostCursor.jsx'
import { useState, useCallback } from 'react'; 
import Navbar from './Navbar/Navbar.jsx';
import PhotoTag from './phototag/PhotoTag.jsx';
import About from './about/About.jsx';
import Skills from './skills/Skills.jsx';
import Projects from './projects/Projects.jsx';

function App() {
  const [showSecondText, setShowSecondText] = useState(false);
  const handleFirstTextComplete = useCallback(() => {
    setTimeout(() => {
      setShowSecondText(true);
    }, 50); 
  }, []);

  return (
    <div className='bg-black w-screen min-h-screen relative overflow-x-hidden'> 
      
      <Navbar />
      
      <div className='w-full h-screen relative flex justify-center items-center'>
        
        <GhostCursor className="absolute top-0 left-0 w-full h-full z-50"/> 
        
        <div className='relative z-10 flex flex-row items-center justify-center max-w-6xl mx-auto p-10'>
          
          <div className='flex flex-col items-start w-3/5 pr-10'> 
            
            <div className=''>
              <SplitText
                text="Hi There🙏, Welcome to MY Portfolio!"
                className="text-7xl font-extrabold text-blue-200 mix-blend-difference mb-4" 
                delay={100}
                onLetterAnimationComplete={handleFirstTextComplete}
              />
            </div>
          </div>
          
          <div className='w-2/5 flex justify-end'>
            <PhotoTag />
          </div>
          
        </div> 
      </div>
      
      <div className='w-full min-h-screen bg-black text-white p-20'>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>

    </div>
  );
}

export default App;