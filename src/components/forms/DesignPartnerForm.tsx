"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Flex, TextInput } from "@mantine/core";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/config/content/home";
import { siteConfig } from "@/config/site";

export function DesignPartnerForm() {
  const router = useRouter();
  const { partner } = homeContent;
  const [state, handleSubmit] = useForm(siteConfig.formspreeFormId);

  useEffect(() => {
    if (state.succeeded) {
      router.push("/thank-you");
    }
  }, [state.succeeded, router]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="source" value="Design Partner Application" />

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
          disabled={state.submitting}
          loading={state.submitting}
          rightSection={<ArrowRight size={16} aria-hidden />}
        >
          {partner.submitLabel}
        </Button>
      </Flex>

      <ValidationError
        errors={state.errors}
        style={{ color: "#ff6b6b", fontSize: 13, marginTop: 8 }}
      />
    </form>
  );
}
