/* eslint-disable no-console */
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";
import { EmailShareButton, FacebookShareButton } from "react-share";
import { LineShare, MailTo, Timer, useCopyToClipBoard } from "../../components";

const AboutPage = () => {
  // const [shareCount, setShareCount] = useState(0);

  // useEffect(() => {
  //   LineIt?.loadButton();
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await axios.get(
  //     "https://api.line.me/social-plugin/metrics?url=https://line.me/en",
  //   );
  //   if (res && res.data) {
  //     setShareCount(res.data.share);
  //   }
  // };

  const { ToolTip } = useCopyToClipBoard("fdfd");

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <ToolTip>{"Copy ME"}</ToolTip>
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
      </FacebookShareButton>{" "}
      <EmailShareButton
        subject="hello"
        body="test"
        url="https://www.npmjs.com/package/angular-social-plugins"
        openShareDialogOnClick={true}
        onClick={(e) => e.preventDefault()}
        // mediaplaybackrequiresuseraction="false"
      >
        Email Share
      </EmailShareButton>{" "}
      <LineShare
        // quote="Facebook"
        // hashtag="Hello"
        url="https://www.npmjs.com/package/angular-social-plugins"
      >
        Line Share
      </LineShare>{" "}
      <a
        href={`mailto:piotr@mailtrap.io,john@mailtrap.io,kate@mailtrap.io?subject=Give%20me%20all%20your%20bitcoins&body=Here%20are%20my%20parents'%20credit%20card%20numbers%3A%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Customer`}
      >
        I want free Bitcoins
      </a>
      <Timer />
      {/* <div>
        <div
          className="line-it-button"
          data-lang="en"
          data-type="share-b"
          data-ver="3"
          data-url="https://social-plugins.line.me/en/how_to_install#lineitbutton"
          data-color="default"
          data-size="small"
          data-count="true"
          style={{ display: "none" }}
        />
        <p>
          <strong>Share Count :</strong> {shareCount}
        </p>
      </div> */}
    </Layout>
  );
};

export default AboutPage;

// https://css-tricks.com/how-to-use-the-web-share-api/
// https://dev.to/pmca/how-to-build-a-mobile-web-share-component-with-react-in-under-10-minutes-37jh
