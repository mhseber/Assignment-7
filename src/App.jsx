import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HButton from './components/HButton';
import Card from './components/Card';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import { useState } from 'react';
import Selected from './components/Selected';


const App = () => {
  const [coin, setCoin] = useState(0);

  const addCoin = () => {
    setCoin(prevCoin => prevCoin + 600000000);
  };

  const handlePlayerSelection = (playerPrice) => {
    if (coin >= playerPrice) {
      setCoin(prevCoin => prevCoin - playerPrice);
      alert('Player selected successfully')
    }
    else {
      alert('Not Enough Coins To Select This Player. ')
    }
  }


  return (
    <div className='container mx-auto px-4'>
      {/* navbar */}
      <Navbar coin={coin}></Navbar>
      {/* banner */}
      <Banner addCoin={addCoin} ></Banner>
      {/* h1+button */}
      <HButton></HButton>
      {/* Selected section */}
      <Selected></Selected>
      <section>
        {/* card section */}
        <Card onSelectPlayer={handlePlayerSelection}></Card>
      </section>

      {/* Subscribe */}
      <Subscribe></Subscribe>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;