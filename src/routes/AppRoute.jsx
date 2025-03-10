import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import Story from "../pages/Story"
import Question1 from "../pages/Question1"
import Question2 from "../pages/Question2"
import Question3 from "../pages/Question3"
import Question4 from "../pages/Question4"
import Result from "../pages/Result"


const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "story", element: <Story /> },
    { path: "question1", element: <Question1 /> },
    { path: "question2", element: <Question2 /> },
    { path: "question3", element: <Question3 /> },
    { path: "question4", element: <Question4 /> },
    { path: "result", element: <Result /> },
])

const AppRoute = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default AppRoute