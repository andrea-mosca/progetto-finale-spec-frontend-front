export default function CoffeCard({ title, category }) {
  return (
    <div className="card my-card-list mt-5">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-text">
          <strong>categoria:</strong> {category}
        </div>
      </div>
    </div>
  );
}
