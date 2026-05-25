"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { ArrowRight } from "lucide-react";
import { contactContent } from "@/config/content/contact";
import { siteConfig } from "@/config/site";
import {
  contactFormInitialValues,
  contactFormSchema,
  getSubmittedRole,
  isContactFormValid,
  mapContactFormErrors,
} from "@/lib/validation/contact-form";

export function ContactForm() {
  const router = useRouter();
  const { form: formContent } = contactContent;
  const [formspreeState, formspreeSubmit] = useFormspree(siteConfig.formspreeFormId);

  const form = useForm({
    initialValues: contactFormInitialValues,
    validate: (values) => {
      const result = contactFormSchema.safeParse(values);
      if (result.success) {
        return {};
      }

      return mapContactFormErrors(result.error);
    },
    validateInputOnBlur: true,
  });

  useEffect(() => {
    if (formspreeState.succeeded) {
      router.push("/thank-you");
    }
  }, [formspreeState.succeeded, router]);

  const roleOptions = formContent.roleOptions
    .filter((option) => option.value !== "")
    .map((option) => ({
      value: option.value,
      label: option.label,
    }));

  const canSubmit = isContactFormValid(form.values);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const validation = form.validate();
    if (validation.hasErrors) {
      event.preventDefault();
      return;
    }

    formspreeSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="source" value="Contact form" />
      <input type="hidden" name="role" value={getSubmittedRole(form.values)} />

      <Stack gap="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="First name"
            name="first_name"
            placeholder="James"
            {...form.getInputProps("first_name")}
          />
          <TextInput
            label="Last name"
            name="last_name"
            placeholder="Harper"
            {...form.getInputProps("last_name")}
          />
        </SimpleGrid>

        <TextInput
          label="Email address"
          name="email"
          type="email"
          placeholder="james@agency.com.au"
          {...form.getInputProps("email")}
        />

        <TextInput
          label="Company"
          name="company"
          placeholder="Your agency or firm"
          {...form.getInputProps("company")}
        />

        <Select
          label="I am a..."
          placeholder="Select your role"
          data={roleOptions}
          value={form.values.role || null}
          onChange={(value) => {
            form.setFieldValue("role", value ?? "");
            if (value !== "other") {
              form.setFieldValue("otherRole", "");
            }
            if (form.isTouched("role")) {
              form.validateField("role");
              if (value === "other") {
                form.validateField("otherRole");
              }
            }
          }}
          onBlur={() => {
            form.setTouched({ role: true });
            form.validateField("role");
          }}
          error={form.errors.role}
          allowDeselect={false}
          checkIconPosition="right"
          comboboxProps={{ withinPortal: true }}
        />

        {form.values.role === "other" && (
          <TextInput
            label="Your role"
            placeholder="e.g. Property developer, valuer, consultant..."
            {...form.getInputProps("otherRole")}
          />
        )}

        <Textarea
          label="Message"
          name="message"
          placeholder="Tell us about your interest in Diligia — your role, what you're working on, or anything you'd like to discuss."
          minRows={5}
          autosize
          {...form.getInputProps("message")}
        />

        <Button
          type="submit"
          className="glare-button"
          fullWidth
          mt="xs"
          fz="sm"
          fw={500}
          disabled={!canSubmit || formspreeState.submitting}
          loading={formspreeState.submitting}
          rightSection={<ArrowRight size={16} aria-hidden />}
        >
          {formContent.submitLabel}
        </Button>

        <ValidationError
          errors={formspreeState.errors}
          prefix=""
          style={{ color: "#ff6b6b", fontSize: 13, textAlign: "center" }}
        />

        <Text fz="xs" c="rgba(255, 255, 255, 0.22)" ta="center" lh={1.6}>
          {formContent.note}
        </Text>
      </Stack>
    </form>
  );
}
