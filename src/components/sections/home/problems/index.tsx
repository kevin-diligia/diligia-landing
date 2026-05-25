import { Container, SimpleGrid, Stack } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProblemCard, PROBLEM_ACCENTS } from "./card";

export function ProblemsSection() {
  const { problems } = homeContent;

  return (
    <Container size="xl" p="xl">
      <Stack gap="lg">
        <SectionHeader title={problems.title} body={problems.body} />
        <SimpleGrid cols={{ base: 1, sm: 4 }} spacing={"xs"}>
          {problems.cards.map((card, index) => (
            <ProblemCard
              key={card.title}
              {...card}
              accent={PROBLEM_ACCENTS[index] ?? "teal"}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container >
  );
}
