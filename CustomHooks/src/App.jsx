import './App.css'
import useStorage from './components/useStorage';

function App() {
  const [content, setContent] = useStorage('content', '');

  return (
    <>
      <div>
        <input
          type="text"
          style={{
            width: '30vw',
            padding: '5px',
            fontSize: 'large',
          }}
          value={content} 
          onChange={(e) => {
            console.log(e.target.value);
            setContent(e.target.value);
          }}
        />
      </div>
    </>
  );
  
}

export default App
