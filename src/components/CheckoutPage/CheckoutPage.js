import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/ActionCart';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(20, 'Ім’я повинно містити не більше 20 символів')
            .matches(/^[a-zA-Zа-яА-ЯЄєЇїІіґҐ]+$/, 'Ім’я може містити тільки літери')
            .required('Ім’я є обов’язковим'),
        lastName: Yup.string()
            .max(20, 'Прізвище повинно містити не більше 20 символів')
            .matches(/^[a-zA-Zа-яА-ЯЄєЇїІіґҐ]+$/, 'Прізвище може містити тільки літери')
            .required('Прізвище є обов’язковим'),
        email: Yup.string()
            .email('Некоректний формат електронної пошти')
            .required('Електронна пошта є обов’язковою')
            .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,' Пошта повинна містити крапку'),
        phoneNumber: Yup.string()
            .matches(/^\+380\d{9}$/, 'Формат номера: +380XXXXXXXXX')
            .required('Номер телефону є обов’язковим'),
    });

    const handleFormSubmit = (values) => {
        console.log('Submitted values:', values);
        dispatch(clearCart());
        navigate('/success');
    };

    return (
        <div className="checkout-container">
            <h2>Оформлення замовлення</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="firstName">Ім’я</label>
                            <Field name="firstName" type="text" className="form-field" />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Прізвище</label>
                            <Field name="lastName" type="text" className="form-field" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Електронна пошта</label>
                            <Field name="email" type="email" className="form-field" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Номер телефону</label>
                            <Field name="phoneNumber" type="text" className="form-field" />
                            <ErrorMessage name="phoneNumber" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="submit-button">
                            Відправити
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CheckoutPage;
