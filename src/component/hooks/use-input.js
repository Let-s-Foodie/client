import { useState,useEffect } from 'react';

const useInput = (validateValue,values) => {
    const [enteredValue, setEnterValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let valueIsValid = validateValue(enteredValue);
    //console.log(enteredValue, valueIsValid, isTouched)
    const hasError = !valueIsValid && isTouched;
   
    const valueChangeHandler = (event) => {
       console.log(event.target.value)
        setEnterValue(event.target.value);
      
    };
     useEffect(()=>{
       
        if(values){
          
           setEnterValue(values)
           setIsTouched(true)
         
        }
        
    },[])
    const inputBlurHandler = (event) => {
        console.log("touched!")
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