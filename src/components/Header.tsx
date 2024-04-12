import Star from "./Star";



export const Header = () => {
  return (
    <div className="header">
      <img
        src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
        alt="logo"
        width="100px"
        height="100px"
      />

      <Star selected={true}/>
      <Star selected={true}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>
  );
};
