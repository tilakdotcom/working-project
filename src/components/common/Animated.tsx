import { cn } from "@/common/lib/utils";
import React from "react";
import { motion, MotionProps } from "framer-motion";

type AnimatedDivProps = {
  className?: string;
  children: React.ReactNode;
  visible: boolean;
  startPosition?: string;
  endPosition?: string;
  duration?: string;
};

export default function AnimatedDiv({
  children,
  className,
  visible,
  startPosition = "translate-y-10 ",
  endPosition = "translate-y-0 ",
  duration = "1000",
}: AnimatedDivProps) {
  return (
    <div
      className={cn(
        `mask-auto transform ${
          visible
            ? `${endPosition} opacity-100 `
            : `${startPosition} opacity-0 `
        } transition-all ease-out`,
        className
      )}
      style={{
        transitionDuration: duration + "ms",
      }}
    >
      {children}
    </div>
  );
}

type BottomLineProps = {
  className?: string;
  visible: boolean;
};

export const BottomLine = ({ className, visible }: BottomLineProps) => {
  return (
    <span
      className={cn(
        `absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-tr from-gold-300 to-gold-700 transform origin-left transition-transform duration-1000 ease-out rounded-full ${
          visible ? "scale-x-100" : "scale-x-0"
        }`,
        className
      )}
    />
  );
};

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
  ease?: string | number[];
  initialScale?: number;
}
export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className,
  initialX = 0,
  initialY = 0,
  initialScale = 0.98,
  duration = 0.5,
  delay = 0,
  ease = "easeOut",
}) => (
  <motion.div
    className={className}
    initial={{ x: initialX, y: initialY, scale: initialScale, opacity: 0 }}
    whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
    transition={{ duration, delay, ease }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
