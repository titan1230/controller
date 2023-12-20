"use client";

import { useCallback, useEffect, useState } from 'react';
import Image from "next/image";

const PingComponent = () => {

  const [online, setOnline] = useState(false);

  const pingServer = useCallback(async () => {
    const response = await fetch('http://192.168.231.90/', { mode: "no-cors" }).catch(err => console.log(''));

    if (!response) return console.log("No response from server"); setOnline(false);
  
    console.log(response);  
    const data = response!.ok;

    if (!data) {
        setOnline(!data);
    }
  }, []);

  if (1==1) {
    // Continue pinging recursively
    setTimeout(() => pingServer(), online ? 5000 : 1000); // adjust the interval as needed
  }

  useEffect(() => {
    pingServer();
  }, [pingServer]);

  return online ? (
    <>
      <Image src={"/check.png"} height={8} width={8} className="w-8 h-8 mr-2" alt={"Alert logo"} />
      <p className="text-white text-xl font-bold">ROV CONNECTED</p>
    </>
  ) : (
  <>
    <Image src={"/alert.png"} height={8} width={8} className="w-8 h-8 mr-2" alt={"Alert logo"} />
    <p className="text-white text-xl font-bold">ROV NOT CONNECTED</p>
  </>
  )
};

export default PingComponent;
