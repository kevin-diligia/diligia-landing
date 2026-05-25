"use client";

import { createContext, useContext } from "react";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

export const fadeUpViewport = { once: true, margin: "-40px 0px" } as const;

type FadeUpContextValue = {
  fadeUp: Variants;
  itemTransition: Transition;
};

const FadeUpContext = createContext<FadeUpContextValue | null>(null);

function useFadeUpContext() {
  const ctx = useContext(FadeUpContext);
  if (!ctx) {
    throw new Error("AnimatedReveal.Item must be used within AnimatedReveal");
  }
  return ctx;
}

function useFadeUpMotion(): FadeUpContextValue & { staggerContainer: Variants } {
  const reduceMotion = useReducedMotion();

  const fadeUp: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const itemTransition: Transition = reduceMotion
    ? { duration: 0.3 }
    : { duration: 0.8, ease: "easeOut" };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.15 },
    },
  };

  return { fadeUp, itemTransition, staggerContainer };
}

type AnimatedRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedReveal({ children, className }: AnimatedRevealProps) {
  const { fadeUp, itemTransition, staggerContainer } = useFadeUpMotion();

  return (
    <FadeUpContext.Provider value={{ fadeUp, itemTransition }}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={staggerContainer}
      >
        {children}
      </motion.div>
    </FadeUpContext.Provider>
  );
}

function AnimatedRevealItem({ children }: { children: React.ReactNode }) {
  const { fadeUp, itemTransition } = useFadeUpContext();

  return (
    <motion.div variants={fadeUp} transition={itemTransition}>
      {children}
    </motion.div>
  );
}

AnimatedReveal.Item = AnimatedRevealItem;
