import { Fields } from "components";
import YaMap from "components/Map";
import { FastField, FormikValues } from "formik";

function Step3({values, setFieldValue}:{ values: FormikValues; setFieldValue: any }) {

  return (
					<div className='flex flex-col gap-6 py-6'>
						<div className='max-w-[200px]'>
							<FastField component={Fields.InputText} name='full_address' label='Joy manzilini kiriting' placeholder='Manzil' />
						</div>
						<YaMap setFieldValue={setFieldValue} values={values} />
						<FastField component={Fields.TextArea} name='address' label='Joy haqida ma’lumotlar' placeholder='Joy haqida' />
    </div>
  )
}

export default Step3
