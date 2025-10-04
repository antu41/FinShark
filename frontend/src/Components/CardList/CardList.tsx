import type React from "react";
import Card from "../Card/Card";
import type { JSX } from "react";

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={150} />
      <Card companyName="Microsoft" ticker="MSFT" price={280} />
      <Card companyName="Google" ticker="GOOGL" price={2700} />
    </div>
  );
};

export default CardList;
