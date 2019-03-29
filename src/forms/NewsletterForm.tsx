import React from "react";
import { Formik, FormikErrors } from "formik";

interface IProps {
  onSubmit: (email: string) => Promise<void>;
}

export default function NewsletterForm({ onSubmit }: IProps) {
  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validate={values => {
        const errors: FormikErrors<typeof values> = {};
        if (!/^[^@]+@sodifrance\.fr$/.test(values.email)) {
          errors.email = "Email invalide !";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await onSubmit(values.email);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleSubmit
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <button disabled={isSubmitting}>
            Je m'inscris {isSubmitting && "⏳"}
          </button>
          {errors.email && touched.email && (
            <p style={{ color: "red", fontWeight: "bold" }}>{errors.email}</p>
          )}
        </form>
      )}
    </Formik>
  );
}
