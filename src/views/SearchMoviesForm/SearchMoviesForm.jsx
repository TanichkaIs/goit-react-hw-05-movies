import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be longer than 2 characters')
    .required('Please enter request'),
});

export default function SearchMoviesForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field name="name" type="text" placeholder="Enter a film title"></Field>
        <ErrorMessage name="name" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}