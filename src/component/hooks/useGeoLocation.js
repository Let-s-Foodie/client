import { useState, useEffect, useCallback } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = useCallback((position) => {
    const { longitude, latitude } = position.coords;
    setLocation({
      ...location,
      loaded: true,
      coordinates: { lat: latitude, lng: longitude },
    });
  }, []);

  const onError = useCallback((error) => {
    setLocation({
      ...location,
      loaded: true,
      err: error,
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [onSuccess, onError]);

  return location;
};

export default useGeoLocation;
