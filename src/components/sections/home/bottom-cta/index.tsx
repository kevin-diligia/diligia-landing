import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import { GlowingSpan } from "@/components/ui/GlowingSpan";
import { LinkButton } from "@/components/ui/LinkButton";
import classes from "./index.module.css";

export function BottomCtaSection() {
  const { bottomCta } = homeContent;

  return (
    <Box component="section" className={classes.section}>
      <Box className={classes.bg} />
      <Container size={680} px={{ base: 24, md: 60 }} className={classes.content}>
        <Stack align="center" ta="center" gap="md">
          <Title order={2} className={classes.title}>
            {bottomCta.title}{" "}
            <GlowingSpan>{bottomCta.titleAccent}</GlowingSpan>
            {bottomCta.titleSuffix}
          </Title>
          <Text className={classes.body}>{bottomCta.body}</Text>
          <LinkButton href={bottomCta.cta.href} size="md" mt="md">
            {bottomCta.cta.label}
          </LinkButton>
        </Stack>
      </Container>
    </Box>
  );
}
