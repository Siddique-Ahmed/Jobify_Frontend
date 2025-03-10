import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [lightMode, setLightMode] = useState("light");

  const toggleMode = () => {
    setLightMode(lightMode === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleMode}
      className={`
        flex items-center w-14 h-8 p-1 rounded-full cursor-pointer transition-all duration-500
        ${lightMode === "light" ? "bg-gray-200" : "bg-gray-900"}
      `}
    >
      <motion.div
        className="w-6 h-6 flex items-center justify-center rounded-full text-white shadow-md"
        initial={{ x: lightMode === "light" ? 0 : 24 }}
        animate={{ x: lightMode === "light" ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          backgroundColor: lightMode === "light" ? "var(--dark-bg)" : "var(--light-bg)",
        }}
      >
        {lightMode === "light" ? (
          <IoMdSunny className="text-white" />
        ) : (
          <IoMdMoon className="text-white" />
        )}
      </motion.div>
    </div>
  );
}