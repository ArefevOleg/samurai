import { Rating } from "./Rating";

export function Header() {
  return (
    <div className="header">
      <img
        src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
        alt="logo"
        width="100px"
        height="100px"
      />
      <Accordion title={"Rating"}/>
      <Accordion title={"Menu"}/>
    </div>
  );
}

type AccordionPropsType = {
  title: string
}

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody />
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  return <div>
    <span>text </span>
    <span>text </span>
    <span>text </span>
    <span>text </span>
  </div>;
}
