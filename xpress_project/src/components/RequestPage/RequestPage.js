import "./RequestPage.css";
import Navbar from "../Navbar_SignedIn/Navbar_SignedIn"

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

                            </div>
                            <div id='fieldMap'>
                                <form id='mapForm'>
                                    <input type='text' id='mapInput'></input>
                                </form>

                            </div>
                        </div>
               
                            

                  
                    </div>
                    <div class='infoItem' id='dropOffInput'>
                        drop off
                    </div>
                    <div class='infoItem' id='FindSubmitButton'>
                        find button
                    </div>
                    <div class='infoItem' id='RestOfthepgae'>
                        rest of the page
                    </div>
                </div>
                <div class="imageBox">
                    hello2
                </div>
            </div>
        </main>
        
    );
} export default RequestPage; 

