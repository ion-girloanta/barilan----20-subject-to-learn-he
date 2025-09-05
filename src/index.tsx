import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementSubjectToLearn } from "./screens/ElementSubjectToLearn/ElementSubjectToLearn";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementSubjectToLearn />
  </StrictMode>,
);
