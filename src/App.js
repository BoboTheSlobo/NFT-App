import "./App.css";
import SponsorItemsList from "./components/SponsorItemsList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NftHero from "./assets/nft-hero.png";
import InitialRelease from "./components/NftCardWithText";

// import NftCardList, { nfts } from "./components/NftCardList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={NftHero} />
        <InitialRelease
          title="Initial Realease 4/11"
          descriptionTop={`We have released four limited edition NFTs early which can be bid on via`}
          openSea={
            <a href="#" className="open-sea-link">
              OpenSea.
            </a>
          }
          descriptionMiddle="These will be the only four of these NFTs we ever make, so be sure not to miss out! "
          descriptionBottom="50% of proceeds go to charity."
          color="orange"
          imageOnRight={true}
          series="Gloop series"
          name="Red Man"
          number={12983}
        />
      </div>
      <SponsorItemsList />
    </div>
  );
}

{
  /* <NftCardList /> */
}
export default App;
