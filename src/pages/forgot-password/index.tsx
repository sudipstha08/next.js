import React, { useState } from "react";
import Link from "next/link";
import { Card, notification } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as Sentry from "@sentry/browser";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { TextField, Button } from "../../components";

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

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [initialValues] = useState({
    email: "",
  });

  const { resetPassword } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .max(50, "Maximum 50 characters allowed"),
  });

  const handleSubmit = async () => {
    const { email } = formik.values;
    try {
      setLoading(true);
      await resetPassword(email);
      notification.success({
        message: "Check your inbox",
      });
    } catch (error) {
      setLoading(false);
      Sentry.captureException("Error: ", error);
      notification.error({
        message: "Failed to reset password",
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
          <strong>Forgot password</strong>
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
          <Button
            type="dashed"
            htmlType="submit"
            className="btn--submit"
            loading={loading}
          >
            Reset password
          </Button>
        </form>
        <div>
          <Link href="/login">Back to login ?</Link>
        </div>
        <div>
          Don&apos;t have an account ? <Link href="/signup">Sign Up</Link>
        </div>
      </StyledCard>
    </Container>
  );
};

export default ForgotPassword;
