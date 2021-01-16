/* eslint-disable no-console */
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormWrapper = styled.div`
  & label {
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
  }

  & input[type='text'],
  input[type='email'],
  textarea {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  & .form-control {
    margin-bottom: 20px;
  }

  & .error {
    color: red;
  }
`;

const initialValues = {
  name: 'sss',
  email: '',
  channel: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
});

const onSubmit = (values) => {
  console.log('datas', values);
};

const FormikCC: React.FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate: (values) => {
    //   // must return an object
    //   // values.name values.email values.channel         // SHOULD BE SAME
    //   // errors.name errors.email errors.channel

    //   const errors: any = {};

    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }
    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = 'Invalid email format';
    //   } validate: (values) => {
    //     // must return an object
    //     // values.name values.email values.channel         // SHOULD BE SAME
    //     // errors.name errors.email errors.channel

    //     const errors: any = {};

    //     if (!values.name) {
    //       errors.name = 'Required';
    //     }
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email format';
    //     }
    //   if (!values.channel) {
    //     errors.channel = 'Required';
    //   }

    //   return errors;
    // },
    validationSchema,
  });
  // console.log('form values', formik.values);
  // console.log('form errors', formik.errors);
  console.log('visited fields', formik.touched);
  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="channel"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default FormikCC;
