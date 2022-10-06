import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeViewContainer } from "./containers/views/HomeViewContainer";
import { CharacterViewContainer } from "./containers/views/CharacterViewContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeViewContainer />} />
        <Route path="/characters/:id" element={<CharacterViewContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
