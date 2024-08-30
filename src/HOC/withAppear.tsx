import { motion, MotionProps, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const withAppear = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & MotionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const animate = isInView ? { opacity: 1, y: 0 } : {};

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={animate}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withAppear;
