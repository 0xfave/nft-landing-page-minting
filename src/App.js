import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './components/sections/About';
import Faq from './components/sections/Faq';
import Home from './components/sections/Home';
import Navigation from './components/sections/Navigation';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Mint from './components/sections/Mint';
import Team from './components/sections/Team';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'
import { useState } from 'react';


function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
       <Navigation accounts={accounts} setAccounts={setAccounts} />
       <Home />
       <About />
       <Roadmap />
       <Showcase />
       {/* <Mint accounts={accounts} setAccounts={setAccounts} /> */}
       <Team />
       <Faq />
       <Footer />
       <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
