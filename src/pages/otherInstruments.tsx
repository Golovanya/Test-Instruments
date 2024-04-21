import { Card } from "@consta/uikit/Card";
import other from "../mocks/other";

import { Text } from "@consta/uikit/Text";

function OtherList() {
    return ( 
        <div className="container ">
           {other.map(el => {
              return  <Card className="other-card"  verticalSpace="xl" horizontalSpace="2xl">
                <div>
                <Text  size="3xl" weight="bold" className="other-title">{el.name}</Text>
            <Text view="linkMinor" lineHeight="m" >{el.description}</Text>
                </div>
            <a href = {el.link} target="_blank"> <img src= {el.logo} className="other-image" /> </a>
              </Card>
           })}
        </div>
     );
}

export default OtherList;