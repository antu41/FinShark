import type React from "react";
import "./Card.css";
import type { JSX } from "react";
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Image" />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nam
        iusto, necessitatibus quibusdam unde veritatis explicabo deserunt
        nesciunt maxime laborum nobis tempore, deleniti doloribus ea quaerat
        blanditiis placeat ipsum cumque.
      </p>
    </div>
  );
};

export default Card;
