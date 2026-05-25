import { Container, Stack, Text, Title } from "@mantine/core";

type PageHeroProps = {
  title: React.ReactNode;
  intro: string;
  children?: React.ReactNode;
};

export function PageHero({ title, intro, children }: PageHeroProps) {
  return (
    <Container
      size={"xl"}
      p={"xl"}
    >
      <Stack gap="lg">
        <Title order={1} fz={{ base: "1.5rem", md: "2.5rem" }}>
          {title}
        </Title>
        <Text fz={{ base: "xs", md: "md" }}>{intro}</Text>
        {children}
      </Stack>
    </Container>
  );
}
