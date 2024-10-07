import CareerContainer from "./CareerContainer";
import CertificationContainer from "./CertificationContainer";
import EducationContainer from "./EducationContainer";
import Footer from "./Footer";
import Profile from "./Profile";
import ProjectContainer from "./ProjectContainer";
import StackContainer from "./StackContainer";
import { UserProvider } from "../utils/userContext";
import InternContainer from "./InternContainer";


function App() {
  return (
    <UserProvider>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-gray-800">
        <div className="sm:w-[90%] md:w-[60%] xl:w-[42%] xxl:w-[35%] py-10">
          <Profile />
          <StackContainer />
          <ProjectContainer />
          <CertificationContainer />
          <EducationContainer />
          <InternContainer />
          <CareerContainer />
          <Footer />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
