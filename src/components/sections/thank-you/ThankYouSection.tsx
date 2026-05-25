import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { thankYouContent } from "@/config/content/contact";
import { siteConfig } from "@/config/site";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
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
            <svg viewBox="0 0 32 32" fill="none" aria-hidden>
              <circle
                cx="16"
                cy="16"
                r="15"
                stroke={siteConfig.colors.teal}
                strokeWidth="1.5"
              />
              <path
                d="M9 16.5l5 5 9-10"
                stroke={siteConfig.colors.teal}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <EyebrowBadge>{content.eyebrow}</EyebrowBadge>

          <Title order={1} className={classes.title}>
            {content.title}
            <br />
            <span className="italic-accent">{content.titleAccent}</span>
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
