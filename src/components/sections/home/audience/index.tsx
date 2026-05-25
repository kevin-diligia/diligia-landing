import { Box, Container, Group, Text } from "@mantine/core";
import { homeContent } from "@/config/content/home";
import classes from "./index.module.css";

function TagRow({
  tags,
  duplicate = false,
}: {
  tags: readonly string[];
  duplicate?: boolean;
}) {
  return (
    <div className={classes.tagRow} aria-hidden={duplicate || undefined}>
      {tags.map((tag) => (
        <Text key={`${duplicate ? "dup-" : ""}${tag}`} className={classes.tag}>
          {tag}
        </Text>
      ))}
    </div>
  );
}

export function AudienceStrip() {
  const { audience } = homeContent;
  const tags = [...audience.tags];

  return (
    <Box
      style={{
        background: "rgba(0, 255, 157, 0.025)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "12px 0",
      }}
    >
      <Container size={"100%"} px={{ base: 16, md: 64 }}>
        <Group gap={32} wrap="nowrap" align="center" className={classes.strip}>
          <Text size="xs" opacity={0.8} tt="uppercase" className={classes.label}>
            {audience.label}
          </Text>
          <div
            className={classes.marquee}
            aria-label={tags.join(", ")}
          >
            <div className={classes.marqueeTrack}>
              <TagRow tags={tags} />
              <TagRow tags={tags} duplicate />
            </div>
          </div>
        </Group>
      </Container>
    </Box>
  );
}
