"use client";


import {motion} from "framer-motion";


export default function Home() {
  return (
    <main className='layout min-h-screen w-screen'>
      <motion.div initial={{opacity:0, y: -60, scale:0.6}} animate={{opacity:1, y: 0, scale: 1}} transition={{delay: 0.6}} className="bg-yellow-200 rounded-full layout h-6 w-1/2">
        <h1 className="text-black scale-90 rotate-3 md:scale-100 md:rotate-0 hover:scale-90 hover:rotate-3 transition-all">Hi, I'm code9900</h1>
      </motion.div>
    </main>
  )
}
