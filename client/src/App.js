import './App.css';
import { useFetchData } from './hooks/useFetchData';
import { Editor } from './components/Editor';

function App() {
  const { data, loading } = useFetchData('http://localhost:8080/exercices');

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            marginTop: '5%'
          }}>
          {!loading && <Editor codes={data} />}
        </div>
      </header>
    </div>
  );
}

export default App;
