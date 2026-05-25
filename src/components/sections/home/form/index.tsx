import { Box, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { CircleCheck } from "lucide-react";
import { DesignPartnerForm } from "@/components/forms/DesignPartnerForm";
import { homeContent } from "@/config/content/home";
import { siteConfig } from "@/config/site";
import classes from "./index.module.css";

export function Form() {
  const { partner } = homeContent;

  return (
    <Container size={"xl"} p={"xl"}>
      <Stack align="center" id="partner">
        <Box className={classes.box}>
          <Box className={classes.header}>
            <Text opacity={0.75}>
              {partner.headline}
            </Text>
          </Box>
          <Box className={classes.body}>
            <Title order={3} className={classes.title}>
              {partner.title}
            </Title>
            <Text className={classes.description}>{partner.description}</Text>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" mb="lg">
              {partner.perks.map((perk) => (
                <span key={perk} className={classes.perk}>
                  <CircleCheck size={14} color={siteConfig.colors.teal} aria-hidden />
                  {perk}
                </span>
              ))}
            </SimpleGrid>
            <DesignPartnerForm />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}

export default Form;
