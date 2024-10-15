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
      className="transition-all duration-500 h-52 m-5 flex relative mx-11 lg:mx-5"
      setHovering={setHovering}
    >
      <input
        type="checkbox"
        id="btnControl"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 10,
          opacity: 0,
          cursor: "pointer",
        }}
      />
      <div className="transition-all duration-500 flip-card border-0 w-full">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-sky-200 w-full h-full rounded-lg shadow-lg">
            <h1 className="text-2xl text-sky-900 font-bold">
              {experience.title}
            </h1>
            <h2 className="text-xl text-sky-800">{experience.date}</h2>
          </div>
          <div className="transition-all duration-500 flip-card-back rounded-lg bg-sky-200 w-full shadow-lg">
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
