import { Box, Group, Stack, Text, Title } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import { siteConfig } from "@/config/site";
import { GlowingSpan } from "@/components/ui/GlowingSpan";
import { LinkButton } from "@/components/ui/LinkButton";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import { Stats } from "./stats";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <Box component="section" className={classes.hero} mt={"-40px"}>

      <Stack gap={"xl"} className={classes.heroContent}>
        <Stack gap={"xs"} align="flex-start" maw={{ base: "100%", md: "60%" }}>
          <Title order={1} ta={"left"} fz={{ base: "1.5rem", md: "3rem" }}>
            {hero.title}{" "}
            <GlowingSpan>{hero.titleAccent}</GlowingSpan>{" "}
            {hero.titleSuffix}
          </Title>
          <Text fz={{ base: "xs", md: "md" }} ta={"left"} maw={{ base: "100%", md: "75%" }}>
            Built for{" "}
            <GlowingSpan>
              agents, vendors, purchasers, and their advisors.
            </GlowingSpan>{" "}
            One workspace, from campaign launch through to settlement.
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
        <Stats />
      </Stack>



      {/* Hero Decorations */}
      <Box className={classes.heroBg} />
      <Box className={classes.heroCityscape} aria-hidden>
        <Image
          src="/images/cityscape.avif"
          width={1000}
          height={1000}
          alt=""
          className={classes.heroCityscapeImage}
        />
      </Box>
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



    </Box >
  );
}
