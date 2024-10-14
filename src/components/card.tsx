import DarkDiv from "./dark-div";

interface Props {
  lightRadius: number;
  setHovering: (hovering: boolean) => void;
}

const Card = ({ lightRadius, setHovering }: Props) => {
  return (
    <DarkDiv
      lightRadius={lightRadius}
      className=" transition-all duration-500 h-52 w-96 bg-sky-200 rounded-lg mx-5 flex justify-center items-center shadow-lg cursor-pointer"
      setHovering={setHovering}
      onClick={() => {
        console.log("clicked");
      }}
    ></DarkDiv>
  );
};

export default Card;
