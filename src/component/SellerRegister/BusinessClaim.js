import React,{useRef, useEffect,useState } from 'react';
import useInput from "../hooks/use-input";

const isEmpty = (value) => value.trim() != '';

const BusinessClaim = ({values,nextStep,handleChange}) => {
    
   
    
    
    const [formIsvalid, setFormIsvalid]= useState(false);
    let countryRef = useRef();
   
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
       
    } = useInput(isEmpty,values.business);
   
   
    const {
        value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler
    } = useInput(isEmpty, values.street);
    const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
      
    } = useInput(isEmpty, values.city);
    const {
        value: enteredState,
        isValid: stateIsValid,
        hasError: stateHasError,
        valueChangeHandler: stateChangeHandler,
        inputBlurHandler: stateBlurHandler,
   
    } = useInput(isEmpty,values.state);
    const {
        value: enteredZip,
        isValid: zipcodeIsValid,
        hasError: zipcodeHasError,
        valueChangeHandler: zipcodeChangeHandler,
        inputBlurHandler: zipcodeBlurHandler,
       
    } = useInput(isEmpty, values.zipcode);
   
    const beforeUnloadListener = (event) => {
        event.preventDefault();
        return event.returnValue = "Are you sure you want to exit?";
    }
    if(window.performance){
        if(performance.navigation.type === 1 && enteredName){
          
            window.addEventListener("beforeunload", beforeUnloadListener, {capture: true});
        }
    }
    useEffect(()=> {
       
        if((nameIsValid && cityIsValid && stateIsValid && zipcodeIsValid && streetIsValid) ){
            setFormIsvalid(true)
           
        } else {
            setFormIsvalid(false)
        }
       
    },[nameIsValid,cityIsValid,stateIsValid,zipcodeIsValid,streetIsValid])
     
    const submitHandler = (event) => {

        event.preventDefault();
        if(!formIsvalid) return;
        const enteredCountry = countryRef.current.value;
      
        handleChange('business',enteredName)
        handleChange('country', enteredCountry)
        handleChange('street', enteredStreet)
        handleChange('city', enteredCity)
        handleChange('zipcode', enteredZip)
        handleChange('state', enteredState)
        nextStep();
      

    }
    

    return (
        <>
           
             <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Hello! Let’s start with your business name</h3>
                                <p className="mt-1 text-sm text-gray-600">We’ll use this information to help you claim your page. Your business will come up automatically if it is already listed.</p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                               
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 md:col-span-6">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="name"
                                            onChange={nameChangeHandler}
                                            onBlur={nameBlurHandler}
                                            defaultValue={values.business}
                                            className="focus:border-indigo-500 w-full border border-gray-300 text-black py-2 px-3 rounded-md"
                                        />
                                        {nameHasError && <small className="text-gray-600">Please fill out this field</small>}
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Country / Region
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            placeholder="country"
                                            ref={countryRef}
                                           
                                            className="w-full py-2 px-3 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                           
                                            <option value="United States">United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Mexico">Mexico</option>
                                        </select>
                                      
                                        </div>

                                        <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Street address
                                        </label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            placeholder="123 Main St"
                                            onChange={streetChangeHandler}
                                            onBlur={streetBlurHandler}
                                            defaultValue={values.street}
                                            className="py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm border border-gray-300 rounded-md"
                                        />
                                             {streetHasError && <small className="text-gray-600">Please fill out this field</small>}
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="city"
                                            onBlur={cityBlurHandler}
                                            onChange={cityChangeHandler}
                                            defaultValue={values.city}
                                            className="py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        />
                                          {cityHasError && <small className="text-gray-600 block">Please fill out this field</small>}
                                        </div>
                                      
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                            State 
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            placeholder="state"
                                            onBlur={stateBlurHandler}
                                            onChange={stateChangeHandler}
                                            defaultValue={values.state}
                                            className="mt-1 py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        />
                                         {stateHasError && <small className="text-gray-600">Please fill out this field</small>}
                                        </div>
                                       
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            ZIP / Postal
                                        </label>
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                           onChange={zipcodeChangeHandler}
                                           onBlur={zipcodeBlurHandler}
                                           placeholder="Zipcode"
                                           defaultValue={values.zipcode}
                                            className="mt-1 py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        />
                                             {zipcodeHasError && <small className="text-gray-600">Please fill out this field</small>}
                                        </div>
                                    </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                 
                                    <button
                                            type="submit"
                                            onClick={submitHandler}
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50" 
                                           disabled = {!formIsvalid}
                                        >
                                           
                                            Next
                                        </button>
                                  
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                            </div>

            
        </>
    )
}

export default BusinessClaim
