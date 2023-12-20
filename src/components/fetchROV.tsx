"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

const PingComponent = () => {
  const [online, setOnline] = useState(false);

  const pingServer = async () => {
    try {
      const response = await fetch('http://192.168.231.90/', { mode: "no-cors" });
      if (!response.ok) {
        setOnline(false);
        console.log("No response from server");
      } else {
        setOnline(true);
        console.log(response);
      }
    } catch (error) {
      setOnline(false);
      console.error("Error fetching data from server:", error);
    }
  };

  useEffect(() => {
    // Call pingServer initially
    pingServer();

    // Set up the interval to call pingServer every 3 seconds
    const intervalId = setInterval(() => {
      pingServer();
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

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
  );
};

export default PingComponent;
