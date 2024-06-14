import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import "./styles.css"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/book/:id" element={<BookDetails />} /> {/* New route */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
