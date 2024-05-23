import { useGet, useHooks } from "hooks";

export function useGetList(id?: string) {
	const { get, query } = useHooks();
	const response = useGet({
		name: "GET_LIST",
		url: 'new-place/',
		params: {
			page: Number(get(query, "page", 1)),
		},
	});
	return response;
}
