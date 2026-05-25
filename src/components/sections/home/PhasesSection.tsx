import { Box, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import { SectionHeader } from "@/components/ui/SectionHeader";
import classes from "./PhasesSection.module.css";

export function PhasesSection() {
  const { phases } = homeContent;

  return (
    <Container size={1100} py={{ base: 60, md: 100 }} px={{ base: 24, md: 60 }}>
      <SectionHeader
        eyebrow={phases.eyebrow}
        title={
          <>
            {phases.title}
            <br />
            <span className="italic-accent">{phases.titleAccent}</span>
          </>
        }
        body={phases.body}
      />

      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={0} mt={56} className={classes.grid}>
        {phases.items.map((phase, index) => (
          <Box
            key={phase.phase}
            className={classes.phase}
            style={{
              borderRight:
                index < phases.items.length - 1
                  ? "1px solid rgba(29,158,117,0.1)"
                  : undefined,
            }}
          >
            <Text className={classes.phaseNum}>{phase.phase}</Text>
            <Title order={4} className={classes.phaseTitle}>
              {phase.title}
            </Title>
            <Text className={classes.phaseDescription}>{phase.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
