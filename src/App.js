import "./App.css";
import SponsorItemsList from "./components/SponsorItemsList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NftHero from "./assets/nft-hero.png";
import InitialRelease from "./components/NftCardWithText";
import NftCardList, { nfts } from "./components/NftCardList";
import NftTextCards from "./components/NftTextCards";
import HeroBottom from "./components/HeroBottom";
import Footer from "./components/Footer";

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
          name="Orange Man"
          number={12983}
        />
      </div>
      <SponsorItemsList />
      <NftCardList />
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
        color="green"
        series="Gloop series"
        name="Green Man"
        number={12983}
        imageOnRight={false}
      />
      <NftTextCards
        textTop="An NFT like no other"
        textMiddle="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9."
        textBottom="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT. "
      />
      <HeroBottom heroImage={NftHero} />
      <Footer />
    </div>
  );
}

export default App;
