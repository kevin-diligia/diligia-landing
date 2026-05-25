"use client";

import { Stack, Text, Title } from "@mantine/core";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

type SectionHeaderProps = {
  title: React.ReactNode;
  body?: string;
  maxWidth?: number;
};

export function SectionHeader({
  title,
  body,
  maxWidth = 640,
}: SectionHeaderProps) {
  return (
    <AnimatedReveal>
      <Stack gap="sm">
        <AnimatedReveal.Item>
          <Title
            order={2}
            fz={{ base: "1.5rem", md: "2.5rem" }}
            maw={{ base: "100%", md: maxWidth }}
          >
            {title}
          </Title>
        </AnimatedReveal.Item>
        {body && (
          <AnimatedReveal.Item>
            <Text
              fz={{ base: "xs", md: "md" }}
              c="rgba(255,255,255,0.5)"
              maw={maxWidth}
            >
              {body}
            </Text>
          </AnimatedReveal.Item>
        )}
      </Stack>
    </AnimatedReveal>
  );
}
