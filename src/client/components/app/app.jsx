import React, { useEffect } from "react";
import { Logo } from "../logo";
import { Form } from "../form";

import "./styles.css";
import { Final } from "../final/final";

function Screen({ isLoaded = true, share, email }) {
  if (isLoaded && share && email) {
    return <Final />;
  } else if (isLoaded) {
    return <Form />;
  }

  return null
}

export function App({ initUser, share, email, isLoaded }) {
  useEffect(() => {
    initUser();
  }, []);

  return (
    <>
      <Logo top={30} left={30} />
      <Screen isLoaded={isLoaded} share={share} email={email} />
    </>
  );
}
