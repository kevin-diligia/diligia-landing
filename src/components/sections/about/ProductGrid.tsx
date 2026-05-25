import { Box, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import { SectionHeader } from "@/components/ui/SectionHeader";
import classes from "./ProductGrid.module.css";

export function ProductGrid() {
  const { platform } = aboutContent;

  return (
    <Container size={1100} py={{ base: 60, md: 80 }} px={{ base: 24, md: 60 }}>
      <SectionHeader
        eyebrow={platform.eyebrow}
        title={
          <>
            {platform.title}
            <br />
            <span className="italic-accent">{platform.titleAccent}</span>
          </>
        }
        body={platform.body}
        maxWidth={620}
      />

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={0} mt={48} className={classes.grid}>
        {platform.layers.map((layer) => (
          <Box key={layer.num} className={classes.card}>
            <Text className={classes.num}>{layer.num}</Text>
            <Title order={4} className={classes.title}>
              {layer.title}
            </Title>
            <Text className={classes.description}>{layer.description}</Text>
            <Stack gap={6} mt="sm">
              {layer.features.map((feature) => (
                <Text key={feature} className={classes.feature}>
                  {feature}
                </Text>
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
