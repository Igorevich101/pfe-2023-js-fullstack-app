import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { USER_REGISTRATION_SCHEMA } from "../../validation/userValidation";

const initialValues = {
  firstName: "User",
  lastName: "Usereko",
  email: "user@user.user",
  password: "user1234",
  passwordRepeat: "user1234",
  // imgSrc: "",
  gender: "male",
};

const RegistrationForm = (props) => {
  const handleSubmit = (values, formikBag) => {
    const { gender, ...restUser } = values;

    const newUser = {
      ...restUser,
      id: Date.now(),
      isMale: gender === "male",
    };

    console.log(newUser);

    formikBag.reserForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_REGISTRATION_SCHEMA}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First name:</label>
          <Field type="text" name="firstName" id="firstName" />
          <ErrorMessage name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" name="lastName" id="lastName" />
          <ErrorMessage name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" />
        </div>
        <div>
          <label htmlFor="passwordRepeat">Repeat Password:</label>
          <Field type="password" name="passwordRepeat" id="passwordRepeat" />
          <ErrorMessage name="passwordRepeat" />
        </div>
        <fieldset>
          <legend>Gender:</legend>
          <div>
            <label htmlFor="male">Male :</label>
            <Field type="radio" name="gender" id="male" value="male" />
            <ErrorMessage name="gender" />
          </div>
          <div>
            <label htmlFor="female">Female :</label>
            <Field type="radio" name="gender" id="female" value="female" />
            <ErrorMessage name="gender" />
          </div>
        </fieldset>
        <div>
          <button type="submit">Register</button>
          <button type="reset">Reset fields</button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
