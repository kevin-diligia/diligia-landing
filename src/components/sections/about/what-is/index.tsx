"use client";

import { Container, Stack, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import classes from "./index.module.css";

export function WhatIsSection() {
  const { whatIs } = aboutContent;

  return (
    <Container size="xl" p="xl" component="section">
      <AnimatedReveal>
        <Stack gap="lg" maw={720}>
          <AnimatedReveal.Item>
            <Text className={classes.eyebrow}>{whatIs.eyebrow}</Text>
          </AnimatedReveal.Item>
          <AnimatedReveal.Item>
            <Title order={1} fz={{ base: "1.75rem", md: "2.75rem" }} lh={1.15}>
              {whatIs.title}
            </Title>
          </AnimatedReveal.Item>
          <AnimatedReveal.Item>
            <Text fz={{ base: "sm", md: "md" }} c="rgba(255,255,255,0.55)" lh={1.75}>
              {whatIs.body}
            </Text>
          </AnimatedReveal.Item>
        </Stack>
      </AnimatedReveal>
    </Container>
  );
}
