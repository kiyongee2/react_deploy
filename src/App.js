import './App.css';
import ArrayMap from './components/ArrayMap';
import Counter from './components/Counter';
import InputText from './components/InputText';
import UseEffect from './components/UseEffect';

function App() {
  
  return (
    <div className="App">
      <Counter color="red" title="Hello, React" />
      <InputText color="green" title="입력 상자 예제" />
      <ArrayMap color="blue" title="데이터 목록" />
      <UseEffect title="useEffect 훅 사용" />
    </div>
  );
}

export default App;
