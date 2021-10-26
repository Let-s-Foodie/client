import React, { useState, useEffect } from 'react'
import RandomFood from '../RandomFood/RandomFood'
import useGeoLocation from '../hooks/useGeoLocation'
import Aux from '../hoc/hoc'
import './Main.css'
const Main = () => {
  const [foodFeed, setFoodfeed] = useState([])
  const [foodInfo, setFoodinfo] = useState([])
  const [lengthCheck, setLength] = useState([])

  useEffect(() => {
    //const URL = "http://localhost:8000/dishes";
    const URL = 'http://localhost:8000/random/feeds'
    fetch(URL, {
      method: 'GET',
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setFoodinfo(data)
        if (foodInfo.length <= 1) setLength('loading')
      })
    return () => {
      setFoodinfo({})
      setLength()
    }
  }, [lengthCheck, foodInfo.length])

  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation()

  const foodListHandler = () => {
    let foodArr = []
    let i = foodInfo.length
    console.log('FoodInfo length test', foodInfo.length)
    let j = Math.floor(Math.random() * i)
    foodArr.push(foodInfo[j])
    foodInfo.splice(j, 1)
    setFoodinfo(foodInfo)
    const foods = {
      title: foodArr[0].name,
      image: foodArr[0].image,
      category: foodArr[0].category,
      seller: foodArr[0].sellerId,
      id: foodArr[0].id,
    }

    setFoodfeed(foods)
  }

  return (
    <Aux>
      <section className="main-page">
        {!loaded && <div>Loading...</div>}

        {loaded && !foodFeed.title && (
          <button onClick={foodListHandler}>Test button</button>
        )}

        {foodFeed.title ? (
          <RandomFood
            title={foodFeed.title}
            image={foodFeed.image}
            lat={lat}
            lng={lng}
            randomHandler={foodListHandler}
            seller={foodFeed.seller}
            category={foodFeed.category}
          />
        ) : (
          <div></div>
        )}
      </section>
    </Aux>
  )
}

export default Main
