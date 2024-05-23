import { Fields } from "components";
import { FastField } from "formik";
function Step8() {
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex flex-col max-w-[350px] gap-4 py-10'>
				<FastField component={Fields.InputText} name='user_name' label='Familiya va ism' placeholder='Familiya va ism' />
				<FastField component={Fields.InputMask} name='user_phone' label='Telefon raqami' />
			</div>
		</div>
	);
}

export default Step8;
