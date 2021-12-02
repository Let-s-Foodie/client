import React, { useState } from 'react'
import RestaurantModal from '../UI/RestaurantModal'
import HashTagModal from '../UI/HashTagModal'
import Aux from '../hoc/hoc'
const RandomFood = ({
  title,
  image,
  lat,
  lng,
  randomHandler,
  seller,
  category,
}) => {
  const [details, setDetail] = useState([])
  const [hashtagDetails, setHashtag] = useState([])

  const cancelHandler = () => {
    setDetail([])
  }

  //feature-1.2.2
  const displayDetail = () => {
    const businessesDetail = {
      name: title,
      image_url: image,
      seller: seller,
    }
    setDetail(businessesDetail)
  }

  const hashtagHandler = (hash) => {
    // Review UI
    // Change localhost from 5000 to 8000
    // Change URL from random to yelp
    const URL = 'http://localhost:5000/random/detail'
    const data = {
      title: hash,
      lat: lat,
      lng: lng,
    }
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(
        (res) => {
          return res.json()
        },
        (error) => {
          console.log(error)
        },
      )
      .then((resData) => {
        setHashtag(resData.data.businesses)
      })
  }
  const cancelHashtag = () => {
    setHashtag([])
  }

  return (
    <Aux>
      <div className="max-w-md rounded overflow-hidden shadow-lg my-3">
        <img alt="food" className="w-full" src={image} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="px-6 py-2">
          <button
            onClick={displayDetail}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Detail
          </button>
          <span className="px-4"></span>
          <button
            onClick={randomHandler}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Skip
          </button>
        </div>
        <div className="px-6 py-4">
          <span
            className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker text-blue-600 cursor-pointer mr-2"
            onClick={() => hashtagHandler(title)}
          >
            #{title}
          </span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker text-blue-600 cursor-pointer mr-2">
            {/* onClick={() => hashtagHandler(seller.name)}>#{seller.name} */}
          </span>
          <span
            className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker text-blue-600 cursor-pointer"
            onClick={() => hashtagHandler(category)}
          >
            #{category}
          </span>
        </div>
      </div>

      {details.name && (
        <RestaurantModal
          lat={lat}
          lng={lng}
          details={details}
          onCancel={cancelHandler}
        />
      )}

      {hashtagDetails.length > 0 && (
        <HashTagModal
          lat={lat}
          lng={lng}
          details={hashtagDetails}
          onCancel={cancelHashtag}
        />
      )}
    </Aux>
  )
}

export default RandomFood
