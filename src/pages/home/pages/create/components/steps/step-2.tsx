import { Fields } from "components";
import { FastField, FormikValues } from "formik";
import { useHooks } from "hooks";
import ViewFile from "components/view-file";
import { cn } from "lib/utils";

function Step2({values, setFieldValue, errors}: {values: FormikValues; setFieldValue: any, errors: any}) {
  const { get } = useHooks();
	return (
		<div className='flex flex-col gap-6 py-6'>
			<div className={cn(!!get(values, "image", null) ? "w-full" : "max-w-[200px]")}>
				{!!get(values, "image", null) && !get(errors, "image") ? (
					<h1 className='text-white text-center'>Rasm Yuklangan</h1>
				) : (
					<FastField name="image" component={Fields.FileUpload} />
				)}

				{get(errors, "image") ? (
					<p>
						<small className='text-red-500'>{(get(errors, "image") ?? "Error").toString()}</small>
					</p>
				) : null}
			</div>
			<div>
				{!!get(values, "image") && (
					<ViewFile
						file={get(values, "image")}
						name={get(values, "image.name")}
						type={get(values, "image.type")}
						handleDelete={() => {
							setFieldValue("image", null);
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default Step2;
