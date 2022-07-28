export const Modal = ({handleOpenModal}) => {
  return (
    <div className={`animate__animated transition-all animate__fadeIn fixed inset-0 bg-white flex flex-col justify-around items-center`}>
      <h1 className="text-3xl font-bold text-dark_Text">RULES</h1>
      <img src="/assets/image-rules.svg" alt="images rules" />
      <button onClick={handleOpenModal} type="button" className="" >
        <img src="/assets/icon-close.svg" alt="icon close" />
      </button>
    </div>
  )
}
