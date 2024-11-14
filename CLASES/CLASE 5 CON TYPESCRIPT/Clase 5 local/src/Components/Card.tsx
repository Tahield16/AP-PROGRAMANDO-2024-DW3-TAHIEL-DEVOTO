import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/superhero/bootstrap.min.css";
import {Button, Card} from 'react-bootstrap';
function Cards(props: any) {
  return (
    <>
      <div className="card container">
        <img src={props.src} className="card-img-top row" alt={props.alt} />
        <div className="card-body row">
          <h5 className="card-title column-sm">{props.title}</h5>
          <p className="card-text column-sm">{props.text}</p>
          <a href={props.href} target="_blank" className="btn btn-primary column-sm">
            {props.linkName}
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
