import "./PackItem.css";
function PackItem({ img, children }) {
  return (
    <div className="overlay">
      <div className="pack-item">
        <img src={img} alt="Pack Item" />
      </div>
      <div className="text"> {children}</div>
    </div>
  );
}

export default PackItem;
