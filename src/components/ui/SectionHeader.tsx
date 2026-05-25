"use client";

import { Stack, Text, Title } from "@mantine/core";
import { motion, useReducedMotion } from "framer-motion";

type SectionHeaderProps = {
  title: React.ReactNode;
  body?: string;
  maxWidth?: number;
};

const viewport = { once: true, margin: "-40px 0px" };

export function SectionHeader({
  title,
  body,
  maxWidth = 640,
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const itemTransition = reduceMotion
    ? { duration: 0.3 }
    : { duration: 0.8, ease: "easeOut" as const };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : 0.15 },
        },
      }}
    >
      <Stack gap="sm">
        <motion.div variants={fadeUp} transition={itemTransition}>
          <Title
            order={2}
            fz={{ base: "1.5rem", md: "2.5rem" }}
            maw={{ base: "100%", md: maxWidth }}
          >
            {title}
          </Title>
        </motion.div>
        {body && (
          <motion.div variants={fadeUp} transition={itemTransition}>
            <Text
              fz={{ base: "xs", md: "md" }}
              c="rgba(255,255,255,0.5)"
              maw={maxWidth}
            >
              {body}
            </Text>
          </motion.div>
        )}
      </Stack>
    </motion.div>
  );
}
