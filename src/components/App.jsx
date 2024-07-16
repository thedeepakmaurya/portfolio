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
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <Profile />
        <StackContainer />
        <ProjectContainer />
        <CertificationContainer />
        <EducationContainer />
        <InternContainer />
        <CareerContainer />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
