import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px]`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w[200px] mt-1`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
};

export default CTA;
