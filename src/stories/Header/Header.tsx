import Image from "next/image";
import React from "react";

export interface HeaderProps {
	title: string;
	ap: number;
	maxAp: number;
	credit: number;
	pyroxene: number;
	onBack?: () => void;
	onLobby?: () => void;
}

export const Header = ({
	title,
	ap,
	maxAp,
	credit,
	pyroxene,
	onBack,
	onLobby,
}: HeaderProps) => {
	const commonItemClasses = "flex items-center space-x-2 text-lg";
	const commonDividerClasses =
		"h-8 w-[2px] bg-gray-400 transform rotate-[15deg]";

	return (
		<div className="z-50 h-12 mx-auto px-8 bg-white rounded-b-lg flex items-center">
			<button
				type="button"
				className="p-0 m-0 border-none bg-transparent active:scale-90"
				onClick={onBack}
			>
				<Image src="/img/back.png" alt="Back" width={40} height={40} />
			</button>

			<div className="px-5 border-b-4 border-yellow-300 text-2xl font-bold">
				<p>{title}</p>
			</div>

			<div className="ml-auto flex items-center space-x-4">
				<div className={commonItemClasses}>
					<Image src="/img/ap.png" alt="AP" width={30} height={30} />
					<p>
						{ap} / {maxAp}
					</p>
					<div className={commonDividerClasses} />
				</div>

				<div className={commonItemClasses}>
					<Image src="/img/gold.png" alt="Gold" width={30} height={30} />
					<p>{credit.toLocaleString()}</p>
					<div className={commonDividerClasses} />
				</div>

				<div className={commonItemClasses}>
					<Image
						src="/img/pyroxene.png"
						alt="Pyroxene"
						width={30}
						height={30}
					/>
					<p>{pyroxene.toLocaleString()}</p>
					<div className={commonDividerClasses} />
				</div>
			</div>

			<button
				type="button"
				className="h-9 aspect-square ml-4 active:scale-90"
				onClick={onLobby}
			>
				<Image src="/img/home.png" alt="Home" width={40} height={40} />
			</button>
		</div>
	);
};
