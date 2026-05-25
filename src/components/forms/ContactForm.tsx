import {
  Button,
  NativeSelect,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { contactContent } from "@/config/content/contact";
import { FormspreeForm } from "./FormspreeForm";

export function ContactForm() {
  const { form } = contactContent;

  return (
    <FormspreeForm source="Contact form">
      <Stack gap="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="First name"
            name="first_name"
            placeholder="James"
            required
          />
          <TextInput
            label="Last name"
            name="last_name"
            placeholder="Harper"
            required
          />
        </SimpleGrid>

        <TextInput
          label="Email address"
          name="email"
          type="email"
          placeholder="james@agency.com.au"
          required
        />

        <TextInput
          label="Company"
          name="company"
          placeholder="Your agency or firm"
        />

        <NativeSelect
          label="I am a..."
          name="role"
          data={form.roleOptions.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
        />

        <Textarea
          label="Message"
          name="message"
          placeholder="Tell us about your interest in Diligia — whether you're looking to become a design partner, learn more about the platform, or discuss something else entirely."
          minRows={5}
          autosize
        />

        <Button
          type="submit"
          className="glare-button"
          fullWidth
          mt="xs"
          fz="sm"
          fw={500}
          rightSection={<ArrowRight size={16} aria-hidden />}
        >
          {form.submitLabel}
        </Button>

        <Text fz="xs" c="rgba(255, 255, 255, 0.22)" ta="center" lh={1.6}>
          {form.note}
        </Text>
      </Stack>
    </FormspreeForm>
  );
}
