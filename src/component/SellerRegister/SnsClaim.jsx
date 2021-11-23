import React, { useRef, useState, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import Geocode from 'react-geocode'

function SnsClaim({ values, prevStep, handleChange }) {
  const authCtx = useContext(AuthContext)
  const instagramRef = useRef()
  const facebookRef = useRef()
  const yelpRef = useRef()
  const [, setLocation] = useState({ lat: '', lng: '' })

  const beforeUnloadListener = (event) => {
    event.preventDefault()
    return (event.returnValue = 'Are you sure you want to exit?')
  }

  if (window.performance) {
    if (window.performance.navigation.type === 1 && values.business !== '') {
      window.addEventListener('beforeunload', beforeUnloadListener, {
        capture: true,
      })
    }
  }

  let previous = (e) => {
    e.preventDefault()
    prevStep()
  }

  const submitHandler = () => {
    const apiKey = Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY)
    const enteredInsta =
      instagramRef.current.value === '' ? null : instagramRef.current.value
    const enteredFb =
      facebookRef.current.value === '' ? null : facebookRef.current.value
    const enteredYelp =
      yelpRef.current.value === '' ? null : yelpRef.current.value
    const businessName = values.business
    const enteredAddress =
      values.street +
      ' ' +
      values.city +
      ' ' +
      values.state +
      ' ' +
      values.zipcode
    const sellerData = {}
    sellerData.name = businessName
    sellerData.instagram = enteredInsta
    sellerData.facebook = enteredFb
    sellerData.yelp = enteredYelp

    handleChange('instagram', enteredInsta)
    handleChange('facebook', enteredFb)
    handleChange('yelp', enteredYelp)

    Geocode.fromAddress(enteredAddress, apiKey)
      .then((res) => {
        const { lat, lng } = res.results[0].geometry.location

        setLocation({ lat: lat, lng: lng })

        return { lat, lng }
      })
      .then((res) => {
        console.log(res)
        sellerData.lng = res.lng
        sellerData.lat = res.lat
        console.log(sellerData)
        fetch('http://localhost:8080/sellers/user', {
          method: 'POST',
          body: JSON.stringify(sellerData),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            authtoken: authCtx.token,
          },
        })
      })
  }

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Hello! Let’s start with your business name
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                We’ll use this information to help you claim your page. Your
                business will come up automatically if it is already listed.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 md:col-span-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      instagram
                    </label>
                    <input
                      type="text"
                      ref={instagramRef}
                      placeholder="instagram"
                      defaultValue={values.instagram}
                      className="focus:border-indigo-500 w-full border border-gray-300 text-black py-2 px-3 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-medium text-gray-700"
                    >
                      facebook
                    </label>
                    <input
                      type="text"
                      ref={facebookRef}
                      placeholder="facebook"
                      defaultValue={values.facebook}
                      className="focus:border-indigo-500 w-full border border-gray-300 text-black py-2 px-3 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6">
                    <label
                      htmlFor="yelp"
                      className="block text-sm font-medium text-gray-700"
                    >
                      yelp
                    </label>
                    <input
                      type="text"
                      ref={yelpRef}
                      placeholder="yelp"
                      defaultValue={values.yelp}
                      className="focus:border-indigo-500 w-full border border-gray-300 text-black py-2 px-3 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 pb-6">
                <div className="col-start-2 col-span-2">
                  <button
                    type="submit"
                    onClick={previous}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    previous
                  </button>
                </div>

                <div className="col-end-5 col-span-2 sm:col-span-6 lg:col-span-2 ">
                  <button
                    type="submit"
                    onClick={submitHandler}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SnsClaim
