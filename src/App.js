import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Vision from './components/pages/Vision';
import Mission from './components/pages/Mission';
import Psychologists from './components/pages/Psychologists';
import Blog from './components/pages/Blog';
import BlogPost from './components/pages/BlogPost';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/vizyon" element={<Vision />} />
          <Route path="/misyon" element={<Mission />} />
          <Route path="/psikologlarimiz" element={<Psychologists />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;