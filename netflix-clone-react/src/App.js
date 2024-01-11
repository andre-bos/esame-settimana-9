import './App.css';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyGenres from './components/MyGenres';
import MyGallery from './components/MyGallery';

document.body.style.backgroundColor = "rgb(33, 37, 41)";

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <MyGenres />
        <MyGallery />
      </main>
    </div>
  );
}

export default App;
