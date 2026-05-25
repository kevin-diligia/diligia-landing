import { Box, Container, Group, Text } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import classes from "./AudienceStrip.module.css";

export function AudienceStrip() {
  const { audience } = homeContent;

  return (
    <Box className={classes.strip}>
      <Container size={1100} px={{ base: 24, md: 60 }}>
        <Group gap={32} wrap="wrap" align="center">
          <Text className={classes.label}>{audience.label}</Text>
          <Group gap={12} wrap="wrap">
            {audience.tags.map((tag) => (
              <Text key={tag} className={classes.tag}>
                {tag}
              </Text>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
