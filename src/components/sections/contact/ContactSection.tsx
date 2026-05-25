import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { contactContent } from "@/config/content/contact";
import { siteConfig } from "@/config/site";
import { PerkList } from "@/components/ui/CheckIcon";
import { ContactForm } from "@/components/forms/ContactForm";
import classes from "./ContactSection.module.css";

export function ContactSection() {
  const { partnerCallout } = contactContent;
  const { company } = siteConfig;

  return (
    <Container
      size={1100}
      py={{ base: 40, md: 80 }}
      px={{ base: 24, md: 60 }}
    >
      <div className={classes.layout}>
        <Stack gap="xl">
          <Box className={classes.callout}>
            <Title order={3} className={classes.calloutTitle}>
              {partnerCallout.title}
            </Title>
            <Text className={classes.calloutText}>
              {partnerCallout.description}
            </Text>
            <Stack gap={8} mt="md">
              <PerkList perks={partnerCallout.perks} />
            </Stack>
          </Box>

          <Box className={classes.infoBlock}>
            <Text className={classes.infoTitle}>Company details</Text>
            <Stack gap={0}>
              <InfoRow label="Company" value={company.legalName} />
              <InfoRow label="ABN" value={company.abn} />
              <InfoRow label="Location" value={company.location} />
              <InfoRow
                label="Email"
                value={
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={classes.emailLink}
                  >
                    {siteConfig.email}
                  </a>
                }
              />
            </Stack>
          </Box>
        </Stack>

        <Box className={classes.formPanel}>
          <Title order={2} className={classes.formTitle}>
            {contactContent.form.title}
          </Title>
          <Text className={classes.formSubtitle}>
            {contactContent.form.subtitle}
          </Text>
          <ContactForm />
        </Box>
      </div>
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
      <Text className={classes.infoLabel}>{label}</Text>
      <Text className={classes.infoValue}>{value}</Text>
    </Box>
  );
}
