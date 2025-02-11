import { Header } from "../Header"; // Headerコンポーネントのインポートパスを修正

export const Page: React.FC = () => {
	return (
		<Header
			title="Title"
			ap={50}
			maxAp={100}
			credit={1000}
			pyroxene={500}
			onBack={() => console.log("Back button clicked")}
			onLobby={() => console.log("Lobby button clicked")}
		/>
	);
};
