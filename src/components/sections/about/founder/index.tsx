import { Anchor, Box, Container, Group, Stack, Text, Title } from "@mantine/core";
import { aboutContent } from "@/config/content/about";
import classes from "./index.module.css";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function FounderSection() {
  const { founder } = aboutContent;

  return (
    <Container size="xl" p="xl" component="section">
      <Group align="stretch" wrap="wrap" gap="xl" className={classes.layout}>
        <Box className={classes.photoWrap}>
          <Box
            className={classes.photo}
            style={
              founder.image
                ? { backgroundImage: `url(${founder.image})` }
                : undefined
            }
            aria-label={`Photo of ${founder.name}`}
            role="img"
          >
            {!founder.image && (
              <Text className={classes.initials}>{founder.initials}</Text>
            )}
          </Box>
        </Box>

        <Stack gap="md" className={classes.content}>
          <Text className={classes.eyebrow}>{founder.eyebrow}</Text>
          <Stack gap={4}>
            <Title order={2} fz={{ base: "1.5rem", md: "2rem" }}>
              {founder.name}
            </Title>
            <Group gap={6} align="center">
              <Anchor
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkedinLink}
                aria-label={`${founder.name} on LinkedIn`}
                underline="never"
              >
                <LinkedInIcon size={14} />
              </Anchor>
              <Text className={classes.role}>{founder.role}</Text>
            </Group>
          </Stack>
          <Text fz={{ base: "sm", md: "md" }} c="rgba(255,255,255,0.55)" lh={1.75}>
            {founder.bio}
          </Text>
          <Stack gap={8} component="ul" className={classes.expertise}>
            {founder.expertise.map((item) => (
              <Text key={item} component="li" fz={{ base: "xs", md: "sm" }}>
                {item}
              </Text>
            ))}
          </Stack>
          <Text className={classes.quote} fz={{ base: "sm", md: "md" }}>
            &ldquo;{founder.quote}&rdquo;
          </Text>

        </Stack>
      </Group>
    </Container>
  );
}
