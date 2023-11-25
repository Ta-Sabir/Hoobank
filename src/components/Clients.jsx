import { clients } from "../constants";
import styles from "../style";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return (
            <div key={client.id} className={`flex-1 ${styles.flexCenter}`}>
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[129px] w-[100px] object-contain cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
