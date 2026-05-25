import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { CircleCheck } from "lucide-react";
import { thankYouContent } from "@/config/content/contact";
import { siteConfig } from "@/config/site";
import { LinkButton } from "@/components/ui/LinkButton";
import classes from "./ThankYouSection.module.css";

export function ThankYouSection() {
  const content = thankYouContent;

  return (
    <Box component="section" className={classes.main}>
      <Box className={classes.bg} />
      <Box className={classes.grid} />
      <Container size={600} px={40} className={classes.content}>
        <Stack align="center" ta="center" gap="md">
          <Box className={classes.check}>
            <CircleCheck size={32} color={siteConfig.colors.teal} aria-hidden />
          </Box>

          <Title order={1} className={classes.title}>
            {content.title}
          </Title>

          <Text className={classes.body}>{content.body}</Text>

          <LinkButton href="/" size="md" mt="md">
            {content.buttonLabel}
          </LinkButton>
        </Stack>
      </Container>
    </Box>
  );
}
