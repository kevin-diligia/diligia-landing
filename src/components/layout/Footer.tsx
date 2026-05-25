import { Anchor, Box, Container, Divider, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { DiligiaLogo, DiligiaWordmark } from "@/components/brand/DiligiaLogo";
import { LinkAnchor } from "@/components/ui/LinkButton";
import { siteConfig } from "@/config/site";
import classes from "./Footer.module.css";

export function Footer() {
  const { company, footer } = siteConfig;

  return (
    <Box component="footer" className={classes.footer}>
      <Container size={1100} px={{ base: 24, md: 60 }}>
        <Stack gap="xl">
          <Stack gap="sm" maw={480}>
            <Group gap="sm">
              <DiligiaLogo size={26} />
              <DiligiaWordmark size="sm" />
            </Group>
            <Text className={classes.tagline} fs="italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </Text>
            <Text size="sm" c="rgba(255,255,255,0.4)" lh={1.7}>
              {siteConfig.description}
            </Text>
          </Stack>

          <Divider color="rgba(29,158,117,0.15)" />

          <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="xl">
            <Stack gap="sm">
              <Text className={classes.columnTitle}>Explore</Text>
              {footer.exploreLinks.map((link) => (
                <LinkAnchor
                  key={link.href}
                  href={link.href}
                  className={classes.footerLink}
                >
                  {link.label}
                </LinkAnchor>
              ))}
            </Stack>

            <Stack gap="sm">
              <Text className={classes.columnTitle}>Company</Text>
              {footer.companyLinks.map((link) => (
                <LinkAnchor
                  key={link.href}
                  href={link.href}
                  className={classes.footerLink}
                >
                  {link.label}
                </LinkAnchor>
              ))}
            </Stack>

            <Stack gap="sm">
              <Text className={classes.columnTitle}>Contact</Text>
              <Anchor
                href={`mailto:${siteConfig.email}`}
                className={classes.footerLink}
              >
                {siteConfig.email}
              </Anchor>
              <Text className={classes.footerText}>{company.location}</Text>
            </Stack>

            <Stack gap="sm">
              <Text className={classes.columnTitle}>Legal</Text>
              <Text className={classes.footerText}>{company.legalName}</Text>
              <Text className={classes.footerText}>ACN {company.acn}</Text>
              <Text className={classes.footerText}>ABN {company.abn}</Text>
            </Stack>
          </SimpleGrid>

          <Divider color="rgba(29,158,117,0.15)" />

          <Text className={classes.copyright}>
            © 2026 {company.legalName} · {company.location}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
