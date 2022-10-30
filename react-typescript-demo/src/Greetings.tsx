import React from "react";

type greetings = {
  name: string;
  price: number;
  arrValue: Array<number>;
  objValue: {
    name: string;
    lName: string;
    id: boolean;
  };
};

const Greetings = (props: greetings) => {
  return (
    <div>
      {props.name} {props.price}
      <div>
        {props?.arrValue?.map(item=>item)}
      </div>
      <div>{props.objValue.name}</div>
    </div>
  );
};

export default Greetings;
