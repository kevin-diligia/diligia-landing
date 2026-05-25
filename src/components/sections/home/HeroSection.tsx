import { Box, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import { siteConfig } from "@/config/site";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { LinkButton } from "@/components/ui/LinkButton";
import { DesignPartnerForm } from "@/components/forms/DesignPartnerForm";
import classes from "./HeroSection.module.css";

export function HeroSection() {
  const { hero, partner, stats } = homeContent;

  return (
    <Box component="section" className={classes.hero}>
      <Box className={classes.heroBg} />
      <Box className={classes.heroGrid} />
      <Box className={classes.heroNodes}>
        <svg viewBox="0 0 900 600" fill="none" aria-hidden>
          <circle cx="180" cy="300" r="60" fill={siteConfig.colors.teal} />
          <circle cx="520" cy="120" r="38" fill={siteConfig.colors.teal} />
          <circle cx="520" cy="480" r="38" fill={siteConfig.colors.teal} />
          <circle cx="760" cy="200" r="24" fill={siteConfig.colors.teal} />
          <circle cx="760" cy="400" r="24" fill={siteConfig.colors.teal} />
          <line
            x1="240"
            y1="264"
            x2="482"
            y2="135"
            stroke={siteConfig.colors.teal}
            strokeWidth="3"
          />
          <line
            x1="240"
            y1="336"
            x2="482"
            y2="465"
            stroke={siteConfig.colors.teal}
            strokeWidth="3"
          />
          <line
            x1="558"
            y1="135"
            x2="736"
            y2="190"
            stroke={siteConfig.colors.teal}
            strokeWidth="2"
          />
          <line
            x1="558"
            y1="465"
            x2="736"
            y2="410"
            stroke={siteConfig.colors.teal}
            strokeWidth="2"
          />
        </svg>
      </Box>

      <Stack align="center" className={classes.heroContent} gap={0}>
        <EyebrowBadge withDot>{hero.eyebrow}</EyebrowBadge>

        <Title order={1} className={classes.heroTitle}>
          {hero.title}{" "}
          <span className="italic-accent">{hero.titleAccent}</span>{" "}
          {hero.titleSuffix}
        </Title>

        <Text className={classes.heroSub}>
          Built for{" "}
          <Text span fw={400} c="rgba(255,255,255,0.8)">
            agents, vendors, purchasers, and their advisors.
          </Text>{" "}
          One intelligent workspace — from campaign launch through to
          post-settlement.
        </Text>

        <Group className={classes.heroCta} justify="center" mt="xl">
          <LinkButton href={hero.primaryCta.href} size="md">
            {hero.primaryCta.label}
          </LinkButton>
          <LinkButton
            href={hero.secondaryCta.href}
            variant="outline"
            size="md"
            styles={{
              root: {
                borderColor: "rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.8)",
                "&:hover": {
                  borderColor: siteConfig.colors.teal,
                  color: siteConfig.colors.teal,
                  backgroundColor: "transparent",
                },
              },
            }}
          >
            {hero.secondaryCta.label}
          </LinkButton>
        </Group>
      </Stack>

      <Box className={classes.partnerBox} id="partner">
        <Box className={classes.partnerHeader}>
          <Text className={classes.partnerBadge}>{partner.badge}</Text>
          <Text size="sm" c="rgba(255,255,255,0.35)" ml={8}>
            {partner.availability}
          </Text>
        </Box>
        <Box className={classes.partnerBody}>
          <Title order={3} className={classes.partnerTitle}>
            {partner.title}
          </Title>
          <Text className={classes.partnerDescription}>{partner.description}</Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" mb="lg">
            {partner.perks.map((perk) => (
              <span
                key={perk}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.4,
                }}
              >
                <CheckIcon />
                {perk}
              </span>
            ))}
          </SimpleGrid>
          <DesignPartnerForm />
        </Box>
      </Box>

      <Group className={classes.stats} justify="center" gap={64}>
        {stats.map((stat) => (
          <Stack key={stat.value} align="center" gap={6} maw={160}>
            <Text className={classes.statValue}>{stat.value}</Text>
            <Text className={classes.statLabel}>{stat.label}</Text>
          </Stack>
        ))}
      </Group>
    </Box>
  );
}
