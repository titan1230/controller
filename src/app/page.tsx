"use client"

import { Camera, Fish, GitGraph, Settings } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import PingComponent from "@/components/fetchROV"
import { useEffect } from "react";

const IP_ADDRESS = "http://192.168.231.90/";

export default function Home() {

  let keysPressed: { [key: string]: boolean } = {};

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      keysPressed[event.key] = true;

      // Check for simultaneous key presses of 'a' and 'w'
      if (keysPressed['s'] && keysPressed['w']) {
        console.log('a and w pressed')
      } else if (keysPressed['a'] && keysPressed['d']) {
        console.log('a and s pressed')
      } else if (keysPressed['q'] && keysPressed['e']) {
        console.log('w and d pressed')
      } else if (keysPressed['w'] || keysPressed['s'] || keysPressed['a'] || keysPressed['d'] || keysPressed['q'] || keysPressed['e']) {
        console.log('w or s or a or d or q or e pressed')
      }
    })

  }, []);
  
  console.log()

  document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
  });

  return (
    <main className="flex flex-col">
      <div className="h-[60px] bg-gray-400 w-full items-center flex pl-4">
        <PingComponent />
      </div>
      <div className="flex w-full bg-[#1e1f20] md-flex-col flex-row">
        <div className="flex flex-1">
          <div className="flex-1 flex-col">
            <div className="flex flex-col bg-[#29282a] m-2 mr-1 rounded-md h-[250px]">
              <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
                <Fish className="w-4 h-4 mr-2 text-white" />
                <p className="text-white">Makar V2.1.0</p>
                <div className="flex m-2 gap-x-1 ml-4 cursor-pointer">
                  <div className="flex bg-gray-400 rounded-sm p-1 text-sm font-medium">
                    AntiCol v1.0.2
                  </div>
                  <div className="flex bg-gray-400 rounded-sm p-1 text-sm font-medium">
                    cVision v1.0.0
                  </div>
                  <div className="flex bg-gray-400 rounded-sm p-1 text-sm font-medium">
                    SRP v2.0
                  </div>
                  <div className="flex bg-gray-400 rounded-sm p-1 text-sm font-medium">
                    Kalman Filtering
                  </div>
                  <div className="flex bg-gray-400 rounded-sm p-1 text-sm font-medium items-center">
                    <Image
                      width={4}
                      height={4}
                      src="./opencv.png"
                      alt="opencv"
                      className="w-4 h-4 mr-2 ml-1"
                    />
                    OpenCV v8.4
                  </div>
                </div>
              </div>
              <div className="flex h-full w-full items-center">
                <Image
                  src="./level.png"
                  className="w-[150px] h-[150px] ml-4"
                  alt=""
                  width={150}
                  height={150}
                  priority
                />
                <div className="flex h-full text-white p-6 w-full">
                  <div className="flex flex-1 w-full h-full">
                    <div className="flex-col w-full p-2">
                      <div className="flex flex-col text-md">Battery Statistics</div>
                      <div className="flex items-center justify-center mt-4 gap-x-2">
                        50%
                        <Progress value={50} className="mr-4" />
                      </div>
                    </div>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="flex flex-1 w-full h-full"></div>
                </div>
              </div>
            </div>
            <div className="flex bg-[#29282a] m-2 mr-1 rounded-md h-[600px]">
              <div className="flex w-full h-[50px] bg-[#4c4c56] rounded-tl-md rounded-tr-md items-center pl-4">
                <Settings className="w-4 h-4 mr-2 text-white" />
                <p className="text-white">Settings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col h-[600px] w-full bg-[#29282a] items-center justify-center m-2 ml-2 rounded-md">
              <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
                <Camera className="w-4 h-4 mr-2 text-white" />
                <p className="text-white font-bold">LIVE CAMERA FEED</p>
              </div>
              <img src={`${IP_ADDRESS}:8081`} alt="" className="w-[640px] h-[480px] m-8" />
            </div>
            <div className="flex bg-[#29282a] ml-2 mr-2 rounded-md h-[500px] w-full">
              <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
                <GitGraph className="w-4 h-4 mr-2 text-white" />
                <p className="text-white">Statistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
