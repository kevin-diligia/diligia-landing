import { Anchor, Box, Container, Stack, Text, Title } from "@mantine/core";
import { contactContent } from "@/config/content/contact";
import { siteConfig } from "@/config/site";
import { PerkList } from "@/components/ui/PerkList";
import { ContactForm } from "@/components/forms/ContactForm";
import classes from "./index.module.css";

const companyDetails = [
  { label: "Company", value: siteConfig.company.legalName },
  { label: "ABN", value: siteConfig.company.abn },
  { label: "Location", value: siteConfig.company.location },
] as const;

export function ContactSection() {
  const { partnerCallout, form } = contactContent;

  return (
    <Container size="xl" py={{ base: 48, md: 80 }} px={{ base: 24, md: 64 }}>
      <Box className={classes.layout}>
        <Stack gap="xl">
          <Box className={classes.callout}>
            <Title order={3} className={classes.calloutTitle}>
              {partnerCallout.title}
            </Title>
            <Text className={classes.calloutText}>{partnerCallout.description}</Text>
            <Stack gap={8} mt="md">
              <PerkList perks={partnerCallout.perks} />
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

        <Box className={classes.formPanel}>
          <Title order={2} className={classes.formTitle}>
            {form.title}
          </Title>
          <Text className={classes.formSubtitle}>{form.subtitle}</Text>
          <ContactForm />
        </Box>
      </Box>
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
