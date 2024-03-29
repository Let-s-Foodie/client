import React, { useState, useEffect } from 'react'
import RandomFood from '../RandomFood/RandomFood'
import useGeoLocation from '../hooks/useGeoLocation'
import Aux from '../hoc/hoc'
import './Main.css'
const Main = ({ dishLists, location }) => {
  const [foodFeed, setFoodfeed] = useState([])
  const [foodInfo, setFoodinfo] = useState([])
  const [lengthCheck, setLength] = useState([])

  useEffect(() => {
    setFoodinfo(dishLists)
    if (foodInfo.length <= 1) setLength('loading')

    return () => {
      setFoodinfo([])
    }
  }, [dishLists, lengthCheck, foodInfo.length])
  const {
    coordinates: { lat, lng },
  } = useGeoLocation()

  const foodListHandler = () => {
    let randomItem
    let i = foodInfo.length
    console.log('FoodInfo length test', foodInfo.length)
    let j = Math.floor(Math.random() * i)
    randomItem = foodInfo[j]
    foodInfo.splice(j, 1)
    setFoodinfo(foodInfo)
    const foods = {
      title: randomItem.name,
      image: randomItem.image,
      category: randomItem.category,
      seller: randomItem.sellerId,
      id: randomItem.id,
    }

    setFoodfeed(foods)
  }

  return (
    <Aux>
      <section className="main-page">
        {foodInfo.length === 0 && <div>Loading...</div>}

        {foodInfo.length > 0 && !foodFeed.title && (
          <button onClick={foodListHandler}>Test button</button>
        )}

        {foodFeed.title && (
          <RandomFood
            title={foodFeed.title}
            image={foodFeed.image}
            lat={location.lat}
            lng={location.lng}
            randomHandler={foodListHandler}
            seller={foodFeed.seller}
            category={foodFeed.category}
          />
        )}
      </section>
    </Aux>
  )
}

export default Main
