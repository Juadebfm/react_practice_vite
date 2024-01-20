import "../App.css";

function NavSection() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
          />
        </a>
        <div>
          <ul className="text-black list-group flexContainer">
            <li className="list-group-item">Nav Item</li>
            <li className="list-group-item">Nav Item</li>
            <li className="list-group-item">Nav Item</li>
            <li className="list-group-item">Nav Item</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavSection;
