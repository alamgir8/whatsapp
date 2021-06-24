/* eslint-disable @next/next/no-img-element */
import React from 'react';


const Loading = () => {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img src="https://img.icons8.com/fluent/144/000000/whatsapp.png"  alt="" style={{marginBottom: 10}}/> <br />
                <img src="https://i.ibb.co/PCCp4hc/Spinner.gif" alt="" />
            </div>
        </center>
    );
};

export default Loading;