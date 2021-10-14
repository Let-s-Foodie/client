import { useState,useEffect } from 'react';

const useInput = (validateValue,values) => {
    const [enteredValue, setEnterValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let valueIsValid = validateValue(enteredValue);
   
    const hasError = !valueIsValid && isTouched;
   
    const valueChangeHandler = (event) => {
     
        setEnterValue(event.target.value);
      
    };
     useEffect(()=>{
       
        if(values){
          
           setEnterValue(values)
           setIsTouched(true)
         
        }
        
    },[])
    const inputBlurHandler = (event) => {
     
        setIsTouched(true); 
        
       
    };

    const reset = () => {
        setEnterValue('');
        setIsTouched(false);
    };
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};


export default useInput;