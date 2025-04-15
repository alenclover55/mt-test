import Header from "./components/Header/Header";
import PostCard from "./components/PostCard/PostCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { mockData } from "./mockData";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <main id="main-container" className="main">
          <Header scrollContainerId="main-container" />
          <div className="posts-wrapper">
            {mockData.map(({ date, id, imgUrl, text, title }) => (
              <PostCard
                key={id}
                date={date}
                text={text}
                imgUrl={imgUrl}
                title={title}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
