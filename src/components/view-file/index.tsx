import CloseIcon from "assets/images/icons/CloseIcon";
import DownloadIcon from "assets/images/icons/DowloadIcon";
import PdfFile from "assets/images/icons/PdfFile";
import { toast } from "react-toastify";
interface IProp {
	name?: string;
	type?: string;
	file?: Blob | MediaSource;
	className?: string;
	handleDelete?: () => void;
}
const ViewFile = (prop: IProp) => {
	const { name, file, type, className, handleDelete = () => {} } = prop;
	const downloadHandler = () => {
		if (file) {
			const url = URL.createObjectURL(file);
			if (url) {
				const link = document.createElement("a");
				link.href = url;
				link.target = "_blank";
				link.download = name || "download";
				link.click();
			}
			return;
		}
		toast.error("Fayl yuklanmagan!");
	};

	return (
		<div className={`flex items-center justify-between bg-slate-700 rounded-[4px] px-[12px] py-[8px] mb-[10px] ${className} `}>
			<div className='flex items-center'>
				<div className='flex flex-col items-center'>
					<PdfFile />
					<span className='text-[#888888]'>{type}</span>
				</div>
				<h1 className='ml-[16px] text-[16px not-italic font-normal leading-[20px] text-slate-300'>{name}</h1>
			</div>
			<div className='flex items-center'>
				<p className='mr-[16px] text-[16px] not-italic font-normal leading-[20px] text-slate-400 '>{type}</p>
				<button onClick={downloadHandler} className='bg-transparent border-none'>
					<DownloadIcon />
				</button>
				<div
					onClick={() => {
						handleDelete();
					}}
					className='cursor-pointer ml-[20px]'
				>
					<CloseIcon fill='#fff' />
				</div>
			</div>
		</div>
	);
};
export default ViewFile;
