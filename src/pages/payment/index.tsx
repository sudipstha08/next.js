import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOutForm, Header } from "../../components";
import { Wrapper } from "./style";

const promise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as any);

const PaymentPage = () => {
  return (
    <section style={{ maxWidth: "1500px", margin: "0 auto" }}>
      <Header />
      <Wrapper>
        <Elements stripe={promise}>
          <CheckOutForm />
        </Elements>
      </Wrapper>
      <div style={{ width: "80vw", margin: "0 auto", textAlign: "justify" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum expedita
        nemo iure. Minima beatae assumenda, ad est, ipsa voluptate odio
        consectetur eum neque, consequatur ullam sint sed autem. Recusandae
        placeat provident libero aut in. Iure repellendus tempore optio
        recusandae, consectetur, voluptatem rem, neque ducimus quo repellat ad
        numquam velit? Praesentium facilis excepturi nulla minus quas vel autem
        itaque esse cum voluptas deserunt, id quo tempore placeat alias officiis
        blanditiis, dolor consequatur. Nisi repellat neque, explicabo qui
        veritatis cumque et quidem accusantium, consequatur, doloribus pariatur
        iste hic corporis ipsum nesciunt consequuntur esse ullam dolorem nihil
        magnam dolor deleniti iure est sapiente. Numquam tempora saepe
        voluptatum ad aliquid molestias eum neque officiis atque officia est
        voluptatem aspernatur itaque provident sit animi, nihil sunt minima,
        laborum vero omnis! Ea, sunt? Sint atque inventore qui architecto,
        aliquid voluptatem tempora veritatis harum adipisci quibusdam nesciunt
        ipsum, laboriosam vero, error ipsa. Reprehenderit inventore voluptatum
        dolorem reiciendis sit veniam dolor mollitia eveniet magnam tempore
        suscipit sint voluptatem culpa sequi vero, hic voluptate, facere quis
        molestias exercitationem molestiae delectus ex labore officiis?
        <br />
        <hr />
        Ipsum porro expedita ut nemo harum, in quisquam dicta sed doloribus
        doloremque quas nisi, excepturi beatae. Officia adipisci temporibus sed
        explicabo aliquid cumque tenetur ea tempora? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Dicta laborum ipsum at odit placeat fuga
        aliquam exercitationem praesentium perspiciatis, consectetur voluptatum
        ipsa in autem adipisci deleniti natus, nam magnam. Numquam maxime
        veritatis itaque deleniti sequi quidem incidunt inventore minima,
        suscipit hic, est vero rem necessitatibus fugiat neque nam eius dicta.
        Maxime delectus quam quibusdam officiis tempora nostrum magnam impedit
        aut unde consequatur consectetur necessitatibus asperiores illum,
        suscipit fugit, voluptatibus possimus nam facilis dolores nulla totam
        corrupti nihil nobis. Harum eos quidem tempora. Cum debitis alias
        perferendis natus! Perferendis labore ab doloribus fugiat sapiente
        cupiditate animi. Officia cupiditate illum quaerat vero incidunt
        molestiae quisquam rem expedita sint repudiandae asperiores iusto
        tempore dolore itaque pariatur corporis impedit adipisci dignissimos
        neque velit commodi, architecto eum? Minus nulla quasi sunt est deserunt
        vitae, magnam culpa nam numquam perferendis veritatis vel quidem
        provident dignissimos enim tenetur nisi doloribus corporis at? Alias
        asperiores nostrum earum recusandae voluptatibus. Totam sequi quos
        repellat obcaecati voluptas voluptatem iusto quae harum debitis. In
        exercitationem iusto et quaerat quas omnis at sit? Id assumenda veniam
        nobis blanditiis. Quis a suscipit maxime incidunt reprehenderit sed
        cupiditate voluptatum tempora quos explicabo magnam accusantium, totam
        perferendis pariatur. Ipsam eveniet totam dolor adipisci, dolore odio?
      </div>
    </section>
  );
};

export default PaymentPage;
