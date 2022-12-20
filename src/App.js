import "./styles.css";
import { useState } from "react";
import Modal from "./Modal";
export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click to see me!</h1>
      <button onClick={() => setShowModal(true)}>Click me!</button>
      {showModal && <Modal closeModal={setShowModal} />}
    </div>
  );
}
