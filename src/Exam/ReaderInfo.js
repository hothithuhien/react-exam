import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function RenderInfo() {
    const [isLoading, setisLoading] = useState(true)
    async function GetInfo() {
        let response = await fetch("https://jsonplaceholder.typicode.com/users?fbclid=IwAR1DbsESk6VsXHm2Q8CUjBNB3TUjRQYF0gqgVuRgOI7QhQZ3zmw1iBjH5Wc");
        let jsondata = await response.json();
        setmyIpAddress(jsondata.query);
        setisLoading(false)
    }
    const renderInfo = () => {
        return colors.map((color, index) => (
          <div
            key={id}
          ></div>
        ));
      };
    useEffect(() => {
        GetInfo()
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