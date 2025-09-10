import { Link } from "react-router-dom";

export default function CoffeCard({ title, category, id }) {
  return (
    <Link to={`/coffees/${id}`} className="card my-card-list mt-5 h-100">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-text">
          <strong>categoria:</strong> {category}
        </div>
      </div>
    </Link>
  );
}
