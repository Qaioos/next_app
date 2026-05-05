"use client"

import { motion } from "framer-motion";


const RightToLeft = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}


export default RightToLeft
