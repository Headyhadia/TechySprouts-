import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./App.module.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ScrollToTop from "./components/Utility/ScrollToTop";
import DemoPage from "./pages/DemoPage";

const MotionDiv = motion.div;

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay to allow Framer Motion animation to finish & DOM to render
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400); // match this to your animation duration
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname + location.hash}>
        <Route
          path="/"
          element={
            <MainLayout>
              <PageWrapper>
                <Home />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/watchdemo"
          element={
            <MainLayout>
              <PageWrapper>
                <DemoPage />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <MainLayout>
              <PageWrapper>
                <CoursesPage />
              </PageWrapper>
            </MainLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <MotionDiv
      key={Math.random()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </MotionDiv>
  );
}

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
