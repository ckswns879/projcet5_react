import './style/nav.css';
import './style/header.css';
import './style/index.css';
function MyNav() {
  return (
    <nav>
        <div className="nav logo">
            <p>mylogo</p>
        </div>
        <ul className="nav menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">React</a></li>
        </ul>
        <ul className="nav icon">
            <li>페이스북</li>
            <li>인스타그램</li>
        </ul>
    </nav>
  );
}

export default MyNav;
