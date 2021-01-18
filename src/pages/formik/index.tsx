/* eslint-disable no-console */
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ConfigProvider, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/ne';
import locale from 'antd/lib/locale/ne_NP';

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
  name: '',
  email: '',
  channel: '',
  comments: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
});

const onSubmit = (values: any) => {
  console.log('datas', values);
};

const handleDateChange = (date: any, dateString: string) => {
  console.log(date, dateString);
};
interface IProps {
  name?: string;
  email?: string;
  channel?: string;
  comments?: string;
}

const FormikPage: React.FC<IProps> = () => {
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
            <Field
              type="text"
              id="channel"
              name="channel"
              placeholder="channel name"
            />
            <ErrorMessage name="channel" />
          </div>
          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field
              type="text"
              as="textarea"
              id="comments"
              name="comments"
              placeholder="comments..."
            />
            <ErrorMessage name="comments" />
          </div>
          <div className="form-control">
            <ConfigProvider locale={locale}>
              <DatePicker
                onChange={handleDateChange}
                defaultValue={moment('2021-01-18', 'YYYY-MM-DD')}
              />
            </ConfigProvider>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default FormikPage;
