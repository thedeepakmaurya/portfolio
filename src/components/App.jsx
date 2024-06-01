import CareerContainer from "./CareerContainer";
import EducationContainer from "./EducationContainer";
import Footer from "./Footer";
import Profile from "./Profile";

function App() {
  return (
    <div className=" sm:ml-5 sm:mr-5 sm:mt-5 sm:mb-10 md:ml-52 md:mr-52 md:mt-5 md:mb-10 xl:ml-96 xl:mr-96 xl:mt-10 xl:mb-10">
        <Profile/>
        <CareerContainer/>
        <EducationContainer/>
        <Footer/>
    </div>
  );
}

export default App;
