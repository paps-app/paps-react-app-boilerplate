import React from "react";

import { Header } from "components/Header";
import useScroll from "utils/hooks/useScroll";

export const HomePage: React.FC<{ path: string }> = () => {
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);

  console.log(x, y);

  return (
    <div ref={scrollRef}>
      <Header scrollPosition={{ x, y }} />
      <div
        style={{
          marginTop: "8rem",
          height: "300vh"
        }}
      >
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};
