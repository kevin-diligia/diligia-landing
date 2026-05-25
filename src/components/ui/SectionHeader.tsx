import { Stack, Text, Title } from "@mantine/core";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  maxWidth?: number;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  maxWidth = 600,
}: SectionHeaderProps) {
  return (
    <Stack gap="md">
      <Text
        size="xs"
        fw={500}
        tt="uppercase"
        c="teal.5"
        style={{ letterSpacing: "0.18em" }}
      >
        {eyebrow}
      </Text>
      <Title
        order={2}
        style={{
          fontSize: "clamp(32px, 4vw, 50px)",
          lineHeight: 1.15,
        }}
      >
        {title}
      </Title>
      {body && (
        <Text
          size="lg"
          fw={300}
          c="rgba(255,255,255,0.5)"
          maw={maxWidth}
          style={{ lineHeight: 1.8 }}
        >
          {body}
        </Text>
      )}
    </Stack>
  );
}
