import React from "react";

var date = new Date();
let hour = date.getFullYear();

function Footer(){
    return (
        <div>
            <footer>Copyright @ {hour}</footer>
        </div>
    )
}

export default Footer;