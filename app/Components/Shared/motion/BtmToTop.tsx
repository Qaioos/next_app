"use client"
import { motion } from 'framer-motion'

const BtmToTop = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
    initial={{ y: 200 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    
    >

    {children}
      
    </motion.div>
  )
}

export default BtmToTop
