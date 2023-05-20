import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const SignUp = () => (
  <div className="h-screen bg-gradient-to-tl  from-blue-500  to-cyan-500 pb-[8rem] flex flex-col justify-center items-center bg-primary font-poppins text-white" >
 
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
    
        <Form
        className="flex flex-col space-y-5 w-[80%] sm:w-[30rem]"
        >

        <div className="flex p-2 justify-center  font-extrabold text-[2.9rem] sm:text-[3.9rem]" >Sign Up</div>

          <Field type="email" name="email"
          className="px-3 py-1  text-black rounded-md w-full h-10 "
          />
          <ErrorMessage name="email" component="div" />
          <Field type="password"
          placeholder="Enter Your Password"
          className="px-3 py-1 text-black rounded-md w-full h-10"
          name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" 
          className="text-xl rounded-md text-black font-medium  px-5 py-2 bg-gradient-to-tl  shadow-blue-900 shadow-md  from-blue-300  to-cyan-400"
          disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUp;




 