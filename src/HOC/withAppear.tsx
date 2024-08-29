import React, { useRef } from 'react';
import { motion, MotionProps, useInView } from 'framer-motion';

type WithAppearProps = MotionProps & {
  children?: React.ReactNode;
};

const withAppear = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & WithAppearProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        {...props}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withAppear;
