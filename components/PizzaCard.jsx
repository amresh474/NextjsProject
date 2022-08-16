import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza.id}`} passHref>
        <div>
        <Image src={pizza.image} alt="" width="500" height="500" />
  
     
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.price}</span>
      <p className={styles.desc}>{pizza.description}</p>
      </div>
      </Link>
    </div>
  );
};

export default PizzaCard;
