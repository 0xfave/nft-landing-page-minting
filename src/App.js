import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './components/sections/About';
import Faq from './components/sections/Faq';
import Home from './components/sections/Home';
import Navigation from './components/sections/Navigation';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'


function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
       <Navigation />
       <Home />
       <About />
       <Roadmap />
       <Showcase />
       <Team />
       <Faq />
       <Footer />
       <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
