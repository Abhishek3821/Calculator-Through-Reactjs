import React, { useState } from 'react'
import './App.css'

const Ui = () => {

    const [input,setInput]=useState('');
    
    const calculateresult=(input)=>{        

        try{
            const operators=['+','-','*','/'];
            let operator=null;

            for(let i=0;i<input.lenght;i++){
                if(operators.includes(input[i])){
                    operator=input[i];
                    break;
                }
            }

            if(!operator){
                setInput(parseFloat(input).toString());
                return;
            }

            const[operand1,operand2]=input.split(operator).map(parseFloat);

            let results;

            switch(operator){
                case '+':
                    results=operand1+ operand2;
                    break;
                case '-':
                    results=operand1- operand2;
                    break;
                case '*':
                    results=operand1* operand2;
                    break;
                case '/':
                    results=operand1/ operand2;
                    break;
                    default:
                        throw new Error('INVALID OPERATOR ')
            }
            setInput(results.toString());
        }

        catch(error){
            setInput('ERROR');

        }
    }

    const handlebutton=(value)=>{
        if(value==='c'){
            setInput('');
        }
        else if(value === '<'){
           setInput(input.slice(0,-1)); 
        }
        else if(value==='='){
            calculateresult(input);
            
            // try{
            //     setInput(eval(input).toString());
            // }
            // catch(error){
            //     setInput('ERROR')
            // }
        }
        else{
            setInput((preValue)=>preValue+value)
        }
    }

  return (
    <div className="container">
        <div className="calc">
            <h1 id='input'>{input}</h1>
            <div>
                <button onClick={()=>handlebutton('c')}>C</button>
                <button onClick={()=>handlebutton('<')}>&lt;</button>
                <button onClick={()=>handlebutton('%')}>%</button>
                <button onClick={()=>handlebutton('/')}>/</button>
            </div>
            <div>
                <button onClick={()=>handlebutton('7')}>7</button>
                <button onClick={()=>handlebutton('8')}>8</button>
                <button onClick={()=>handlebutton('9')}>9</button>
                <button onClick={()=>handlebutton('*')}>*</button>
            </div>
            <div>
                <button onClick={()=>handlebutton('4')}>4</button>
                <button onClick={()=>handlebutton('5')}>5</button>
                <button onClick={()=>handlebutton('6')}>6</button>
                <button onClick={()=>handlebutton('-')}>-</button>
            </div>
            <div>
                <button onClick={()=>handlebutton('1')}>1</button>
                <button onClick={()=>handlebutton('2')}>2</button>
                <button onClick={()=>handlebutton('3')}>3</button>
                <button onClick={()=>handlebutton('+')}>+</button>
            </div>
            <div>
                <button onClick={()=>handlebutton('0')}>0</button>
                <button onClick={()=>handlebutton('00')}>00</button>
                <button onClick={()=>handlebutton('.')}>.</button>
                <button onClick={()=>handlebutton('=')}>=</button>
            </div>
        </div>
    </div>
  )
}
export default Ui;
