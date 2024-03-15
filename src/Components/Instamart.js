import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible();
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible();
          }}
        >
          Show
        </button>
      )}

      {isVisible && <h3>{description}</h3>}
    </div>
  );
};
const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"Desciption of about instamart"}
        isVisible={isVisibleSection === "about"}
        setIsVisible={() => {
          setIsVisibleSection(isVisibleSection === "about" ? "" : "about");
        }}
      />
      <Section
        title={"Team Instamart"}
        description={"Description of team instamart"}
        isVisible={isVisibleSection === "team"}
        setIsVisible={() => {
          setIsVisibleSection(isVisibleSection === "team" ? "" : "team");
        }}
      />
      {/* <h1>Instamart</h1>
      <h2>100's of components</h2> */}
    </div>
  );
};
export default Instamart;
