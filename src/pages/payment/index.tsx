import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOutForm, Header } from "../../components";
import { Wrapper } from "./style";
import styled from "styled-components";
import { ArrowUpOutlined } from "@ant-design/icons";
import { BackTop } from "antd";

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
