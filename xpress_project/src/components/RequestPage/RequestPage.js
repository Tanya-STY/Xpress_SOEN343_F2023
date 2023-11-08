import "./RequestPage.css";
import Navbar from "../Navbar_SignedIn/Navbar_SignedIn"

function RequestPage() {
    return (
        <main  class="main">
            <Navbar/>
            <div class="content">
                <div class="informationBox">
                    <div class='infoItem' id="delTitle"> 
                        Quotation
                    </div>
                    <div class='infoItem' id='delSubTitle'>
                        with a few clicks, make a delivery request!
                    </div>
                    <div class='infoItem' id="pickUp">
                        pick up address
                    </div>
                    <div class='infoItem'>
                        drop off
                    </div>
                    <div class='infoItem'>
                        find button
                    </div>
                    <div class='infoItem'>
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

