import { Tooltip } from "antd";
import { cn } from "lib/utils";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface IProp {
	children: React.ReactNode;
	className?: string;
	title?: string;
	description?: {
		title?: string;
		content: string;
	};
}
const FormWrapper = (props: IProp) => {
	const { children, className, title } = props;
	return (
	<div className={cn("max-w-[884px] text-white p-10  bg-[#18181B] rounded-[24px] border-2 border-[#42424259]", className)}>
		<div className='flex gap-4 items-center  pb-3 border-b border-b-[#333333]'>
			{title && <h1 className='text-[29px] font-bold leading-[41px] text-[#FDFDFD]'>{title}</h1>}

			<Tooltip
				rootClassName='p-2'
				placement='right'
				title={
					<>
						{!!props.description ? (
							<div className='flex flex-col gap-1 w-full h-full '>
								<h3 className='leading-[18px] text-[12px] font-[500] text-white'>{props.description?.title}</h3>
								<p className='leading-[18px] text-[12px] font-normal text-[#D0D5DD]'>{props.description?.content}</p>{" "}
							</div>
						) : (
							<p className='leading-[18px] text-[12px] font-normal text-[#D0D5DD]'>No tooltip!</p>
						)}
					</>
				}
			>
				<HiOutlineExclamationCircle className='w-[20px] h-[20px]  text-[#98A2B3]' />
			</Tooltip>
		</div>
			{children}
		</div>
	);
};

export default FormWrapper;
