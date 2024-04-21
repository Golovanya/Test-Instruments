import { Button } from "@consta/uikit/Button";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface CardProps {
    name:string,
    description?:string,
    image:string
}


function InstrumentCard({ name, description, image }: CardProps)  {
  const { type } = useParams<{ type: string }>();
  

  return (
    <Card verticalSpace="m" horizontalSpace="m" className="item-card">
      <img className="card-image" src={image}  alt={name}/>
      <Text size="3xl" weight="bold">
        {name}
      </Text>
      <Text view="linkMinor" className="card-description">
        {description? description : 'Описание отсутствует'}
      </Text>
      <Link to={`/list/${type}/${name}`}>
        <Button className="card-btn" label="Подробнее" size="s" />{" "}
      </Link>
    </Card>
  );
}

export default InstrumentCard;
