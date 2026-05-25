import { Anchor, Box, Container, Stack, Text, Title } from "@mantine/core";
import { contactContent } from "@/config/content/contact";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
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
          <Stack gap="lg" className={classes.heroColumn}>
            <Text className={classes.eyebrow}>{hero.eyebrow}</Text>
            <Title order={1} fz={{ base: "1.75rem", md: "2.5rem" }} lh={1.15}>
              {hero.title}
            </Title>
            <Text fz={{ base: "sm", md: "md" }} c="rgba(255,255,255,0.55)" lh={1.75}>
              {hero.intro}
            </Text>
          </Stack>

          <Stack gap="xl" className={classes.formColumn}>
            <Box className={classes.formPanel}>
              <Text className={classes.formSubtitle}>{form.subtitle}</Text>
              <ContactForm />
            </Box>


          </Stack>
        </Box>
        <Box className={classes.infoBlock}>
          <Text className={classes.infoTitle}>Company details</Text>
          <Stack gap={0}>
            {companyDetails.map(({ label, value }) => (
              <InfoRow key={label} label={label} value={value} />
            ))}
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
          </Stack>
        </Box>
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
