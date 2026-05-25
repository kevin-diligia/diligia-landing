import { Anchor, Box, Container, Divider, SimpleGrid, Stack, Text } from "@mantine/core";
import { DiligiaLogo } from "@/components/brand/DiligiaLogo";
import { LinkAnchor } from "@/components/ui/LinkButton";
import { siteConfig } from "@/config/site";

const linkProps = {
  underline: "never" as const,
  fz: "sm" as const,
  "data-footer-link": true,
  style: {
    color: "rgba(255, 255, 255, 0.5)",
    textDecoration: "none",
    lineHeight: 1.5,
    transition: "color 0.2s",
  },
};

const columnTitle = {
  fz: "xs",
  fw: 600,
  tt: "uppercase" as const,
  c: "rgba(255, 255, 255, 0.35)",
  style: { letterSpacing: "0.12em", marginBottom: 2 },
};

const bodyText = {
  fz: "sm" as const,
  c: "rgba(255, 255, 255, 0.5)",
  lh: 1.5,
};

export function Footer() {
  const { company, footer } = siteConfig;

  return (
    <Box
      component="footer"
      mt="auto"
      py={{ base: 32, md: 40 }}
      pb={{ base: 24, md: 32 }}
      style={{ borderTop: "1px solid rgba(29, 158, 117, 0.15)" }}
    >
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap={"sm"} maw={400}>
            <DiligiaLogo variant="icon" height={32} />
            <Text fz={"md"} c="rgba(255, 255, 255, 0.8)" lh={1.5}>
              {siteConfig.tagline}
            </Text>
            <Text fz={"xs"} c="rgba(255, 255, 255, 0.4)" lh={1.55}>
              {siteConfig.description}
            </Text>
          </Stack>

          <Divider color="rgba(29, 158, 117, 0.12)" />

          <SimpleGrid cols={{ base: 2, xs: 3 }} spacing="lg">
            <Stack gap={6}>
              <Text {...columnTitle}>Pages</Text>
              {footer.links.map((link) => (
                <LinkAnchor key={link.href} href={link.href} {...linkProps}>
                  {link.label}
                </LinkAnchor>
              ))}
            </Stack>

            <Stack gap={6}>
              <Text {...columnTitle}>Contact</Text>
              <Anchor href={`mailto:${siteConfig.email}`} {...linkProps}>
                {siteConfig.email}
              </Anchor>
              <Text {...bodyText}>{company.location}</Text>
            </Stack>

            <Stack gap={6}>
              <Text {...columnTitle}>Legal</Text>
              <Text {...bodyText}>{company.legalName}</Text>
              <Text {...bodyText}>ACN {company.acn}</Text>
              <Text {...bodyText}>ABN {company.abn}</Text>
            </Stack>
          </SimpleGrid>

          <Divider color="rgba(29, 158, 117, 0.12)" />

          <Text fz={11} c="rgba(255, 255, 255, 0.2)">
            © 2026 {company.legalName} · {company.location}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
