"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import FrozenRoute from "./HOC/frozen-route";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default LayoutWrapper;
