import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import { GlowingSpan } from "@/components/ui/GlowingSpan";
import { LinkButton } from "@/components/ui/LinkButton";
import classes from "./index.module.css";

export function AboutCta() {
  const { cta } = aboutContent;

  return (
    <Box component="section" className={classes.section}>
      <Container size="xl" p="xl">
        <Stack align="center" ta="center" gap="md">
          <Title order={2} className={classes.title}>
            {cta.title}{" "}
            <GlowingSpan>{cta.titleAccent}</GlowingSpan>
            {cta.titleSuffix}
          </Title>
          <Text className={classes.body}>{cta.body}</Text>
          <LinkButton href={cta.href} size="md" mt="sm">
            {cta.buttonLabel}
          </LinkButton>
        </Stack>
      </Container>
    </Box>
  );
}
