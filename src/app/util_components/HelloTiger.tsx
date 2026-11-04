import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const HelloTiger = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      style={{ y: smoothY, scale: smoothScale, rotate: smoothRotate }}
      ref={ref}
      aria-hidden="true"
      className="hello-tiger-motion pointer-events-none h-full w-full"
    >
      <Image
        src="/gifs/Cute Robot.gif"
        alt=""
        unoptimized
        className="h-full w-full object-contain"
        width={300}
        height={300}
      />
    </motion.div>
  );
};
