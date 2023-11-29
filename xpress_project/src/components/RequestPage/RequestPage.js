import "./RequestPage.css";
import Navbar from "../Navbar_SignedIn/Navbar_SignedIn"
import geoIcon from './geoIcon_xpress.jpg' 
import carGuy from './manInACar_xpress.png'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import { useState } from 'react'

function RequestPage() {
    const [map, setMap] = useState(null)
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
      })
      
      if(!isLoaded){
        return <h1>Not loaded yet</h1>
      }
    const center = { lat: 48.8584, lng: 2.2945}; 

    

    return (
        <main  class="main">
            <Navbar/>
            <div class="content">
                <div class="informationBox">
                    <div class='infoItem' id="Title"> 
                        Quotation
                    </div>
                    <div class='infoItem' id='SubTitle'>
                    Within a few clicks, make a delivery request!
                    </div>
                    <div class='infoItem' id="pickUpInput">

                        <div id='inputMapItem'>
                            <div id='icon'>
                                <img id='geoIcon' alt='Icon Not Found' src={geoIcon} width='15px' height='15px'/>
                            </div>
                            <div id='fieldMap'>
                                <form id='mapForm'>
                                    <Autocomplete>
                                    <input type='text' id='mapInput' placeholder='  Pick Up Address'></input>
                                    </Autocomplete>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class='infoItem' id='dropOffInput'>
                        <div id='inputMapItem'>
                            <div id='icon'>
                                <img id='geoIcon' alt='Icon Not Found' src={geoIcon} width='15px' height='15px'/>
                            </div>
                            <div id='fieldMap'>
                                <form id='mapForm'>
                                    <Autocomplete>
                                    <input type='text' id='mapInput' placeholder='  Drop Off Address'></input>
                                    </Autocomplete>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class='infoItem' id='FindSubmitButton'>
                        <button type='submit'>Submit</button>
                    </div>
                    <div class='infoItem' id='RestOfthePage'>
                    </div>
                </div>
                <div class="imageBox">
                    <GoogleMap 
                        center={center} 
                        zoom={15} 
                        mapContainerStyle={{width: '100%', height:'100%'}} 
                        onLoad={(map) => setMap(map) }
                        >
                        <Marker position={center} />

                        

                    </GoogleMap>
                    
                </div>
            </div>
        </main>
        
    );
} export default RequestPage; 

