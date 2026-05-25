import { Box, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import { SectionHeader } from "@/components/ui/SectionHeader";
import classes from "./index.module.css";

export function PhasesSection() {
  const { phases } = homeContent;

  return (
    <Container size="xl" p="xl">
      <Stack gap="lg">
        <SectionHeader title={phases.title} body={phases.body} />
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing={0}
          className={classes.grid}
        >
          {phases.items.map((phase) => (
            <Box key={phase.phase} className={classes.phase}>
              <Stack gap="sm">
                <Text className={classes.phaseNum}>{phase.phase}</Text>
                <Title order={4} className={classes.phaseTitle}>
                  {phase.title}
                </Title>
                <Text className={classes.phaseDescription}>
                  {phase.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
