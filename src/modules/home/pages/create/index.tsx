import { useHooks } from "hooks";
function Create() {
	const {
		query: { step = 1 },
	} = useHooks();

	return <div>Create</div>;
}

export default Create;
