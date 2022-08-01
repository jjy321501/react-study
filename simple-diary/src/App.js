import "./App.css";

import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "정준영",
    content: "하이",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이정환",
    content: "하이2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "최선우",
    content: "하이3",
    emotion: 3,
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
