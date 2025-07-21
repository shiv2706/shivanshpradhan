import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimate({
                                          children,
                                          initial = { opacity: 0, y: 50 },
                                          animate = { opacity: 1, y: 0 },
                                          transition = { duration: 0.5, delay: 0.2 },
                                      }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={inView ? animate : initial}
            transition={transition}
        >
            {children}
        </motion.div>
    );
}
