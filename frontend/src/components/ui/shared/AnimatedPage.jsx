import { motion } from 'framer-motion'
const animations = {
    initial: { opacity: 0, filter: "blur(5px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(5px)" },
    transition: { duration: 0.4, ease: "easeOut" }
  }
  
  
  

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.transition}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
