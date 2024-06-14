import React from "react";

export default function About(props) {
  //const [myStyle, setMyStyle] = useState({
  //  color: "black",
  //  backgroundColor: "white",
  //});

  // const [btntext, setBtnText] = useState("Enable dark mode");

  /*const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark mode");
    }
  };*/

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Analyze your text in the textUtils application is a feature
              designed to evaluate various aspects of a given text. It offers
              insights such as word and character count, average reading time,
              frequency of specific words, and text complexity. This tool helps
              users understand and optimize their content by providing detailed
              metrics, making it useful for writers, editors, and anyone looking
              to improve their text's clarity and readability.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils application is not only a powerful tool but also free to
              use. This means users can access its full range of features
              without any cost, making it an ideal solution for students,
              writers, professionals, and anyone looking to improve their text.
              The free-to-use model ensures that high-quality text analysis is
              accessible to everyone, promoting better writing skills and
              effective communication without the barrier of subscription fees
              or one-time purchases. Enjoy comprehensive text analysis and
              elevate your writing with no financial commitment.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This feature ensures that users can analyze their texts
              conveniently from any device with internet access, be it a
              desktop, laptop, tablet, or smartphone. The browser compatibility
              also means that the tool supports various operating systems,
              including Windows, macOS, Linux, and mobile platforms like iOS and
              Android. This flexibility allows users to seamlessly integrate
              "Analyze Your Text" into their workflow, enhancing productivity
              and convenience.
            </div>
          </div>
        </div>
      </div>
      {/*<div className="container my-2">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>*/}
    </div>
  );
}
