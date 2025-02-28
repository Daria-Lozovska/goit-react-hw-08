import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const validationSchema = Yup.object({
        name: Yup.string().min(3).max(50).required(),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number').required(),
    });

    const handleSubmit = (values, { resetForm }) => {
        if (contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase())) {
            alert(`${values.name} is already in contacts!`);
            return;
        }
        dispatch(addContact(values));
        resetForm();
    };

    return (
        <Formik initialValues={{ name: '', number: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className={styles.form}>
                <label>Name <Field type="text" name="name" className={styles.input} /></label>
                <ErrorMessage name="name" component="div" className={styles.error} />
                
                <label>Number <Field type="text" name="number" className={styles.input} /></label>
                <ErrorMessage name="number" component="div" className={styles.error} />

                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;