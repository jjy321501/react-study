import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount!");

    return () => {
      console.log("unmount!");
    };
  }, []);

  return <div>UnmountTest component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>On/Off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
