import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import { LinkButton } from "@/components/ui/LinkButton";
import classes from "./AboutCta.module.css";

export function AboutCta() {
  const { cta } = aboutContent;

  return (
    <Box component="section" className={classes.section}>
      <Container size={500} px={{ base: 24, md: 60 }}>
        <Stack align="center" ta="center" gap="md">
          <Title order={2} className={classes.title}>
            {cta.title}
            <br />
            <span className="italic-accent">{cta.titleAccent}</span>
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
