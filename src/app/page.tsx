"use client";

import {
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Fish,
  GitGraph,
  HomeIcon,
  Info,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import PingComponent from "@/components/fetchROV";
import { useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DataTable } from "./components/dataTable";
import { Payment, columns } from "./components/columns";

const IP_ADDRESS = "http://192.168.231.155/";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      location: "100m at Top Left position",
      status: "detected",
      logo: "m@example.com",
    },
    {
      id: "728ed52f",
      location: "200m at Top Right position",
      status: "pending",
      logo: "m@example.com",
    },
    {
      id: "728ed52f",
      location: "300m at Bottom Left position",
      status: "detected",
      logo: "m@example.com",
    },
    {
      id: "728ed52f",
      location: "400m at Top Right position",
      status: "processing",
      logo: "m@example.com",
    },
    {
      id: "728ed52f",
      location: "500m at Top Left position",
      status: "detected",
      logo: "m@example.com",
    },
    // ...
  ];
}

export default async function Home() {
  let keysPressed: { [key: string]: boolean } = {};

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      keysPressed[event.key] = true;

      // Check for simultaneous key presses of 'a' and 'w'
      if (keysPressed["s"] && keysPressed["w"]) {
        console.log("a and w pressed");
      } else if (keysPressed["a"] && keysPressed["d"]) {
        console.log("a and s pressed");
      } else if (keysPressed["q"] && keysPressed["e"]) {
        console.log("w and d pressed");
      } else if (
        keysPressed["w"] ||
        keysPressed["s"] ||
        keysPressed["a"] ||
        keysPressed["d"] ||
        keysPressed["q"] ||
        keysPressed["e"]
      ) {
        console.log("w or s or a or d or q or e pressed");
      }
    });
    document.addEventListener("keyup", (event) => {
      delete keysPressed[event.key];
    });
    console.log();
  }, []);

  const data = await getData();

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

                <div className="flex h-full p-6 w-full">
                  <div className="flex flex-1 w-full h-full">
                    <div className="flex-col w-full p-2">
                      <div className="flex items-center justify-center mt-2 gap-x-2 text-sm text-gray-300">
                        50%
                        <Progress value={50} className="mr-4" />
                      </div>
                      <div className="flex flex-col text-sm mt-4 text-gray-300">
                        Start up time : 47 min
                      </div>
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Remaining time : 38 min
                      </div>
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Distance Traveled : 1134 m
                      </div>
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Power Consumption : 1200w
                      </div>
                    </div>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="flex flex-1 w-full h-full">
                    <div className="flex flex-col p-4">
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Unit Temperature : 76°c
                      </div>
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Unit Water Level : 5%
                      </div>
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Water Temperature : 12°c
                      </div>
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Water Pressure : 674 Pa
                      </div>
                      <div className="flex flex-col text-sm mt-2 text-gray-300">
                        Water Speed : 5m/s
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#29282a] m-2 mr-1 rounded-md pb-4">
              <div className="flex w-full h-[50px] bg-[#4c4c56] rounded-tl-md rounded-tr-md items-center pl-4">
                <Settings className="w-4 h-4 mr-2 text-white" />
                <p className="text-white">Settings</p>
              </div>
              <div className="flex text-white m-4">
                <div className="grid grid-cols-4 grid-row-3 gap-x-3 gap-y-3">
                  <div className="flex flex-col justify-center items-center rounded-md bg-transparent p-2 w-[50px] h-[50px] s"></div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <ChevronUp className="w-6 h-6 text-[#86858B]" />
                    <div className="text-[#86858B] text-sm ml-1">Y+</div>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-transparent p-2 w-[50px] h-[50px] s"></div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <ChevronUp className="w-6 h-6 text-[#86858B]" />
                    <div className="text-[#86858B] text-sm ml-1">Z+</div>
                  </div>
                  <div className="flex justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <ChevronLeft className="w-6 h-6 text-[#86858B]" />
                    <div className="text-[#86858B] text-sm ml-1">X-</div>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <HomeIcon className="w-6 h-6 text-[#86858B]" />
                  </div>
                  <div className="flex justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <div className="text-[#86858B] text-sm ml-1">X+</div>
                    <ChevronRight className="w-6 h-6 text-[#86858B]" />
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <HomeIcon className="w-6 h-6 text-[#86858B]" />
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-transparent p-2 w-[50px] h-[50px] s"></div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <div className="text-[#86858B] text-sm ml-1">Y-</div>
                    <ChevronDown className="w-6 h-6 text-[#86858B]" />
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-transparent p-2 w-[50px] h-[50px] s"></div>
                  <div className="flex flex-col justify-center items-center rounded-md bg-[#3D3C41] p-2 w-[50px] h-[50px] s">
                    <div className="text-[#86858B] text-sm ml-1">Z-</div>
                    <ChevronDown className="w-6 h-6 text-[#86858B]" />
                  </div>
                </div>
                <img
                  src="./controls.png"
                  alt=""
                  className="w-[440px] h-[181px] ml-2 mt-4"
                />
              </div>
              <div className="flex gap-x-6 mt-4 w-full ml-4">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode" className="text-gray-300">
                    Airplane Mode
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="obstacle-avoid" />
                  <Label htmlFor="obstacle-avoid" className="text-gray-300">
                    Obstacle avoidance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="ai-crack" />
                  <Label htmlFor="ai-crack" className="text-gray-300">
                    AI Crack Detection
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#29282a] m-2 mr-1 rounded-md pb-4">
              <div className="flex w-full h-[50px] bg-[#4c4c56] rounded-tl-md rounded-tr-md items-center pl-4">
                <Info className="w-4 h-4 mr-2 text-white" />
                <p className="text-white">Cracks Details</p>
              </div>
              <div className="container mt-6 text-white">
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col w-full">
            <div className="flex flex-1 flex-col h-[600px] bg-[#29282a] items-start justify-center m-2 ml-2 rounded-md">
              <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
                <Camera className="w-4 h-4 mr-2 text-white" />
                <p className="text-white font-bold">
                  LIVE CAMERA FEED | CRACK DETECTION
                </p>
              </div>
              {/* ${IP_ADDRESS}:8081 */}
              <div className="flex">
                <img
                  src={"./no_cam.png"}
                  alt=""
                  className="w-[370px] h-[277px] m-4 ml-6"
                />
                <div className="flex flex-col h-full items-center justify-center">
                  <div className="flex">
                    <img
                      src={"./step-1.jpeg"}
                      alt=""
                      className="w-[130px] h-[130px] m-4 ml-0"
                    />
                    <img
                      src={"./step-2.jpeg"}
                      alt=""
                      className="w-[130px] h-[130px] m-4 ml-0"
                    />
                  </div>
                  <div className="flex">
                    <img
                      src={"./step-3.jpeg"}
                      alt=""
                      className="w-[130px] h-[130px] m-4 ml-0 mt-0"
                    />
                    <img
                      src={"./step-5.jpeg"}
                      alt=""
                      className="w-[130px] h-[130px] m-4 ml-0 mt-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#29282a] ml-2 mr-2 rounded-md pb-4 w-full">
              <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
                <GitGraph className="w-4 h-4 mr-2 text-white" />
                <p className="text-white">Survey Data</p>
              </div>
              <div className="flex gap-x-6 mt-4 w-full justify-center">
                <div className="flex-col">
                  <iframe src="http://192.168.231.155:3002" className="w-[320px] h-[320px] mt-4" />
                  <img
                    src="./tps.png"
                    alt="model"
                    className="w-[320px] h-[320px] mt-4"
                  />
                </div>
                <img
                  src="./no_cam.png"
                  alt="model"
                  className="w-[300px] h-[660px] mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
