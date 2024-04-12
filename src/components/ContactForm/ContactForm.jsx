import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    onAdd(newContact);
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name must not exceed 50 characters'),
    number: Yup.string().required('Phone number is required').min(3, 'Phone number must be at least 3 characters').max(50, 'Phone number must not exceed 50 characters') // Changer 'phone' à 'number'
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <div className={styles.formDiv}>
          <label htmlFor="name">Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" className={styles.error} />
          <label htmlFor="number">Phone:</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" className={styles.error} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
