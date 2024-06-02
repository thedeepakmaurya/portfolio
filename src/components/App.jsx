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
      <div className=" sm:ml-5 sm:mr-5 sm:mt-10 sm:mb-10 md:ml-20 md:mr-20 md:mt-10 md:mb-10 lg:ml-40 lg:mr-40 lg:mt-10 lg:mb-10 xl:ml-96 xl:mr-96 xl:mt-10 xl:mb-10">
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
