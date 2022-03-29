import React from "react";

const SubscriberTableRow = ({data}) => {
  return data.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td> {item.email} </td>
      </tr>
    );
  });
};

export default SubscriberTableRow;