import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function MyIpAddress() {
    const [myIpAddress, setmyIpAddress] = useState('');
    const [isLoading, setisLoading] = useState(true)
    async function GetMyId() {
        let response = await fetch("http://ip-api.com/json/");
        let jsondata = await response.json();
        setmyIpAddress(jsondata.query);
        setisLoading(false)
    }
    useEffect(() => {
        GetMyId()
    }, []);
    return (
        <div>
            {isLoading && ("loading")}
            <h1>
                IP:{myIpAddress}
            </h1>

        </div>
    )
}