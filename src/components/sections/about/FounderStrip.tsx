import { Box, Group, Stack, Text } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import classes from "./FounderStrip.module.css";

export function FounderStrip() {
  const { founder } = aboutContent;

  return (
    <Group align="flex-start" className={classes.strip} wrap="wrap">
      <Box className={classes.avatar}>{founder.initials}</Box>
      <Stack gap={4} style={{ flex: 1, minWidth: 160 }}>
        <Text className={classes.name}>{founder.name}</Text>
        <Text className={classes.role}>{founder.role}</Text>
      </Stack>
      <Text className={classes.bio}>{founder.bio}</Text>
    </Group>
  );
}
