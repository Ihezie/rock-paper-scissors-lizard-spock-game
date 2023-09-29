import rulesImg from "../assets/images/image-rules-bonus.svg";
import closeIcon from "../assets/images/icon-close.svg";

const RulesModal = ({ setShowModal }) => {
  return (
    <section className="fixed py-10 h-screen top-0 left-0 right-0 bg-white sm:bg-black/50">
      <div className="flex flex-col items-center justify-around h-full sm:block sm:bg-white sm:w-[28rem] sm:h-[29rem] sm:rounded-xl sm:absolute sm:left-1/2 sm:top-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%]">
        <h2 className="text-center uppercase text-3xl font-bold sm:absolute sm:left-8 sm:top-10">
          rules
        </h2>
        <img src={rulesImg} alt="rules" className="sm:mt-24 sm:mx-auto" />
        <button
          className="cursor-pointer sm:absolute top-0 sm:mt-0 sm:right-8 sm:top-12"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <img src={closeIcon} alt="close" />
        </button>
      </div>
    </section>
  );
};
export default RulesModal;
