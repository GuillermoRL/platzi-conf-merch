import { useState, useEffect } from "react";
import axios from 'axios';

const useGoogleAddress = address => {
    const API_KEY = 'Define your api_key from cloud service'
    console.log(address)
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`
    console.log(API)
    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    }, []);
    console.log(map);
    return map;
}

export default useGoogleAddress;