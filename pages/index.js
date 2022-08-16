import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from "../components/Featured";
import PizzaList from '../components/PizzaList';
import axios from "axios";
export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in NewYork</title>
        <meta name="description" content="Best pizza shop in town " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      pizzaList: res.data
    },
  };
};