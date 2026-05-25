import { Box, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import { SectionHeader } from "@/components/ui/SectionHeader";
import classes from "./index.module.css";

export function ProductGrid() {
  const { platform } = aboutContent;

  return (
    <Container size={"xl"} p={"xl"}>
      <SectionHeader title={platform.title} body={platform.body} />

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={0} mt={48} className={classes.grid}>
        {platform.layers.map((layer) => (
          <Box key={layer.num} style={{
            padding: "24px 16px",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.02)",
          }}>
            <Text fz={{ base: "xs", md: "sm" }}>{layer.num}</Text>
            <Title order={4} fz={{ base: "1.25rem", md: "1.5rem" }}>
              {layer.title}
            </Title>
            <Text fz={{ base: "xs", md: "md" }}>{layer.description}</Text>
            <Stack gap={6} mt="sm">
              {layer.features.map((feature) => (
                <Text key={feature} fz={{ base: "xs", md: "md" }}>
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
