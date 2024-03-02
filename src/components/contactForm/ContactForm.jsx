import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm({ onSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="User Name"
        />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          id={numberFieldId}
          placeholder="xxx-xx-xx"
        />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
