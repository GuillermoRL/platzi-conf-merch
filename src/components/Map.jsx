import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
    const API_KEY = 'Define your api_key from cloud service'
    const mapStyles = {
        height: "50vh",
        width: "100%"
    }
    const defaultCenter = {
        lat: data.lat, lng: data.lng
    }
    return(
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;