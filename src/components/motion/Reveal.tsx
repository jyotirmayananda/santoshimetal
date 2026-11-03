'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import {
  blurIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerFast,
  staggerItem,
  viewportOnce,
  viewportSoft,
} from '@/lib/motion';

type Direction = 'up' | 'left' | 'right' | 'scale' | 'blur';

const directionVariants: Record<Direction, Variants> = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  blur: blurIn,
};

interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  soft?: boolean;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  soft = false,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={directionVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={soft ? viewportSoft : viewportOnce}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
  soft?: boolean;
}

export function Stagger({ children, className, fast = false, soft = false }: StaggerProps) {
  return (
    <motion.div
      variants={fast ? staggerFast : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={soft ? viewportSoft : viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
