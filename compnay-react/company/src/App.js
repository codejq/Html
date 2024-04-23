import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Gallery from "./Gallery";
import TicToc from "./TicToc";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Gallery></Gallery>
      <Footer></Footer>
      <TicToc></TicToc>
    </div>
  );
}
export default App;
