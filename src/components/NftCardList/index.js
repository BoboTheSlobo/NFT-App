import "./style.css";
import NftCard from "../NftCard";
import NftCard1 from "../../assets/nft-card-1.png";
import NftCard2 from "../../assets/nft-card-2.png";
import NftCard3 from "../../assets/nft-card-3.png";
import NftCard4 from "../../assets/nft-card-4.png";
import EthLogo from "../../assets/eth-logo.png";

export const nfts = [
  {
    image: NftCard1,
    series: "Gloop series",
    name: "Slobodan",
    ethLogo: EthLogo,
    price: 2.99,
    number: 12234,
    daysLeft: 1,
  },
  {
    image: NftCard2,
    series: "Gloop series",
    name: "Bobo",
    ethLogo: EthLogo,
    price: 2.99,
    number: 12275,
    daysLeft: 1,
  },
  {
    image: NftCard3,
    series: "Gloop series",
    name: "Slobo",
    ethLogo: EthLogo,
    price: 2.99,
    number: 12948,
    daysLeft: 1,
  },
  {
    image: NftCard4,
    series: "Gloop series",
    name: "Bobodan",
    ethLogo: EthLogo,
    price: 2.99,
    number: 12983,
    daysLeft: 1,
  },
];

function NftCardList() {
  return (
    <div className="nft-card-list">
      <div className="rare-auction-text">
        <h2>LE Super Rare Auction</h2>
        <p>
          We have released four limited edition NFTs early which can be bid on
          via{" "}
          <a href="#" className="nft-card-list-open-sea-link">
            OpenSea
          </a>
          .
        </p>
      </div>
      <div className="nft-card-list-auction-container">
        {nfts.map((nft) => {
          return (
            <NftCard
              image={nft.image}
              series={nft.series}
              name={nft.name}
              ethLogo={nft.ethLogo}
              price={nft.price}
              number={nft.number}
              daysLeft={nft.daysLeft}
            />
          );
        })}
      </div>
    </div>
  );
}
export default NftCardList;
