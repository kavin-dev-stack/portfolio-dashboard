"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export default function MotionWrapper({
  children,
  ...props
}: MotionWrapperProps) {
  return <motion.div {...props}>{children}</motion.div>;
}
