import CareerContainer from "./CareerContainer";
import CertificationContainer from "./CertificationContainer";
import EducationContainer from "./EducationContainer";
import Footer from "./Footer";
import Profile from "./Profile";
import ProjectContainer from "./ProjectContainer";
import StackContainer from "./StackContainer";
import userContext from "../utils/userContext";
import { info } from "../utils/userContext";



function App() {
  return (
    <userContext.Provider value={info}>
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <Profile />
        <StackContainer />
        <ProjectContainer />
        <CertificationContainer />
        <EducationContainer />
        <CareerContainer />
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
