import List from "./components/List";
import Search from "./components/Search";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>My Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}
export default App;

