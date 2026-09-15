import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

const wrap = (min: number, max: number, v: number): number => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

type ScrollVelocityProps = {
  text: string;
  baseVelocity?: number;
};

export const ScrollVelocity = ({ text, baseVelocity = 2 }: ScrollVelocityProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  type ScrollVelocityProps = {
  text: string;
  baseVelocity?: number;
};

return (
    <div className="overflow-hidden m-0 flex flex-nowrap w-full">
      <motion.div
        className="flex whitespace-nowrap text-[8vw] font-bold uppercase text-white/5 tracking-tighter"
        style={{ x }}
      >
        <span className="block mr-12">{text}</span>
        <span className="block mr-12">{text}</span>
        <span className="block mr-12">{text}</span>
        <span className="block mr-12">{text}</span>
      </motion.div>
    </div>
  );
};
