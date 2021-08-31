import React, { useState } from "react";
import { Card, notification } from "antd";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import * as Sentry from "@sentry/browser";
import { useAuth } from "../../store/AuthContext";
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

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [initialValues] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const router = useRouter();

  const { signup } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .max(50, "Maximum 50 characters allowed"),
    password: Yup.string()
      .required("Required")
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
      setLoading(true);
      await signup(email, password);
      notification.success({
        message: "Account created successfully",
      });
      formik.resetForm();
      router.push("/login");
    } catch (error) {
      setLoading(false);
      Sentry.withScope(function (scope) {
        scope.setLevel(Sentry.Severity.Critical);
        Sentry.captureException("Error: ", error);
      });
      notification.error({
        message: "Failed to create an account",
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
          <strong>Sign Up</strong>
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
            Sign Up
          </Button>
        </form>
        <div>
          Already have an account ? <Link href="/login">Log In</Link>
        </div>
      </StyledCard>
    </Container>
  );
};

export default SignUpPage;
