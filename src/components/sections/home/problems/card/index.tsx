import { Box, Stack, Text, Title } from "@mantine/core";
import {
  Clock,
  ListChecks,
  Mail,
  Users,
} from "lucide-react";
import { homeContent } from "@/config/content/home";
import { siteConfig } from "@/config/site";
import classes from "./index.module.css";

export const PROBLEM_ACCENTS = ["teal", "yellow", "orange", "red"] as const;
export type ProblemAccent = (typeof PROBLEM_ACCENTS)[number];

const accentColors: Record<ProblemAccent, string> = {
  teal: siteConfig.colors.teal,
  yellow: "#EAB308",
  orange: "#F97316",
  red: "#EF4444",
};

const accentClasses: Record<ProblemAccent, string> = {
  teal: classes.accentTeal,
  yellow: classes.accentYellow,
  orange: classes.accentOrange,
  red: classes.accentRed,
};

function ProblemIcon({ type, color }: { type: string; color: string }) {
  const iconProps = {
    size: "100%",
    color,
    strokeWidth: 0.5,
    "aria-hidden": true,
  } as const;

  switch (type) {
    case "clock":
      return <Users {...iconProps} />;
    case "checklist":
      return <ListChecks {...iconProps} />;
    case "star":
      return <Clock {...iconProps} />;
    default:
      return <Mail {...iconProps} />;
  }
}

export type ProblemCardProps = (typeof homeContent.problems.cards)[number] & {
  accent: ProblemAccent;
};

export function ProblemCard({
  title,
  description,
  icon,
  accent,
}: ProblemCardProps) {
  return (
    <Box
      className={`${classes.card} ${accentClasses[accent]}`}
      mih={{ base: "fit-content", sm: 320 }}
    >
      <Box className={classes.icon}>
        <ProblemIcon type={icon} color={accentColors[accent]} />
      </Box>

      <Stack className={classes.content} justify="space-between">
        <Title order={4} className={classes.cardTitle}>
          {title}
        </Title>
        <Text className={classes.cardDescription}>{description}</Text>
      </Stack>
    </Box>
  );
}
