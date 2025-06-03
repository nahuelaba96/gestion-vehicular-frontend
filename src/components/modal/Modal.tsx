import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto p-4 rounded-lg shadow-lg">
      <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>&times;</button>
      {children}
    </div>

  );
};

export default Modal;
