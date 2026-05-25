"use client";

import { Anchor, Box, Container, Stack, Text, Title } from "@mantine/core";
import { contactContent } from "@/config/content/contact";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import classes from "./index.module.css";

const companyDetails = [
  { label: "Company", value: siteConfig.company.legalName },
  { label: "ABN", value: siteConfig.company.abn },
  { label: "Location", value: siteConfig.company.location },
] as const;

export function ContactSection() {
  const { hero, form } = contactContent;

  return (
    <Container size="xl" py={{ base: 48, md: 80 }} px={{ base: 24, md: 64 }}>
      <Stack gap="lg">
        <Box className={classes.layout}>
          <AnimatedReveal className={classes.heroColumn}>
            <Stack gap="lg">
              <AnimatedReveal.Item>
                <Text className={classes.eyebrow}>{hero.eyebrow}</Text>
              </AnimatedReveal.Item>
              <AnimatedReveal.Item>
                <Title order={1} fz={{ base: "1.75rem", md: "2.5rem" }} lh={1.15}>
                  {hero.title}
                </Title>
              </AnimatedReveal.Item>
              <AnimatedReveal.Item>
                <Text fz={{ base: "sm", md: "md" }} c="rgba(255,255,255,0.55)" lh={1.75}>
                  {hero.intro}
                </Text>
              </AnimatedReveal.Item>
            </Stack>
          </AnimatedReveal>

          <AnimatedReveal className={classes.formColumn}>
            <Stack gap="xl">
              <AnimatedReveal.Item>
                <Box className={classes.formPanel}>
                  <Text className={classes.formSubtitle}>{form.subtitle}</Text>
                  <ContactForm />
                </Box>
              </AnimatedReveal.Item>
            </Stack>
          </AnimatedReveal>
        </Box>

        <AnimatedReveal>
          <Box className={classes.infoBlock}>
            <AnimatedReveal.Item>
              <Text className={classes.infoTitle}>Company details</Text>
            </AnimatedReveal.Item>
            <Stack gap={0}>
              {companyDetails.map(({ label, value }) => (
                <AnimatedReveal.Item key={label}>
                  <InfoRow label={label} value={value} />
                </AnimatedReveal.Item>
              ))}
              <AnimatedReveal.Item>
                <InfoRow
                  label="Email"
                  value={
                    <Anchor
                      href={`mailto:${siteConfig.email}`}
                      className={classes.emailLink}
                      underline="never"
                    >
                      {siteConfig.email}
                    </Anchor>
                  }
                />
              </AnimatedReveal.Item>
            </Stack>
          </Box>
        </AnimatedReveal>
      </Stack>
    </Container>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <Box className={classes.infoRow}>
      <Text component="span" className={classes.infoLabel}>
        {label}
      </Text>
      <Box component="span" className={classes.infoValue}>
        {value}
      </Box>
    </Box>
  );
}
