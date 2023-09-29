import "./App.css";
import { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0)

  function incHandler(){     
    setCount(count+1)
  }
  

  function decHandler(){    

    setCount(count-1)
  }

  function resetHandler(){    
    
    setCount(0)
  }
  

  return (
    
    <div className="bg-[#344151] w-[100vw] h-[100vh] flex flex-col gap-10 items-center justify-center">

      <div className="text-[#0398d4] font-medium text-2xl">
        Increment & Decrement
      </div>

      <div className="flex bg-white gap-12">
        
        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> - </button>
        

        <div className="font-bold gap-12 text-5xl py-5">
          {count}
        </div>
            
    
        <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"> + </button>
      

      
      </div>
      
      <button onClick={resetHandler} className="px-5 py-2 bg-[#0398d4] text-white rounded-sm text-lg">Reset</button>
    </div>

  );
}

export default App;
