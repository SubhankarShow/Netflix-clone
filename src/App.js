
import './App.css';
import Row from './Row';
import requests from './requests';
import Navbar from './Navbar';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
    
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;
