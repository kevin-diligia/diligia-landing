import { z } from "zod";

export const contactFormSchema = z
  .object({
    first_name: z.string().trim().min(1, "First name is required"),
    last_name: z.string().trim().min(1, "Last name is required"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    company: z.string().trim(),
    role: z.string().min(1, "Please select your role"),
    otherRole: z.string().trim(),
    message: z.string().trim().min(1, "Message is required"),
  })
  .superRefine((data, ctx) => {
    if (data.role === "other" && !data.otherRole) {
      ctx.addIssue({
        code: "custom",
        message: "Please describe your role",
        path: ["otherRole"],
      });
    }
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormInitialValues: ContactFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  role: "",
  otherRole: "",
  message: "",
};

export function mapContactFormErrors(error: z.ZodError<ContactFormValues>) {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in errors)) {
      errors[key as keyof ContactFormValues] = issue.message;
    }
  }

  return errors;
}

export function isContactFormValid(values: ContactFormValues) {
  return contactFormSchema.safeParse(values).success;
}

export function getSubmittedRole(values: ContactFormValues) {
  return values.role === "other" ? values.otherRole.trim() : values.role;
}
