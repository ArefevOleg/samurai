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
        <Rating value={4}/>
      </nav>
  );
}
