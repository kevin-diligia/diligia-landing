import { Box, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ValuesGrid() {
  const { values } = aboutContent;

  return (
    <Container size={"xl"} p={"xl"}>
      <SectionHeader title={values.title} body={values.body} />

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" mt={56}>
        {values.items.map((value) => (
          <Box key={value.num} style={{
            padding: "24px 16px",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.02)",
          }}>
            <Text fz={{ base: "xs", md: "md" }}>{value.num}</Text>
            <Title order={4} fz={{ base: "1.25rem", md: "1.5rem" }}>
              {value.title}
            </Title>
            <Text fz={{ base: "xs", md: "md" }}>{value.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
