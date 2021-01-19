import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';
import { EmailShareButton, FacebookShareButton } from 'react-share';
import { LineShare, MailTo } from '../../components';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about pagesss</p>
    <p>
      <Link href="/">
        <a className={styles.red}>Go home</a>
      </Link>
      <a
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sudipstha08@gmail.com&body=my-text"
      >
        Click here to email
      </a>
      <Link href="/about/aboutme">
        <a className={styles.red}>Go to about page</a>
      </Link>
      <MailTo
        email="sudipstha08@gmail.com"
        subject="Test"
        body="This is the test"
      >
        <button>Email</button>
      </MailTo>
    </p>
    <FacebookShareButton
      quote="Facebook"
      hashtag="Hello"
      url="https://www.npmjs.com/package/angular-social-plugins"
    >
      Facebook Share
    </FacebookShareButton>{' '}
    <EmailShareButton
      subject="hello"
      body="test"
      url="https://www.npmjs.com/package/angular-social-plugins"
      openShareDialogOnClick={true}
      onClick={(e) => e.preventDefault()}
      // mediaplaybackrequiresuseraction="false"
    >
      Email Share
    </EmailShareButton>{' '}
    <LineShare
      // quote="Facebook"
      // hashtag="Hello"
      url="https://www.npmjs.com/package/angular-social-plugins"
    >
      Line Share
    </LineShare>{' '}
  </Layout>
);

export default AboutPage;
