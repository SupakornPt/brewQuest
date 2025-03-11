// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";
// import Story from "../pages/Story";
// import Question1 from "../pages/Question1";
// import Question2 from "../pages/Question2";
// import Question3 from "../pages/Question3";
// import Question4 from "../pages/Question4";
// import Result from "../pages/Result";
// import { AnimatePresence, motion } from "framer-motion";

// const pageVariants = {
//     initial: { x: "100vw", opacity: 0 },
//     animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//     exit: { x: "-100vw", opacity: 0, transition: { duration: 0.5 } }
// };

// const PageTransition = ({ children }) => (
//     <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} style={{ position: "absolute", width: "100%" }}>
//         {children}
//     </motion.div >
// );

// const AnimatedRoutes = () => {
//     const location = useLocation();

//     return (
//         <AnimatePresence mode="sync">
//             <Routes location={location} key={location.pathname}>
//                 <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
//                 <Route path="/story" element={<PageTransition><Story /></PageTransition>} />
//                 <Route path="/question1" element={<PageTransition><Question1 /></PageTransition>} />
//                 <Route path="/question2" element={<PageTransition><Question2 /></PageTransition>} />
//                 <Route path="/question3" element={<PageTransition><Question3 /></PageTransition>} />
//                 <Route path="/question4" element={<PageTransition><Question4 /></PageTransition>} />
//                 <Route path="/result" element={<PageTransition><Result /></PageTransition>} />
//             </Routes>
//         </AnimatePresence>
//     );
// };

// const AppRoute = () => {
//     return (
//         <Router>
//             <AnimatedRoutes />
//         </Router>
//     );
// };

// export default AppRoute;

import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LandingPage from "../pages/LandingPage";
import Story from "../pages/Story";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";
import Question3 from "../pages/Question3";
import Question4 from "../pages/Question4";
import Result from "../pages/Result";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
    enter: (direction) => ({
        x: direction > 0 ? "100vw" : "-100vw", // ขวา (next) หรือ ซ้าย (back)
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: (direction) => ({
        x: direction > 0 ? "-100vw" : "100vw", // ขวา (next) หรือ ซ้าย (back)
        opacity: 0,
        transition: { duration: 0.5 }
    })
};

const PageTransition = ({ children, direction }) => (
    <motion.div
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={pageVariants}
        style={{ position: "absolute", width: "100%" }}
    >
        {children}
    </motion.div>
);

const AnimatedRoutes = () => {
    const location = useLocation();
    const [direction, setDirection] = useState(1); // ค่าเริ่มต้นเป็น Next

    return (
        <AnimatePresence mode="sync">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition direction={direction}><LandingPage setDirection={setDirection} /></PageTransition>} />
                <Route path="/story" element={<PageTransition direction={direction}><Story setDirection={setDirection} /></PageTransition>} />
                <Route path="/question1" element={<PageTransition direction={direction}><Question1 setDirection={setDirection} /></PageTransition>} />
                <Route path="/question2" element={<PageTransition direction={direction}><Question2 setDirection={setDirection} /></PageTransition>} />
                <Route path="/question3" element={<PageTransition direction={direction}><Question3 setDirection={setDirection} /></PageTransition>} />
                <Route path="/question4" element={<PageTransition direction={direction}><Question4 setDirection={setDirection} /></PageTransition>} />
                <Route path="/result" element={<PageTransition direction={direction}><Result setDirection={setDirection} /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

const AppRoute = () => {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
};

export default AppRoute;
