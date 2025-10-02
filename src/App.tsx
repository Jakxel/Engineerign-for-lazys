import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import "../src/styles/App.css"

function App() {
  return (
    <div className="wrapper">
      <Header />
      
      <div className="container">
        <Sidebar/>
        <Content/>
      </div>

      <Footer />
    </div>
  )
}

export default App;
