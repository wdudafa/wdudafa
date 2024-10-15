import DarkDiv from "./dark-div";
import { Experience } from "../constants/experiences";

interface Props {
  lightRadius: number;
  setHovering: (hovering: boolean) => void;
  experience: Experience;
}

const Card = ({ lightRadius, setHovering, experience }: Props) => {
  return (
    <DarkDiv
      lightRadius={lightRadius}
      setHovering={setHovering}
      className="transition-all duration-500 h-52 m-5 flex relative mx-11 lg:mx-3"
    >
      <input
        type="checkbox"
        id="btnControl"
        style={{
          zIndex: 10,
          opacity: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
          position: "absolute",
        }}
      />
      <div className="transition-all duration-500 flip-card border-0 w-full">
        <div className="flip-card-inner">
          <div className="flip-card-front p-2 bg-sky-200 w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="text-2xl text-sky-900 font-bold">
                {experience.title}
              </h1>
              <h2 className="text-xl text-sky-800">{experience.date}</h2>
            </div>
            {experience.logo && (
              <img
                className="h-28 w-28 rounded-lg p-2 mt-4"
                src={experience.logo}
                alt="Logo"
              ></img>
            )}
          </div>
          <div className="p-2 transition-all duration-500 flip-card-back bg-sky-200 w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-xl text-sky-900 ">{experience.description}</h1>
            <h2 className="text-l text-sky-800 font-bold">
              {experience.technologies.join(", ")}
            </h2>
          </div>
        </div>
      </div>
    </DarkDiv>
  );
};

export default Card;
