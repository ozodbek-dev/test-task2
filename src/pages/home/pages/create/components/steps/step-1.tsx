import { Fields } from "components";
import { FastField } from "formik";


function Step1() {
	return (
		<div className='flex flex-col max-w-[350px] gap-4'>
			<FastField autoFocus={true} component={Fields.InputText} name='name' label='Joy nomi' placeholder='Mini market' />
			<FastField component={Fields.InputMask} name='phone' label='Telefon raqami' />
			<FastField component={Fields.InputMask} name='phone2' label='Qo’shimcha telefon raqami' />
		</div>
	);
}

export default Step1;
