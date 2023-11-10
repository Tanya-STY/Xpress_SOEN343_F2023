import "./RequestPage.css";
import Navbar from "../Navbar_SignedIn/Navbar_SignedIn"
import geoIcon from './geoIcon_xpress.jpg' 
import carGuy from './manInACar_xpress.png'

function RequestPage() {
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
                                    <input type='text' id='mapInput' placeholder='  Pick Up Address'></input>
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
                                    <input type='text' id='mapInput' placeholder='  Drop Off Address'></input>
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
                    <img alt='scooter Boy image not loading' src={carGuy} width='100%'></img>
                </div>
            </div>
        </main>
        
    );
} export default RequestPage; 

