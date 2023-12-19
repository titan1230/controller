import { Camera, Fish, GitGraph, Settings } from "lucide-react";
import Image from "next/image";
import Alert from "../../public/alert.png";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-[60px] bg-gray-400 w-full items-center flex pl-4">
        <img src={"./alert.png"} className="w-8 h-8 mr-2" alt={"Alert logo"} />
        <p className="text-white text-xl font-bold">ROV NOT CONNECTED</p>
      </div>
      <div className="flex w-full bg-[#1e1f20]">
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
                    <img
                      src="./opencv.png"
                      alt="opencv"
                      className="w-4 h-4 mr-2 ml-1"
                    />
                    OpenCV v8.4
                  </div>
                </div>
              </div>
              <div className="flex h-full w-full items-center">
                <img
                  src="./level.png"
                  className="w-[150px] h-[150px] ml-4"
                  alt=""
                />
              </div>
            </div>
            <div className="flex bg-[#29282a] m-2 mr-1 rounded-md h-[600px]">
              <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
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
              <img src="" alt="" className="w-[640px] h-[480px] m-8" />
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
