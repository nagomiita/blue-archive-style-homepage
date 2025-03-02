import type React from "react";
import { useState } from "react";

interface TabProps {
	labels: string[];
	children: React.ReactNode[];
}

const Tabs: React.FC<TabProps> = ({ labels, children }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="overflow-hidden rounded-t-lg">
			<div className="flex border-b">
				{labels.map((label, index) => (
					<button
						type="button"
						key={label}
						className={"flex-1 px-4 py-2 font-bold"}
						onClick={() => setActiveTab(index)}
						style={{
							backgroundColor:
								activeTab === index ? "#2a4b65" : "rgba(42, 75, 101, 0.7)",
							color:
								activeTab === index ? "#f0fafc" : "rgba(240, 250, 252, 0.7)",
						}}
					>
						{label}
					</button>
				))}
			</div>
			<div className="rounded-b-lg border border-t-0 p-4">
				{children[activeTab]}
			</div>
		</div>
	);
};

export default Tabs;
