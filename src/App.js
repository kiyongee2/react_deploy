import './App.css';
import ArrayMap from './components/ArrayMap';
import Counter from './components/Counter';
import InputText from './components/InputText';
import UseEffect from './components/UseEffect';

function App() {
  // const msg="이것은 샘플 메시지입니다.";
  
  return (
    <div className="App">
      <Counter color="red" title="Hello, React" message="이것은 속성의 값입니다." />
      <InputText color="green" title="입력 상자 예제" />
      <ArrayMap color="blue" title="데이터 목록" />
      <UseEffect title="useEffect 훅 사용" />
    </div>
  );
}

export default App;
