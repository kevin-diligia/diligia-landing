import { getThankYouUrl, siteConfig } from "@/config/site";

type FormspreeFormProps = {
  source: string;
  children: React.ReactNode;
  className?: string;
};

export function FormspreeForm({ source, children, className }: FormspreeFormProps) {
  return (
    <form
      action={siteConfig.formspreeEndpoint}
      method="POST"
      className={className}
    >
      <input type="hidden" name="_next" value={getThankYouUrl()} />
      <input type="hidden" name="source" value={source} />
      {children}
    </form>
  );
}
