import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    maringBottom: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    color: "var(--message-color)",
    fontWeight: "bold",
  };

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
