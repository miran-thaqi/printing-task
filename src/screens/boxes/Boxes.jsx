import ID from "../id-box/ID";
import './boxes.css';
import React from 'react'
import list from "./dataList";

const Boxes = React.forwardRef((props, ref) => {

  return (
      <div className="boxes">
        {list.map((user,idx) => {
          return <ID data={user} key={idx} idx={idx}/>
        } )}
      </div>
  );
});

export default Boxes;
