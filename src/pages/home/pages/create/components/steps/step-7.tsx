import { Checkbox } from "antd";
import { additionalInformations } from "../consts";
import { useEffect, useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { get } from "lodash";
import { toast } from "react-toastify";
function Step7({ errors, setFieldValue }: { errors: any; setFieldValue: any }) {
	const [info, setInfo] = useState<string[]>([]);

	useEffect(() => {
		if (info.length) setFieldValue("about", info);
	}, [info.length]);
	const onChange = (e: CheckboxChangeEvent, value: string) => {
		if (info.includes(value) && e.target.checked) {
			setInfo(info.filter(item => item !== value));
		} else {
			setInfo(prev => [...prev, value]);
		}
	};
  return (
		<>
			{errors.about && <p className='text-red-500'>{errors.about}</p>}
			<div className='grid grid-cols-3 gap-10'>
				{additionalInformations.map((el: { name: string }) => (
					<div key={el.name}>
						<Checkbox className='text-white' onChange={(e: CheckboxChangeEvent) => onChange(e, el.name)}>
							{el.name}
						</Checkbox>
					</div>
				))}
			</div>
		</>
	);
}

export default Step7;
