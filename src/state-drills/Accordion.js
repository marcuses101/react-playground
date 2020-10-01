import React, { Component, useState } from "react";
import "./Accordion.css";

// export default class Accordion extends Component {
//   static defaultProps = {};
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentSectionIndex: null,
//     };
//   }
//   renderContent(index,content){
//     if (index === this.state.currentSectionIndex) {
//       return <p>{content}</p>
//     }
//   }

//   handleClick = (index) => {
//     const newState = this.state.currentSectionIndex !== index? index: null;
//     this.setState({ currentSectionIndex: newState });
//   };

//   render() {
//     const sections = this.props.sections?.map(({ title, content }, index) => {
//       return (
//         <li key={index}>
//           <button
//             onClick={() => {
//               this.handleClick(index);
//             }}
//           >
//             {title}
//           </button>
//           {this.renderContent(index,content)}
//         </li>
//       );
//     });

//     return <ul className="Accordion">{sections || <li/>}</ul>;
//   }
// }

export default function Accordion(props) {
  const { sections } = props;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(null);

  const handleClick = (index) => {
    const newState = currentSectionIndex !== index ? index : null;
    setCurrentSectionIndex(newState);
  };

  const renderContent = (index, content) => {
    if (index === currentSectionIndex) {
      return <p>{content}</p>;
    }
  };

  const listItems = sections?.map(({ title, content }, index) => {
    return (
      <li key={index}>
        <button
          onClick={() => {
            handleClick(index);
          }}
        >
          {title}
        </button>
        {renderContent(index, content)}
      </li>
    );
  });

  return <ul className="Accordion">{listItems || <li />}</ul>;
}
