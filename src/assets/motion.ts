import { MotionProps, Variants } from "framer-motion"

const fadeInOutVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: .33 } },
    exit: { 
      opacity: 0,
      transition: { type: 'tween', duration: .25 }
    }
  }
  
const fadeInOutProps: MotionProps = {
    variants: fadeInOutVariants,
    initial: 'hidden',
    animate: 'visible',
    exit: 'exit'
}

export { fadeInOutProps }