import { ThemeProvider } from "./context/ThemeContext";
import Form from "./Form";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
// import './App.css';
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
