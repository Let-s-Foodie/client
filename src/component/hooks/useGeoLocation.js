import { useState, useEffect, useCallback } from 'react'

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  })

  const onSuccess = useCallback(
    (position) => {
      const { longitude, latitude } = position.coords
      setLocation({
        ...location,
        loaded: true,
        coordinates: { lat: latitude, lng: longitude },
      })
    },
    [location],
  )

  const onError = useCallback(
    (error) => {
      setLocation({
        ...location,
        loaded: true,
        err: error,
      })
    },
    [location],
  )

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [onError, onSuccess])

  return location
}

export default useGeoLocation
