
interface Props {
  setShowFocusModal: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusValueSelect: (value: number) => void;
}
const FocusModal: React.FC<Props> = ({
  setShowFocusModal,
  onFocusValueSelect,
}) => {
  const values = [0.1,25, 35, 45, 60];
  return (
    <div
      className="bg-black/60 inset-0 flex items-center justify-center absolute"
      onClick={() => setShowFocusModal(false)}
    >
      <div
        className="bg-white/20 pt-8 backdrop-blur-lg p-6 rounded-2xl shadow-xl shadow-black/20"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold ">Select pomodoro duration</h2>
        <hr className="w-full mb-4" />
        <div className="grid grid-cols-2 gap-2">
          {values.map((val: number, index: number) => (
            <button
              key={index}
              className="bg-slate-950/50 px-4 py-3 rounded-xl shadow-lg active:ring-2 ring-green-500"
              onClick={() => {
                setShowFocusModal(false);
                onFocusValueSelect(val);
              }}
            >
              {val} mins
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusModal;
