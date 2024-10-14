import DarkDiv from "./dark-div";

interface Props {
  lightRadius: number;
  setHovering: (hovering: boolean) => void;
  title: string;
  date: string;
}

const Card = ({ lightRadius, setHovering, title, date }: Props) => {
  return (
    <DarkDiv
      lightRadius={lightRadius}
      className="transition-all duration-500 h-52 w-96 m-5 flex relative"
      setHovering={setHovering}
    >
 <input type="checkbox" id="btnControl" style={{width: "100%", height: "100%", position: "absolute", zIndex: 10, opacity: 0}}/>
<div className="flip-card border-0 w-full">
            
            <div className="flip-card-inner">
              <div className="flip-card-front bg-sky-200 w-full h-full rounded-lg shadow-lg">
        <h1 className="text-2xl text-sky-900 font-bold">
              {title}
          </h1>
          <h2 className="text-xl text-sky-800">
              {date}
          </h2>

         

  
    </div>
    <div className="flip-card-back rounded-lg bg-sky-200 w-full shadow-lg">
      
    </div>
  </div>


</div>
    </DarkDiv>
  );
};

export default Card;
