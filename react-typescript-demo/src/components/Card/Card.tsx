import { Grid } from "@mui/material";
import "./Card.scss";
type CardProps = {
  image: string;
  title: string;
  type: string;
  price: number;
};
const Card = (props: CardProps) => {
  return (
    <Grid className="card-container">
      <div className="card-image-div">
        <img src={props?.image} alt="" />
      </div>

      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <div className="card-type">{props.type}</div>
        <div className="card-price">MRP : ₹ {props.price}</div>
      </div>
    </Grid>
  );
};

export default Card;
