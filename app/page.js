"use client";


import Link from "next/link";
import Image from "next/image";

import {motion} from "framer-motion";


export default function Home() {
  return (
    <main className='layout flex-col min-h-screen w-screen gap-12'>
      <motion.img initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 0.6}} src={"./pan.color.circle.svg"} height={250} width={250} alt="code9900 profile image"/>

      <motion.div initial={{opacity:0, y: 60}} animate={{opacity:1, y: 0}} transition={{delay: 1.2}} className="layout flex-col w-full p-0">
        <div className="bg-yellow-200 rounded-full layout h-6 w-1/2">
          <h1 className="text-black scale-90 rotate-3 md:scale-100">Hi, I'm code9900</h1>
        </div>
      </motion.div>
    </main>
  )
}
