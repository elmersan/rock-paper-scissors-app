import { useState } from "react";
import { GridItems } from "./components/GridItems";
import { Layout } from "./components/Layout";
import { Modal } from "./components/Modal";

function App() {

  const [openModal, setOpenModal] = useState(false)
  const [score, setScore] = useState(0)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <Layout score={score}>
      {
        openModal && (
          <Modal handleOpenModal={handleOpenModal}/>
        )
      }
      <GridItems setScore={setScore}/>
      <button onClick={handleOpenModal} type="button" className="w-max m-[0_auto] text-white px-10 tracking-widest py-2 border-[3px] rounded-xl border-header_Outline">RULES</button>
    </Layout>
  );
}

export default App;
