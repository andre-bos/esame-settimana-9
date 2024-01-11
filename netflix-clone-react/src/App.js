import './App.css';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyGenres from './components/Generi';
import TrendingComp from './components/TrendingComp';
import WatchAgain from './components/WatchAgain';
import AppFooter from './components/AppFooter';

document.body.style.backgroundColor = "rgb(33, 37, 41)";

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <MyGenres />
        <TrendingComp />
        <WatchAgain />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
