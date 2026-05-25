"use client";

import { Group, Stack, Text, Title } from "@mantine/core";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { homeContent } from "@/config/content/home";

type Stat = (typeof homeContent.stats)[number];

function TextStatValue({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px 0px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
}

function CountStatValue({
  countTo,
  prefix,
  suffix,
}: {
  countTo: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px 0px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (value) => {
    const formatted = Math.round(value).toLocaleString("en-AU");
    return `${prefix ?? ""}${formatted}${suffix ?? ""}`;
  });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(count, countTo, {
      duration: 2.2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, countTo, isInView]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {display}
    </motion.span>
  );
}

function AnimatedStatValue({ stat }: { stat: Stat }) {
  if ("text" in stat) {
    return <TextStatValue text={stat.text} />;
  }

  return (
    <CountStatValue
      countTo={stat.countTo}
      prefix={"prefix" in stat ? stat.prefix : undefined}
      suffix={stat.suffix}
    />
  );
}

export function Stats() {
  const { stats } = homeContent;

  return (
    <Group justify="flex-start" align="flex-start" gap="lg" mt="xl">
      {stats.map((stat) => (
        <Stack key={stat.label} align="center" gap={6} maw={160}>
          <Title order={3} fw={700}>
            <AnimatedStatValue stat={stat} />
          </Title>
          <Text
            size="xs"
            opacity={0.8}
          >
            {stat.label}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}

export default Stats;
