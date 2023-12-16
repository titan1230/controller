import { Camera, Fish, GitGraph, Settings } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col">
    <div className="h-[60px] bg-gray-400 w-full"></div>
    <div className="flex w-full bg-[#1e1f20]">
      <div className="flex flex-1">
        <div className="flex-1 flex-col">
          <div className="flex bg-[#29282a] m-4 mr-2 rounded-md h-[200px]">
            <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
              <Fish className="w-4 h-4 mr-2 text-white" />
              <p className="text-white">Makar V2.1.0</p>
            </div>
          </div>
          <div className="flex bg-[#29282a] m-4 mr-2 rounded-md h-[600px]">
            <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
              <Settings className="w-4 h-4 mr-2 text-white" />
              <p className="text-white">Settings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-col">
          <div className="flex flex-1 flex-col h-[600px] bg-[#29282a] items-start justify-center m-4 ml-2 rounded-md">
            <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
              <Camera className="w-4 h-4 mr-2 text-white" />
              <p className="text-white font-bold">LIVE CAMERA FEED</p>
            </div>
            <img src="" alt="" className="w-[640px] h-[480px] m-12 mt-8" />
          </div>
          <div className="flex bg-[#29282a] ml-2 mr-4 rounded-md h-[200px]">
            <div className="flex w-full h-[50px] bg-[#36363b] rounded-tl-md rounded-tr-md items-center pl-4">
              <GitGraph className="w-4 h-4 mr-2 text-white" />
              <p className="text-white">Statistics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
