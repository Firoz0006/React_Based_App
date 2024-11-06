import React, { useState } from 'react';
import '../App.css'; // Correct path to import App.css
import { create, all } from 'mathjs'; // Correct import for mathjs

// Create an instance of math
const math = create(all);

const Calculator = () => {
    const [data, setData] = useState("");

    const getValue = (event) => {
        setData(data.concat(event.target.value));
    };

    const calculation = () => {
        try {
            const result = math.evaluate(data); // Use the math instance here
            setData(result.toString());
        } catch (error) {
            console.error("Error evaluating expression:", error);
            setData("Error");
        }
    };

    const back = () => {
        setData(data.slice(0, -1));
    };

    const clear = () => {
        setData("");
    };
    return (
        <>
           <div className='container'>
               <div>
                   <input placeholder='0' value={data}/>
               </div>
               <br/>
   
               <button onClick={getValue} value="(">(</button>
               <button onClick={getValue} value=")">)</button>
               <button onClick={getValue} value="%">%</button>
               <button onClick={clear}  >AC</button>
   
               <button onClick={getValue} value="7">7</button>
               <button onClick={getValue} value="8">8</button>
               <button onClick={getValue} value="9">9</button>
               <button onClick={getValue} value="*">*</button>
   
               <button onClick={getValue} value="4">4</button>
               <button onClick={getValue} value="5">5</button>
               <button onClick={getValue} value="6">6</button>
               <button onClick={getValue} value="-">-</button>
   
               <button onClick={getValue} value="1">1</button>
               <button onClick={getValue} value="2">2</button>
               <button onClick={getValue} value="3">3</button>
               <button onClick={getValue} value="+">+</button>
   
               <button onClick={getValue} value="0">0</button>
               <button onClick={back}  >Back</button>
               <button onClick={calculation}  >=</button>
               <button onClick={getValue} value="/">/</button>
   
           </div>
        </>
    );
}

export default Calculator;
