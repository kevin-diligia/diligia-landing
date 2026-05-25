import { Button, Flex, TextInput } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/config/content/home";
import { FormspreeForm } from "./FormspreeForm";

export function DesignPartnerForm() {
  const { partner } = homeContent;

  return (
    <FormspreeForm source="Design Partner Application">
      <Flex
        direction={{ base: "column", xs: "row" }}
        gap={0}
        style={{
          border: "1px solid rgba(29, 158, 117, 0.3)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <TextInput
          name="email"
          type="email"
          placeholder={partner.emailPlaceholder}
          required
          flex={1}
          radius={0}
          styles={{
            root: { flex: 1 },
            input: {
              border: "none",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: 0,
              fontSize: 14,
              "&:focus": {
                border: "none",
              },
            },
          }}
        />
        <Button
          type="submit"
          className="glare-button"
          radius={0}
          px="lg"
          fz="sm"
          fw={500}
          style={{ flexShrink: 0 }}
          rightSection={<ArrowRight size={16} aria-hidden />}
        >
          {partner.submitLabel}
        </Button>
      </Flex>
    </FormspreeForm>
  );
}
