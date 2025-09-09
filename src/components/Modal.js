
export default function Modal({ message, onClose }) {

  return (
    <div className="modal">

      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
      
    </div>

  );

}
