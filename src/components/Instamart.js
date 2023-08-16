import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="section-container">
      <div className="accordian-header-container">
        <h3 className="accordian-header">{title}</h3>
        {isVisible ? (
          <button className="accordian-btn" onClick={() => setIsVisible(false)}>
            Hide
          </button>
        ) : (
          <button className="accordian-btn" onClick={() => setIsVisible(true)}>
            Show
          </button>
        )}
      </div>
      <div className="description-container">
        {isVisible && <p>{description}</p>}
      </div>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSecion] = useState("team");
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae numquam placeat sapiente, dicta at! Nulla ducimus labore soluta porro magnam odio distinctio, fugiat necessitatibus rerum accusantium eum, voluptatum magni?"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSecion("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae numquam placeat sapiente, dicta at! Nulla ducimus labore soluta porro magnam odio distinctio, fugiat necessitatibus rerum accusantium eum, voluptatum magni?"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSecion("team")}
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae numquam placeat sapiente, dicta at! Nulla ducimus labore soluta porro magnam odio distinctio, fugiat necessitatibus rerum accusantium eum, voluptatum magni?"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSecion("career")}
      />
    </div>
  );
};

export default Instamart;
