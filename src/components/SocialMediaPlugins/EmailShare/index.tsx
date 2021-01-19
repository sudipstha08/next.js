import { EmailShareButton } from 'react-share';
import { ReactNode } from 'react';

interface DisabledStyleProps {
  opacity?: number;
}

interface EmailProps {
  children: ReactNode;
  body?: string;
  url: string;
  separator?: string;
  subject?: string;
  disabled?: boolean;
  disabledStyle?: DisabledStyleProps;
  windowHeight?: number;
  windowWidth?: number;
}

const EmailShare = ({
  children,
  url,
  body,
  separator,
  subject,
  disabled,
  disabledStyle,
  windowHeight,
  windowWidth,
}: EmailProps) => {
  return (
    <EmailShareButton
      subject={subject}
      body={body}
      separator={separator}
      url={url || ''}
      disabled={disabled}
      disabledStyle={disabledStyle}
      windowHeight={windowHeight}
      windowWidth={windowWidth}
    >
      {children}
    </EmailShareButton>
  );
};

export { EmailShare };
