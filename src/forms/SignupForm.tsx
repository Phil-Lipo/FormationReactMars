import React from "react";
import { Formik, FormikErrors } from "formik";

const FormError = ({ message }: { message: string | undefined | boolean }) =>
  message ? <p style={{ color: "red" }}>{message}</p> : null;

const initialValues = {
  gender: "F",
  name: "",
  email: "",
  password: "",
  passwordconfirm: "",
  birthdate: "",
  cgu: false
};

type IValues = typeof initialValues;

interface IProps {
  onSubmit: (values: IValues) => Promise<void>;
}

export default function SignupForm(props: IProps) {
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors: FormikErrors<IValues> = {};

        // Tous les champs doivent être remplis
        if (values.name === "") {
          errors.name = "Merci d'entrer votre prénom et nom";
        }
        if (values.birthdate === "") {
          errors.birthdate = "Merci d'entrer votre date de naissance";
        }

        // L'email doit ressembler à une adresse email
        if (!/^[^@]+@[^@]+\.[^@.]+$/.test(values.email)) {
          errors.email = "Merci d'entrer une adresse email valide";
        }

        // Le mot de passe doit faire au moins 8 caractères
        if (values.password.length < 8) {
          errors.password = "Votre mot de passe doit faire au moins 8 caractères";
        }

        // Les deux champs de mot de passe doivent être identiques
        if (values.password !== values.passwordconfirm) {
          errors.passwordconfirm = "Le mot de passe doit être identique dans les deux champs";
        }

        // La case CGU doit être cochée
        if (!values.cgu) {
          errors.cgu = "Vous devez accepter les CGU pour vous inscrire";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await props.onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="signup">
          <h1>Inscription</h1>

          <label>
            Nom
            <br />
            <select name="gender" value={values.gender} onChange={handleChange}>
              <option value="F">Mme</option>
              <option value="M">M.</option>
              <option value="O">Autre</option>
            </select>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Prénom Nom"
              className={(touched.name && errors.name && "error") || undefined}
            />
            <FormError message={touched.name && errors.name} />
          </label>

          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              placeholder="---@---.--"
              value={values.email}
              onChange={handleChange}
              className={(touched.email && errors.email && "error") || undefined}
            />
            <FormError message={touched.email && errors.email} />
          </label>

          <label>
            Password
            <br />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={(touched.password && errors.password && "error") || undefined}
            />
            <FormError message={touched.password && errors.password} />
          </label>

          <label>
            Confirmation Password
            <br />
            <input
              type="password"
              name="passwordconfirm"
              value={values.passwordconfirm}
              onChange={handleChange}
              className={
                (touched.passwordconfirm && errors.passwordconfirm && "error") || undefined
              }
            />
            <FormError message={touched.passwordconfirm && errors.passwordconfirm} />
          </label>

          <label>
            Date de naissance
            <br />
            <input
              type="date"
              name="birthdate"
              value={values.birthdate}
              onChange={handleChange}
              className={(touched.birthdate && errors.birthdate && "error") || undefined}
            />
            <FormError message={touched.birthdate && errors.birthdate} />
          </label>

          <label>
            <input type="checkbox" name="cgu" checked={values.cgu} onChange={handleChange} />
            J'accepte les CGU
            <FormError message={touched.cgu && errors.cgu} />
          </label>

          <button type="submit">Je m'inscris {isSubmitting && "⏳"}</button>
        </form>
      )}
    </Formik>
  );
}
