import { FieldProps } from "formik";
import { useHooks } from "hooks";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { Input } from "antd";
import FileUploadIcon from "assets/images/icons/FileUploadIcon";

interface IProps extends FieldProps<any, any> {
	placeholder?: string;
	name: string;
	label: string;
	id: string;
	className?: string;
	rootClassName?: string;
	type?: "number" | "text";
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	oldUploadedFilesList?: string[];
	oldUploadedFilesName?: string;
	maxUploadCount: number;
	handleDelete?: (id: string) => void;
}

const FileUploader = (props: IProps) => {
	const {
		field: {  name },
		placeholder = "",
		label,
		form: { setFieldValue, setFieldTouched, touched, errors },
		rootClassName = "",
	} = props;

	const { t } = useHooks();


	return (
		<div className={rootClassName + " field-container"}>
			{label ? <p className='input__label'>{label}</p> : null}
			<label
				htmlFor={name}
				className='h-[152px] flex flex-col items-center justify-center gap-2 cursor-pointer bg-[#F4F4F4] rounded-xl file-upload p-3'
			>
				<FileUploadIcon />
				<h1 className='text-white text-center'>Rasm yuklang</h1>
				<span className='text-center text-[12px]'>PNG yoki JPG (max. 800x400px)</span>
				<Input
					type={"file"}
					id={name}
					placeholder={placeholder}
					name={name}
					status={!!touched[name] && !!errors[name] ? "error" : ""}
					onChange={e => {
						const hasFile = e.target.files;
						const MAX_FILE_SIZE = 5120 * 2; // 10MB
						if (hasFile?.length) {
							const fileSizeKiloBytes = hasFile[0].size / 1024;
							if (fileSizeKiloBytes > MAX_FILE_SIZE) {
								toast.error(t("Fayl hajmi 10mb dan oshmasligi zarur"));
								return;
							}
							setFieldValue(name, hasFile[0]);
						}
					}}
					onBlur={e => {
						setFieldTouched(name, true);
					}}
					className={"hidden"}
				/>
			</label>
			<p>{errors[name] && touched[name] ? <span>{errors[name]?.toString() ?? "Error"}</span> : null}</p>
		</div>
	);
};
export default FileUploader;
