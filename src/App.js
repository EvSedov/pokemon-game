// import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout id="1" title="Title 1" descr="Description 1" urlBg/>
      <Layout id="2" title="Title 2" descr="Description 2" colorBg="red" />
      <Layout id="3" title="Title 3" descr="Description 3" urlBg/>
      <Footer />
    </>
  );
}

export default App;
