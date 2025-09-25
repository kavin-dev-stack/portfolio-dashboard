"use client";
import { motion, AnimatePresence } from "framer-motion";

interface SpeechBubbleProps {
  message: string;
  show: boolean;
}

const SpeechBubble = ({ message, show }: SpeechBubbleProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute left-[90px] top-[625px] w-1/2 h-full hidden md:block pointer-events-none z-0"
        >
          <div className="relative bg-amber-500 text-gray-900 px-4 py-2 rounded-xl shadow-lg border border-amber-500 text-sm w-40 text-center">
            {message}
            {/* Tail of the speech bubble */}
            <div className="absolute left-0 bottom-[20px] -translate-x-1/2 w-3 h-3 bg-amber-500 border-l border-t border-amber-500 rotate-45"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpeechBubble;
