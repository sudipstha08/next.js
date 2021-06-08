import React, { useState } from "react";
import { Card, notification } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import * as Sentry from "@sentry/browser";
import { useAuth } from "../../../context/AuthContext";
import { TextField, Button } from "../../../components";

const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  & .btn--submit {
    span {
      border: 2px solid #1890ff !important;
      border-radius: 8px;
      padding: 0.25em 0.5em;
    }
  }
`;
const StyledCard = styled(Card)`
  width: 350px;
  text-align: center;
`;

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser, updateEmail, updatePassword } = useAuth();

  const [initialValues] = useState({
    email: currentUser?.email,
    password: "",
    passwordConfirmation: "",
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .max(50, "Maximum 50 characters allowed"),
    password: Yup.string()
      .min(8, "Minimun 8 characters required")
      .max(20, "Maximum 20 characters allowed"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords didnot match",
    ),
  });

  const handleSubmit = async () => {
    const { email, password } = formik.values;
    try {
      await updateEmail(email);
      await updatePassword(password);
      notification.success({
        message: "Profile updated successfully",
      });
    } catch (error) {
      setLoading(false);
      Sentry.captureMessage("Error: ", error);
      notification.error({
        message: "Failed to update profile",
      });
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <StyledCard>
        <h2>
          <strong>Update Profile</strong>
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="email"
            prefix={<UserOutlined />}
            type="string"
            value={formik.values.email}
            placeholder="Email"
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors?.email}
            onBlur={formik.handleBlur}
          />
          <TextField
            name="password"
            type="password"
            value={formik.values.password}
            prefix={<LockOutlined />}
            placeholder="Password"
            onChange={formik.handleChange}
            error={formik.touched.password && formik.errors?.password}
            onBlur={formik.handleBlur}
          />
          <TextField
            name="passwordConfirmation"
            type="password"
            value={formik.values.passwordConfirmation}
            prefix={<LockOutlined />}
            placeholder="Password Confirmation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.passwordConfirmation &&
              formik.errors?.passwordConfirmation
            }
          />
          <Button
            type="dashed"
            htmlType="submit"
            className="btn--submit"
            loading={loading}
          >
            Update
          </Button>
        </form>
      </StyledCard>
    </Container>
  );
};

export default UpdateProfile;
