interface IProps {
  email: string;
  subject?: string;
  body?: string;
  children?: React.ReactNode;
}

const MailTo = ({ email, subject = "", body = "", children }: IProps) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export { MailTo };

// https://blog.mailtrap.io/mailto-links-explained/
