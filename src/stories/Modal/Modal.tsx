import type React from "react";

interface ModalProps {
	title: string;
	children: React.ReactNode;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="w-1/2 overflow-hidden rounded-lg bg-white shadow-lg">
				<div
					className=" flex items-center justify-between p-2 text-white"
					style={{ backgroundColor: "#2a93f8" }}
				>
					<h2 className="font-semibold text-2xl">{title}</h2>
					<button
						type="button"
						className="text-6xl text-white"
						onClick={onClose}
					>
						&times;
					</button>
				</div>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
