// import Homework_16 from "homeworks/Homework_16/Homework_16"
// import Lesson_16 from "lessons/Lesson_16/Lesson_16"
import EmployeeMain from "pages/UserApp/EmployeeMain/EmployeeMain";
import Layout from "pages/UserApp/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (

    //   <>
    // {/* <Lesson_16 /> */}
    // {/* <Homework_16 /> */}
    // </>
    <BrowserRouter>
      <Layout>
        <EmployeeMain />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
