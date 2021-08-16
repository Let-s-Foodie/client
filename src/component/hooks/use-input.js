import { useState,useEffect } from 'react';

const useInput = (validateValue,values) => {
    const [enteredValue, setEnterValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = !validateValue(enteredValue);
    //console.log('valid?', enteredValue,valueIsValid)
    const hasError = !valueIsValid;
   
    const valueChangeHandler = (event) => {
       console.log("value change",event.target.value)
        setEnterValue(event.target.value);
        return event.target.value;
    };
     useEffect(()=>{
      //  console.log('useEffect', values)
     
        if(values){
            setEnterValue(values)
        }
     
        
    },[values,valueChangeHandler,validateValue,enteredValue])
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