import { contactContent } from "@/config/content/contact";
import { FormspreeForm } from "./FormspreeForm";
import classes from "./ContactForm.module.css";

export function ContactForm() {
  const { form } = contactContent;

  return (
    <FormspreeForm source="Contact form">
      <div className={classes.formRow}>
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="first_name">
            First name
          </label>
          <input
            id="first_name"
            className={classes.input}
            type="text"
            name="first_name"
            placeholder="James"
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="last_name">
            Last name
          </label>
          <input
            id="last_name"
            className={classes.input}
            type="text"
            name="last_name"
            placeholder="Harper"
            required
          />
        </div>
      </div>

      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          className={classes.input}
          type="email"
          name="email"
          placeholder="james@agency.com.au"
          required
        />
      </div>

      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="company">
          Company
        </label>
        <input
          id="company"
          className={classes.input}
          type="text"
          name="company"
          placeholder="Your agency or firm"
        />
      </div>

      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="role">
          I am a...
        </label>
        <select id="role" className={classes.select} name="role">
          {form.roleOptions.map((option) => (
            <option key={option.value || "default"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className={classes.textarea}
          name="message"
          placeholder="Tell us about your interest in Diligia — whether you're looking to become a design partner, learn more about the platform, or discuss something else entirely."
        />
      </div>

      <button type="submit" className={`${classes.submit} glare-button`}>
        {form.submitLabel}
      </button>
      <p className={classes.note}>{form.note}</p>
    </FormspreeForm>
  );
}
