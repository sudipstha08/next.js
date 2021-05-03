import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

const RecaptchaComponent = (Component: any) => {
  const Recaptcha = ({ children }: any) => {
    return (
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} scriptProps={{async: false, defer:false}}>
        {children}
      </GoogleReCaptchaProvider>
    );
  };
  return class Higher extends React.Component{
    render() {
      return (
        <Recaptcha>
          <Component {...this.props} />
        </Recaptcha>
      );
    }
  };
};
export { RecaptchaComponent };

// https://rossbulat.medium.com/how-to-use-react-higher-order-components-c0be6821eb6c#:~:text=This%20HOC%20function%20returns%20a,you%20may%20wish%20to%20include.