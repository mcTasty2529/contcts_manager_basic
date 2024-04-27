import React from "react";

const Contacts = (props: any) => {
  return (
    <div className="bg-slate-300 w-[50dvw] m-2 p-2 flex flex-col gap-2 border-2 rounded-md border-slate-500 ">
      <div className="bg-white rounded-md p-1  font-bold">
        {props.data.name}
      </div>
      <div className="bg-white rounded-md p-1  font-bold">
        {props.data.phone}
      </div>
      <div className="bg-white rounded-md p-1  font-bold">
        {props.data.address}
      </div>
    </div>
  );
};

export default Contacts;
