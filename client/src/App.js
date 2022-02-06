import './App.css';
import { useFetchData } from './hooks/useFetchData';
import { Editor } from './components/Editor';
import { Wording } from './components/Wording';

function App() {
  const { data, loading } = useFetchData('http://localhost:8080/exercices');

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            marginTop: '5%'
          }}>
          {!loading && (
            <div>
              <Wording text={data[0].description} />
              <Editor codes={data[0]} />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
