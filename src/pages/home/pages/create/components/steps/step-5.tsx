import { FastField, Field, FieldArray, FormikValues } from "formik";
import { Switch, Tooltip } from "antd";
import moment from "moment-timezone";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Fields } from "components";
import { useHooks } from "hooks";

function Step5({ values, setFieldValue, errors }: { values: FormikValues; setFieldValue: any; errors: any }) {
	const [selectedTimeZone, setSelectedTimeZone] = useState<string | undefined>(undefined);

	const timeZones = moment.tz.names();

	const handleChange = (value: string) => {
		setSelectedTimeZone(value);
	};
	const { get } = useHooks();
	return (
		<div>
			<h1 className='text-white text-[20px] leading-[28px] font-[500]'>Hafta kunlari</h1>
			<FieldArray name='work_days'>
				{() => {
					return (
						<div className='flex flex-col gap-4 py-6 '>
							{get(values, "work_days", []).map((el: any, index: number) => (
								<div className='flex items-center gap-8 max-w-[350px]'>
									<div className='flex items-center gap-2 min-w-[150px]'>
										<Switch
											onChange={e => {
												if (e) {
													setFieldValue(`work_days.${index}.active`, true);
												} else {
													setFieldValue(`work_days.${index}.active`, false);
												}
											}}
										/>
										<p className='text-white'>{el.name}</p>
									</div>
									<div key={el.name} className=' flex items-center gap-1'>
										<div className='field-container w-[100px] '>
											<Field
												component={Fields.InputText}
												placeholder='9:00'
												name={`work_days.${index}.startTime`}
												isDisabled={!el.active}
											/>
										</div>
										<div className='h-[2px] w-[15px] bg-white rounded-md '></div>
										<div className='field-container w-[100px] '>
											<Field
												component={Fields.InputText}
												placeholder='18:00'
												isDisabled={!el.active}
												name={`work_days.${index}.endTime`}
											/>
										</div>
									</div>
								</div>
              ))}
              {errors.work_days && <p className='text-red-500'>{errors.work_days}</p>}
						</div>
					);
				}}
			</FieldArray>

			<div className='flex gap-4 items-center  pb-3 border-b border-b-[#333333]'>
				<h1 className='text-[29px] font-bold leading-[41px] text-[#FDFDFD]'>Vaqt Mintaqasi</h1>

				<Tooltip rootClassName='p-2' placement='right' title={"No Data"}>
					<HiOutlineExclamationCircle className='w-[20px] h-[20px]  text-[#98A2B3]' />
				</Tooltip>
			</div>

			<div className='field-container w-[320px] flex flex-col gap-2 '>
				<p className='input_label'>Vaqt mintaqasini tanlang</p>
				<FastField
					component={Fields.Select}
					placeholder='Timezone'
					className=' !w-full bg-[]'
					options={timeZones.map(timeZone => ({ label: timeZone, value: timeZone }))}
					onChange={handleChange}
					name='timezone'
				/>
			</div>
		</div>
	);
}

export default Step5;
