"use client"

import { motion } from "framer-motion"

function Loader() {
  return (
    <div className="flex justify-center items-center p-10 rounded-lg h-screen">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

export default Loader
