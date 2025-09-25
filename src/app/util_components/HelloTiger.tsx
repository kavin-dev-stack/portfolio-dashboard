import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const HelloTiger = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Get top offset of the section
  const [offsetTop, setOffsetTop] = useState(500);

  useEffect(() => {
    if (ref.current) {
      setOffsetTop(ref.current.offsetTop);
    }
  }, [ref]);

  // Animate only when section is visible
  const y = useTransform(
    scrollY,
    [offsetTop - 600, offsetTop + 600],
    [100, -100]
  );
  const scale = useTransform(
    scrollY,
    [offsetTop - 600, offsetTop + 600],
    [1, 1.05]
  );
  const rotate = useTransform(
    scrollY,
    [offsetTop - 600, offsetTop + 600],
    [0, 5]
  );

  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      style={{ y: smoothY, scale: smoothScale, rotate: smoothRotate }}
      className="absolute md:top-[715px] md:left-[0] lg:top-[722px] lg:left-[0] w-1/2 h-full hidden md:block pointer-events-none z-0"
    >
      <Image
        src="/gifs/cute-tiger.gif"
        alt="Animated background"
        className="w-28 h-28 object-contain"
        width={100}
        height={100}
      />
    </motion.div>
  );
};
