// import logo from './logo.svg';
import girl from './Media/girl.png'
import './App.css';
import './index.css';
// import FlexboxComponent from './flex-box/flexbox';
// import CardComponent from './flex-box/cards';
import Navbar from './Website-Clone/webpage';
import Article from './Website-Clone/body';
import ResponsivePage from './Website-Clone/responsivepage';

function App() {
  return (
    <>
      <div className="bg-gray text-white p-4">
          <h1 className="text-3xl ">Mock Template</h1>
      </div>
      <Navbar/>
      <img src={girl} alt='girl in the field'/>
      <Article/>
      <ResponsivePage/>

    </>
  );
}

export default App;
