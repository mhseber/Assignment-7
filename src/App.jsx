import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HButton from './components/HButton';
import Card from './components/Card';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      {/* navbar */}
      <Navbar></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* h1+button */}
      <HButton></HButton>
      {/* card section */}
      <Card></Card>
      {/* Subscribe */}
      <Subscribe></Subscribe>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;