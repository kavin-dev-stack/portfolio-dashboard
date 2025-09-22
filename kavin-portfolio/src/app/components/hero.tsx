import MotionWrapper from "../components/MotionWrapper";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <MotionWrapper
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m Kavin
        </h1>
        <p className="text-xl md:text-2xl">Frontend & Full Stack Developer</p>
      </MotionWrapper>

      <MotionWrapper
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          See My Work
        </a>
      </MotionWrapper>
    </section>
  );
}
