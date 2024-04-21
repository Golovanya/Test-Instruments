import instruments from "../mocks/mock";
import { useParams } from "react-router-dom";
import InstrumentCard from "../components/InstrumentCard";

interface item {
  id: number;
  name: string;
  image: string;
  description: string;
  recommendations?:string
 
}

function List() {
  const { type } = useParams<{ type: string }>();
  let dataToRender;
  type != undefined ? (dataToRender = instruments[type]) : null;

  return (
    <div className="container cards-grid">
      {dataToRender != undefined
        ? dataToRender.map((item: item) => (
            <InstrumentCard
              key={item.id}
              name={item.name}
              description={item.recommendations}
              image={item.image}
            ></InstrumentCard>
          ))
        : null}
    </div>
  );
}

export default List;
