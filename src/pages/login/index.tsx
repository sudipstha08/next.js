import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, notification } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import axios from "axios"
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { TextField, Button, RecaptchaComponent } from "../../components";


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

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [initialValues] = useState({
    email: "",
    password: "",
  });
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const { login, currentUser } = useAuth();
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .max(50, "Maximum 50 characters allowed"),
    password: Yup.string()
      .required("Required")
      .min(8, "Minimun 8 characters required")
      .max(20, "Maximum 20 characters allowed"),
  });

  const handleSubmit = async () => {
    const { email, password } = formik.values;
    try {
      setLoading(true);
      await login(email, password);
      router.push("/");
    } catch (error) {
      setLoading(false);
      notification.error({
        message: "Failed to sign in. Please try again later",
      });
    }
    setLoading(false);
  };

 

  const onFinishHandler = useCallback(async () => {
    try {
      // const token = await executeRecaptcha?.("SignIn");
      // console.log("tok", token)
      // const recaptchaData = await axios.post(`http://localhost:8080/verify-recaptcha`, {
      //   response: token,
      // });
    
      // if (
      //   recaptchaData &&
      //   recaptchaData.data &&
      //   recaptchaData.data.score > 0.5
      // ) {
         handleSubmit()
        
      // }
    } catch (error) {
        console.log(error)
    }
  }, [initialValues.email, initialValues.password]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  if (currentUser) {
    router.push("/");
  }

  return (
    <Container>
      <StyledCard>
        <h2>
          <strong>Sign In</strong>
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
          <Button
            type="dashed"
            htmlType="submit"
            className="btn--submit"
            loading={loading}
          >
            Log In
          </Button>
        </form>
        <div>
          <Link href="/forgot-password">Forgot Password ?</Link>
        </div>
        <div>
          Don&apos;t have an account ? <Link href="/signup">Sign Up</Link>
        </div>
      </StyledCard>
    </Container>
  );
};

export default RecaptchaComponent(LoginPage);
