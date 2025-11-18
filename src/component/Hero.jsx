import StudentImg from "../assets/Component.png";
import EkitiLogo from "../assets/ekiti-logo.png";
import WakoLogo from "../assets/wakocode-logo.png";

function Hero() {
  return (
    <div className="w-full bg-white py-10">
      <div className=" form max-w-7xl mx-auto  rounded-3xl p-10 relative overflow-hidden flex flex-col md:flex-row items-center shadow-x2">
        <div className="md:w-2/2 space-y-3 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-red-600">Ekiti State</span> MSME ICT Skill
            Acquisition Hub:
          </h1>

          <p className="font-semibold">Empowering The Future Of Innovators</p>

          <p className="font-extrabold">Attendance WebApp</p>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10">
          <img src={StudentImg} alt="student" className="w-80 md:w-100" />
        </div>
      </div>

     

        <div className="flex aling items-center justify-center gap-10 mt-4">
          <h2 className="text-2xl font-extrabold">Powered By</h2>
          <img
            src={EkitiLogo}
            alt="ekiti"
            className="w-20 h-20 shadow-md rounded-md"
          />
          <img
            src={WakoLogo}
            alt="wakocode"
            className="w-28 h-20 shadow-md rounded-md"
          />
        </div>
     
    </div>
  );
}

export default Hero;
