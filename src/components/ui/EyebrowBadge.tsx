import { Box, Text } from "@mantine/core";
import classes from "./EyebrowBadge.module.css";

type EyebrowBadgeProps = {
  children: React.ReactNode;
  withDot?: boolean;
};

export function EyebrowBadge({ children, withDot = false }: EyebrowBadgeProps) {
  return (
    <Box className={classes.eyebrow} component="span">
      {withDot && <span className={classes.dot} />}
      <Text component="span" inherit>
        {children}
      </Text>
    </Box>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Text className={classes.sectionEyebrow} component="span">
      {children}
    </Text>
  );
}
