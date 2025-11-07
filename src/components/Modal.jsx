export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
        {children}
        <button onClick={onClose} className="font-bold">
          x
        </button>
      </div>
    </div>
  );
}
