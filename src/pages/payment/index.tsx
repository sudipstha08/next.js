import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOutForm, Header } from "../../components";
import styled from "styled-components";
import { ArrowUpOutlined } from "@ant-design/icons";
import { BackTop } from "antd";

export const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;

  form {
    width: 30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }

  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }

  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }

  .hidden {
    display: none;
  }

  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }

  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  #payment-request-button {
    margin-bottom: 32px;
  }

  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

const MainWrapper = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  & .main {
    text-align: center;
  }
  & .icons {
    cursor: pointer;
    position: sticky;
    bottom: 20px;
    display: flex;
    padding-right: 20px;
    padding-bottom: 20px;
    justify-content: flex-end;
    right: 20px;
    & .ant-back-top {
      position: static;
    }
  }
`;

const Article = styled.div`
  & .title {
    position: sticky;
    top: 0;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    background: #fff;
  }
  & .content {
    width: 50%;
    border: 2px solid #ccc;
    background: #fff;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    padding: 1em 2em;
  }
  & button {
    background: red;
    color: #fff;
    width: 200px;
    height: 60px;
    position: sticky;
    bottom: 10px;
    z-index: -1;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 2rem;
    margin: 0.5rem 1rem;
    font-weight: 600;
  }
`;
const Footer = styled.footer`
  height: 170px;
  background: rgb(6, 95, 212);
  color: #fff;
  display: grid;
  place-items: center;
`;

const FooterWrapper = styled.div``;

const promise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as any);

const PaymentPage = () => {
  return (
    <MainWrapper>
      <div className="main">
        <Header />
        <Wrapper>
          <Elements stripe={promise}>
            <CheckOutForm />
          </Elements>
        </Wrapper>

        <div style={{ width: "80vw", margin: "0 auto", textAlign: "center" }}>
          <Article>
            <div className="title">fsdfsdfsdfsdfds</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nesciunt eaque optio nam deserunt iure eos illo provident corporis
              expedita? Animi inventore pariatur dolorum fuga mollitia. Cum
              excepturi sunt eos ad tempore, voluptates iste deserunt enim
              eveniet vero voluptas, quisquam consectetur, quos adipisci
              accusamus ducimus laboriosam facere voluptatibus reiciendis libero
              hic numquam explicabo vitae? Ipsam iste voluptatum, consequuntur
              laboriosam ab possimus non recusandae repudiandae tempore et quas
              molestiae iure tempora. Quia, dignissimos saepe quos pariatur et
              omnis! In sint nam excepturi fuga autem illo praesentium est,
              repellat quidem placeat, voluptatum quibusdam quisquam sequi
              accusamus ad deserunt commodi corporis minus rem.
            </div>
          </Article>
          <Article>
            <div className="title">Lorem ipsum dolor sit amet.</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nesciunt eaque optio nam deserunt iure eos illo provident corporis
              expedita? Animi inventore pariatur dolorum fuga mollitia. Cum
              excepturi sunt eos ad tempore, voluptates iste deserunt enim
              eveniet vero voluptas, quisquam consectetur, quos adipisci
              accusamus ducimus laboriosam facere voluptatibus reiciendis libero
              hic numquam explicabo vitae? Ipsam iste voluptatum, consequuntur
              laboriosam ab possimus non recusandae repudiandae tempore et quas
              molestiae iure tempora. Quia, dignissimos saepe quos pariatur et
              omnis! In sint nam excepturi fuga autem illo praesentium est,
              repellat quidem placeat, voluptatum quibusdam quisquam sequi
              accusamus ad deserunt commodi corporis minus rem.
            </div>
          </Article>
          <Article>
            <div className="title">Title gsddfd</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nesciunt eaque optio nam deserunt iure eos illo provident corporis
              expedita? Animi inventore pariatur dolorum fuga mollitia. Cum
              excepturi sunt eos ad tempore, voluptates iste deserunt enim
              eveniet vero voluptas, quisquam consectetur, quos adipisci
              accusamus ducimus laboriosam facere voluptatibus reiciendis libero
              hic numquam explicabo vitae? Ipsam iste voluptatum, consequuntur
              laboriosam ab possimus non recusandae repudiandae tempore et quas
              molestiae iure tempora. Quia, dignissimos saepe quos pariatur et
              omnis! In sint nam excepturi fuga autem illo praesentium est,
              repellat quidem placeat, voluptatum quibusdam quisquam sequi
              accusamus ad deserunt commodi corporis minus rem.
            </div>
          </Article>
          <Article>
            <div className="title">Hellofd</div>
            <div className="content content-sticky">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nesciunt eaque optio nam deserunt iure eos illo provident corporis
              expedita? Animi inventore pariatur dolorum fuga mollitia. Cum
              excepturi sunt eos ad tempore, voluptates iste deserunt enim
              eveniet vero voluptas, quisquam consectetur, quos adipisci
              accusamus ducimus laboriosam facere voluptatibus reiciendis libero
              hic numquam explicabo vitae? Ipsam iste voluptatum, consequuntur
              laboriosam ab possimus non recusandae repudiandae tempore et quas
              molestiae iure tempora. Quia, dignissimos saepe quos pariatur et
              omnis! In sint nam excepturi fuga autem illo praesentium est,
              repellat quidem placeat, voluptatum quibusdam quisquam sequi
              accusamus ad deserunt commodi corporis minus rem. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam voluptate
              aliquam atque quae, iste cupiditate possimus asperiores dolore
              sequi exercitationem quod, perferendis placeat fuga saepe
              veritatis aspernatur laudantium quasi ipsum provident expedita
              minus sint. Libero, delectus architecto odio nemo veniam ullam
              perferendis rem minus, aut similique nostrum iure adipisci, facere
              labore quis iste fuga inventore commodi officiis placeat officia
              praesentium rerum. Ad deserunt itaque quis, error sint
              consectetur. Aliquid optio dolore laudantium reprehenderit ipsum
              ex dolorem, nemo illo, at porro laboriosam quia alias, quod
              quibusdam? Laudantium distinctio nulla rem praesentium doloremque
              nihil expedita voluptates vel at animi aspernatur quas ad odit,
              cumque ab voluptas illum dolorum eum consectetur, excepturi
              reprehenderit? Quo omnis laborum nostrum repellat atque assumenda
              quod voluptates recusandae unde ad magnam, provident eligendi eum
              dolorum accusantium similique, enim voluptatem? Alias dolorem quo
              facilis perspiciatis quae sint id ipsa quod quam temporibus facere
              dolor blanditiis maxime rem repudiandae eos dolore et sunt illo
              esse, quasi vero quisquam maiores. Modi ut neque esse amet dolores
              officiis ex quis reiciendis fuga provident autem blanditiis,
              maiores est animi veritatis! Assumenda, doloremque? Dicta optio
              magni repellat et eius maxime delectus rem impedit blanditiis sunt
              distinctio reiciendis facilis obcaecati, veritatis aliquam
              aspernatur enim unde quis fugit accusantium! Necessitatibus nulla
              iusto quos voluptas cumque repudiandae dolores ullam illum. Quod
              rem at commodi nihil cumque, cum facere, dolorem, incidunt dolore
              illum accusamus assumenda nulla. Corrupti veniam nisi
              necessitatibus consequatur voluptatem doloribus similique iusto
              blanditiis corporis ipsum, et optio earum recusandae at labore hic
              amet laborum odio vero. Corporis tenetur minima quisquam natus
              nobis similique! Neque, incidunt! Cumque explicabo assumenda
              nesciunt repudiandae labore quod fugit libero ex dignissimos rerum
              fugiat voluptatum, natus obcaecati odio quos quam iusto sequi
              corrupti delectus perferendis doloremque quaerat enim quae
              eligendi. Voluptatem ratione corporis magnam iusto pariatur. Iusto
              culpa nemo dolore laudantium.
            </div>
            <button>Hello</button>
          </Article>
          <Article>
            <div className="title">Title fsdfdsfd</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nesciunt eaque optio nam deserunt iure eos illo provident corporis
              expedita? Animi inventore pariatur dolorum fuga mollitia. Cum
              excepturi sunt eos ad tempore, voluptates iste deserunt enim
              eveniet vero voluptas, quisquam consectetur, quos adipisci
              accusamus ducimus laboriosam facere voluptatibus reiciendis libero
              hic numquam explicabo vitae? Ipsam iste voluptatum, consequuntur
              laboriosam ab possimus non recusandae repudiandae tempore et quas
              molestiae iure tempora. Quia, dignissimos saepe quos pariatur et
              omnis! In sint nam excepturi fuga autem illo praesentium est,
              repellat quidem placeat, voluptatum quibusdam quisquam sequi
              accusamus ad deserunt commodi corporis minus rem.
            </div>
          </Article>
        </div>
        <div className="icons">
          <BackTop>
            <ArrowUpOutlined style={{ fontSize: 30 }} />
          </BackTop>
        </div>
      </div>

      <FooterWrapper>
        <Footer>THis is a footer</Footer>
      </FooterWrapper>
    </MainWrapper>
  );
};

export default PaymentPage;
