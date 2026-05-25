import { Box, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { DesignPartnerForm } from "@/components/forms/DesignPartnerForm";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { homeContent } from "@/config/content/home";
import classes from "./PartnerForm.module.css";

export function Form() {
  const { partner } = homeContent;

  return (
    <Stack align="center" id="partner">
      <Box className={classes.box}>
        <Box className={classes.header}>
          <Text className={classes.badge}>{partner.badge}</Text>
          <Text size="sm" c="rgba(255,255,255,0.35)" ml={8}>
            {partner.availability}
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
                <CheckIcon />
                {perk}
              </span>
            ))}
          </SimpleGrid>
          <DesignPartnerForm />
        </Box>
      </Box>
    </Stack>
  );
}

export default Form;
