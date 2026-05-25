import { Container, Stack, Text, Title } from "@mantine/core";
import { SectionEyebrow } from "@/components/ui/EyebrowBadge";
import classes from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <Container
      size={1100}
      pt={{ base: 120, md: 160 }}
      pb={{ base: 60, md: 80 }}
      px={{ base: 24, md: 60 }}
    >
      <Stack gap="lg">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <Title order={1} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.intro}>{intro}</Text>
        {children}
      </Stack>
    </Container>
  );
}
