import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ferma cu origin restaurant</title>
        <meta
          name="description"
          content="Ferma cu Origini este un restaurant din Chișinău ce oferă o bucătăria variată, în care veți găsi bucăți tradiționale, pizza, deserturi, feluri principale și altele."
        />
        <meta
          name="keywords"
          content="restaurant, mâncăruri, bucătărie tradițională, pizza, deserturi, feluri principale, cine, prânzuri, meniu, Chișinău, Moldova, Ferma cu Origini, ресторан, блюда, традиционная кухня, пицца, десерты, главные блюда, ужины, обеды, меню, Кишинев, Молдова"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:title" content="Ferma cu origin restaurant" />
        <meta
          property="og:description"
          content="Ferma cu Origini este un restaurant din Chișinău ce oferă o bucătăria variată, în care veți găsi bucăți tradiționale, pizza, deserturi, feluri principale și altele."
        />
        <link rel="icon" type="image/x-icon" href="/icon.ico"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
