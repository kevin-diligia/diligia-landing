import { Box, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import { SectionHeader } from "@/components/ui/SectionHeader";
import classes from "./ValuesGrid.module.css";

export function ValuesGrid() {
  const { values } = aboutContent;

  return (
    <Container size={1100} py={{ base: 60, md: 80 }} px={{ base: 24, md: 60 }}>
      <SectionHeader
        eyebrow={values.eyebrow}
        title={
          <>
            {values.title}
            <br />
            <span className="italic-accent">{values.titleAccent}</span>
          </>
        }
        body={values.body}
        maxWidth={620}
      />

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" mt={48}>
        {values.items.map((value) => (
          <Box key={value.num} className={classes.card}>
            <Text className={classes.num}>{value.num}</Text>
            <Title order={4} className={classes.title}>
              {value.title}
            </Title>
            <Text className={classes.description}>{value.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
