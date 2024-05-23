import { useHooks } from "hooks";
import { useGetList } from "pages/home/hooks/useGetList";
import { get } from "lodash";
import TableComponent from "container/Table";
import { Button } from "antd";
import PlusIcon from "assets/images/icons/PlusIcon";

export default function List() {
  const { data, isLoading } = useGetList();
  const { navigate } = useHooks();

	return (
		<div className='max-w-[1200px] mx-auto flex flex-col gap-10 items-start'>
			<Button className='flex items-center' onClick={() => navigate("/create")}>
				Yangi joy qo'shish
				<PlusIcon fill='black' />
			</Button>
			<div className="w-full">
				<TableComponent
					items={get(data, "results", [])}
					columns={[
						{
							title: "T/R",
							render: (_, data, index): any => {
								return <span>{index + 1}</span>;
							},
							key: "TR",
						},
						{
							title: "Joy nomi",
							render: (_, data) => {
								return <span>{get(data, "name", "-") ?? "-"}</span>;
							},
							key: "name",
						},
						{
							title: "Vaqt Zonasi",
							render: (_, data) => {
								return <span>{get(data, "timezone", "-") ?? "-"}</span>;
							},
							key: "timezone",
						},
						{
							title: "Koordinatalar",
							render: (_, data) => {
								return (
									<span className='flex flex-col gap-1'>
										<span>lat:{data.latitude}</span>
										<span>long:{data.longitude}</span>
									</span>
								);
							},
							key: "timezone",
						},
						{
							title: "Telefon raqami",
							render: (_, data) => {
								return <span>{get(data, "phone", "-") ?? "-"}</span>;
							},
							key: "phone_number",
						},
						{
							title: "Manzil",
							render: (_, data) => {
								return <span>{get(data, "full_address", "-") ?? "-"}</span>;
							},
							key: "full_address",
						},
						{
							title: "Rasm",
              render: (_, data) => {
								return !data?.image? "Rasm yo'q": <img className="w-full h-full object-cover" src={get(data, "image", "")} alt="image" />;
							},
							key: "full_address",
						},
					]}
					meta={{
						currentPage: get(data, "count")!,
						totalCount: +get(data, "count")!,
						perPage: get(data, "per_page", 10),
						pageCount: get(data, "last_page")!,
					}}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}
