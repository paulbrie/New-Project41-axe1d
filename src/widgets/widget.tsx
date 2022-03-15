import React from "react";

const Widget = ({ text, color }: { text: string, color: string }) => {
  return (
    <div style={{ color: color || ''}}>
     {text}
    </div>
  );
};

export default Widget;
