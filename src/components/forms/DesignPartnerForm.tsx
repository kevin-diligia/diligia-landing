import { homeContent } from "@/config/content/home";
import { FormspreeForm } from "./FormspreeForm";
import classes from "./DesignPartnerForm.module.css";

export function DesignPartnerForm() {
  const { partner } = homeContent;

  return (
    <FormspreeForm source="Design Partner Application">
      <div className={classes.emailForm}>
        <input
          type="email"
          name="email"
          placeholder={partner.emailPlaceholder}
          required
          className={classes.input}
        />
        <button type="submit" className={`${classes.button} glare-button`}>
          {partner.submitLabel}
        </button>
      </div>
    </FormspreeForm>
  );
}
