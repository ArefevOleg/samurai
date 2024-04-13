import { Rating } from "./Rating"


export function Nav() {
  return (
      <nav className="nav">
        <ul>
          <li>
            <a href="#c">Profile</a>
          </li>
          <li>
            <a href="#c">Messages</a>
          </li>
          <li>
            <a href="#c">Photo</a>
          </li>
          <li>
            <a href="#c">Music</a>
          </li>
          <li>
            <a href="#c">Settings</a>
          </li>
        </ul>
        <PageTitle title={"Rating star"}/>
        <Rating value={0}/>
        <PageTitle title={"Rating Name"}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
      </nav>
  );
}


type PageTitlePropsType = {
  title: string
}

export function PageTitle (props: PageTitlePropsType) {
return  <h1>{props.title}</h1>
}