import React,{useRef} from 'react';
import {Link, useParams,useRouteMatch} from "react-router-dom";
import Geocode from 'react-geocode';


const BusinessClaim = ({values,nextStep,handleChange}) => {
   
    const apiKey = Geocode.setApiKey("AIzaSyDSqPwVXMpohF0vOm95pZ6kadMTQ8fd6w8");
    const nameRef = useRef();
    const countryRef = useRef();
    const streetRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipcodeRef = useRef();

    let match = useRouteMatch();
    const submitHandler = () => {

        //const enteredAddress = streetRef.current.value + " " + cityRef.current.value + " " + stateRef.current.value + " " + zipcodeRef.current.value;
        const enteredCountry = countryRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredCity = cityRef.current.value;
        const enteredState = stateRef.current.value;
        const enteredZip = zipcodeRef.current.value;
        const enteredName = nameRef.current.value;
        
        handleChange('business',enteredName)
        handleChange('country', enteredCountry)
        handleChange('street', enteredStreet)
        handleChange('city', enteredCity)
        handleChange('zipcode', enteredZip)
        handleChange('state', enteredState)
        nextStep();
        // Geocode.fromAddress(enteredAddress,apiKey).then((res)=>{
        //     const {lat, lng} = res.results[0].geometry.location;
        //     console.log("lat lng", lat, lng);
        // })

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
                                            ref={nameRef}
                                            placeholder="name"
                                         
                                            defaultValue={values.business}
                                            className="focus:border-indigo-500 w-full border border-gray-300 text-black py-2 px-3 rounded-md"
                                        />
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
                                           
                                            defaultValue={values.country}
                                            className="w-full py-2 px-3 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
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
                                            placeholder="street"
                                            ref={streetRef}
                                            defaultValue={values.street}
                                            className="py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm border border-gray-300 rounded-md"
                                        />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            ref={cityRef}
                                            defaultValue={values.city}
                                            className="py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                            State 
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            ref={stateRef}
                                            defaultValue={values.state}
                                            className="mt-1 py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            ZIP / Postal
                                        </label>
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                           ref={zipcodeRef}
                                           defaultValue={values.zipcode}
                                            className="mt-1 py-2 px-3 focus:ring-indigo-500 text-black focus:border-indigo-500  w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                        />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                 
                                    <button
                                            type="submit"
                                            onClick={submitHandler}
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
