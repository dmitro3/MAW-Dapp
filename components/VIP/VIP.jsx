import Heading2 from "../headings/Heading2";
import styles from "../../styles/vipstyle.module.css";


const VIP = () => {
  return (
    <div className="max-w-[1296px] m-auto" id="vip">
      <div className="w-full lg:w-1/2 m-auto text-center">
        <div className={styles.vipTitle}>
          <Heading2>VIP</Heading2>
        </div>
        <p className="mt-[10px]">
          Mint and win offers special access levels and privileges for participants that hold certain NFTs.
          These special access levels may provide early access to events, exclusive NFT drops or other unique benefits.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2>Exclusive</h2>
            <ul>
              <li>Access to Exclusive Collections</li>
              <li>NFT Drops from Exclusive Collections</li>
              <li>3 MAW tokens/everyday</li>
            </ul>
            <a href="#">MINT</a>
          </div>
        </div>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2>DeLuxe</h2>
            <ul>
              <li>Access to Exclusive and DeLuxe Collections</li>
              <li>NFT Drops from DeLuxe Collection</li>
              <li>5 MAW tokens/everyday</li>
            </ul>
            <a href="#">MINT</a>
          </div>
        </div>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2>Ultimate</h2>
            <ul>
              <li>Access to Exclusive, DeLuxe and Ultimate Collections</li>
              <li>NFT Drops from Ultimate Collections</li>
              <li>Revenue share</li>
              <li>10 MAW tokens/everyday</li>
            </ul>
            <a href="#">MINT</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIP;
