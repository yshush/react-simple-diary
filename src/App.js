import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "yshush",
    content: "안녕!",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "git",
    content: "안녕하세요!",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "mandu",
    content: "안녕못해요!",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
