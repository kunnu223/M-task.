import "./App.css";
import MyHeaderComponent from "./components/Header";
import QualityFeatures from "./components/Tutorials";
import Working from "./components/Working";
import Faq from "./components/Faq";
import Faq2 from "./components/Faq2";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import MyComponent from "./components/Features";
function App() {
  return (
    <div className="main">
      <MyHeaderComponent></MyHeaderComponent>
      <QualityFeatures></QualityFeatures>
      <MyComponent></MyComponent>
      <Working></Working>
      <Faq></Faq>
      <Faq2></Faq2>
      <Ready></Ready>
      <Footer></Footer>
    </div>
  );
}

export default App;
