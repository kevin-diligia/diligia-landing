import { Box, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import classes from "./ProblemsSection.module.css";

function ProblemIcon({ type }: { type: string }) {
  const color = siteConfig.colors.teal;

  switch (type) {
    case "clock":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.5" />
          <path
            d="M10 6v4l3 3"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "checklist":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="14"
            height="14"
            rx="2"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M7 7h6M7 10h6M7 13h4"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "star":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M10 2l2.4 5h5.6l-4.4 3.4 1.6 5.6L10 13l-5.2 3 1.6-5.6L2 7h5.6z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M2 4h16v12H2z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M2 7h16M6 10h8M6 13h5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function ProblemsSection() {
  const { problems } = homeContent;

  return (
    <Container size={1100} py={{ base: 60, md: 100 }} px={{ base: 24, md: 60 }}>
      <SectionHeader
        eyebrow={problems.eyebrow}
        title={
          <>
            {problems.title}
            <br />
            are <span className="italic-accent">{problems.titleAccent}</span>
          </>
        }
        body={problems.body}
      />

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt={56}>
        {problems.cards.map((card) => (
          <Box key={card.title} className={classes.card}>
            <Box className={classes.icon}>
              <ProblemIcon type={card.icon} />
            </Box>
            <Title order={4} className={classes.cardTitle}>
              {card.title}
            </Title>
            <Text className={classes.cardDescription}>{card.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
