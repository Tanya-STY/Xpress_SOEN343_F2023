import "./RequestPage.css";
import Navbar from "../Navbar_SignedIn/Navbar_SignedIn"
import geoIcon from './geoIcon_xpress.jpg' 
import carGuy from '../images/quotationPic.png'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import { useState, useCallback, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';


const center = { lat: 45.497164, lng: -73.578294}; 

function RequestPage() {
 
    const libraries = ['places'];
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBhA6E4B6MJEQRv5o4XEtunYOFpkifmaio",
        version:'weekly',
        libraries,
      });

      const [map, setMap] = useState(/** @type google.maps.Map */ (null));
      const [directionResponse, setDirectionResponse] = useState(null);
      const [distance, setDistance] = useState('');
      const [duration, setDuration] = useState('');

      /** @type React.MutableRefObject<HTMLInputElement> */
      const originRef = useRef()
      /** @type React.MutableRefObject<HTMLInputElement> */
      const destinationRef = useRef()
      
      const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])

      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])

      if(!isLoaded){
        return <h1>Not loaded yet</h1>
      }

      async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return; 
        }
        const directionService = new window.google.maps.DirectionsService();
        const results = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: window.google.maps.TravelMode.DRIVING
        })
        if(results.routes && results.routes.length > 0) {
            const calculatedDistance = results.routes[0].legs[0].distance.text;
            setDirectionResponse(results)
            setDistance(calculatedDistance)
            setDuration(results.routes[0].legs[0].duration.text)
            localStorage.setItem('distance', calculatedDistance);
        }
      };

    return (
        <main  class="main">
            {/* <Navbar/> */}
            <div class="content">
                <div class="informationBox">
                    <div class='infoItem1' id="Title1"> 
                        Quotation
                    </div>
                    <div class='infoItem1' id='SubTitle'>
                    Within a few clicks, make a delivery request!
                    </div>
                    <div class='infoItem1' id="pickUpInput">

                        <div id='inputMapItem'>
                            <div id='icon1'>
                                <img id='geoIcon' alt='Icon Not Found' src={geoIcon} width='15px' height='15px'/>
                            </div>
                            <div id='fieldMap'>
                                <form id='mapForm'>
                                    <Autocomplete>
                                    <input type='text' id='mapInput' placeholder='  Pick Up Address' ref={originRef}></input>
                                    </Autocomplete>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class='infoItem1' id='dropOffInput'>
                        <div id='inputMapItem'>
                            <div id='icon1'>
                                <img id='geoIcon' alt='Icon Not Found' src={geoIcon} width='15px' height='15px'/>
                            </div>
                            <div id='fieldMap'>
                                <form id='mapForm'>
                                    <Autocomplete>
                                    <input type='text' id='mapInput' placeholder='  Drop Off Address' ref={destinationRef}></input>
                                    </Autocomplete>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class='infoItem1' id='FindSubmitButton'>
                        <button type='submit' onClick={calculateRoute} >Calculate</button>
                    </div>
                    <div class='infoItem1' id='RestOfthePage'>
                        <div><h3>Distance: {distance} </h3></div>
            
                        <div><h3>Duration: {duration} </h3></div>
                        <div></div>
                    </div>
                    <div class='infoItem1' id='FindSubmitButton'>
                        <Link to='/Quote'>
                        <button type='submit' onClick={calculateRoute} >Proceed to payment</button>
                        </Link>
                    </div>
                </div>
                <div class="imageBox">
                    <GoogleMap 
                        center={center} 
                        zoom={15} 
                        mapContainerStyle={{width: '100%', height:'80vh', overflow: 'hidden'}} 
                        onLoad={(map) => map.panTo(center) }
                        onUnmount={onUnmount}
                        >
                        <Marker position={center} />
                        {directionResponse && <DirectionsRenderer directions={directionResponse}/>}
                        

                    </GoogleMap>
                    
                </div>
            </div>
        </main>
        
    );
} export default RequestPage; 

