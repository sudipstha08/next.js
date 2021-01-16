/* eslint-disable no-console */
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
});

const onSubmit = (values) => {
  console.log('datas', values);
};

const FormikCC: React.FC = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field type="channel" id="channel" name="channel" />
            <ErrorMessage name="channel" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default FormikCC;
