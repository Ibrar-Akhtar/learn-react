// import logo from './logo.svg';
import './App.css';
import './index.css';
// import FlexboxComponent from './flex-box/flexbox';
import CardComponent from './flex-box/cards';
function App() {
  return (
    <>
    <div className="bg-blue-500 text-white p-4">
      {/* <h2>khan</h2> */}
      <h1 className="text-3xl font-bold">Hello, Tailwind CSS!</h1>
    </div>
    <h1>app working</h1>
      <CardComponent/>
      {/* <FlexboxComponent/> */}
    </>
  );
}

export default App;
