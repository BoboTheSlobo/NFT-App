import "./style.css";

function NftCard(props) {
  const { image, series, topBid, name, ethLogo, price, number, daysLeft } =
    props;
  return (
    <div className="nft-card">
      <img className="ntf-card-img" src={image} alt={`nft-card-${name}`} />
      <div className="nft-card-details">
        <span className="nft-card-details-series">{series}</span>
        <span className="nft-card-details-top-bid">{topBid}</span>
        <span className="nft-card-details-name">{name}</span>
        <span className="nft-card-details-price">
          <img className="eth-logo" src={ethLogo} />
          {price} ETH
        </span>
        <span className="nft-card-details-number">#{number}</span>
        <span className="nft-card-details-days-left">{daysLeft} days left</span>
      </div>
    </div>
  );
}
export default NftCard;
