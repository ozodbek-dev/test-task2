import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useEffect, useState } from "react";
import { places } from "../consts";
import { toast } from "react-toastify";
import { get } from "lodash";

function Step4({setFieldValue, errors}:{setFieldValue: any, errors: any}) {
  const [place_type, setPlaceType] = useState<string[]>([]);
	const onChange = (e: CheckboxChangeEvent, value: string) => {
		if (place_type.includes(value)) {
			setPlaceType(place_type.filter(item => item !== value));
		} else {
			setPlaceType(prev => [...prev, value]);
		}
  };

  useEffect(() => { 
    toast.error('Kamida 1 ta turi tanlang')
  },[get(errors,"place_type")])

  return (
			<div className='grid grid-cols-4 gap-6'>
				<div>
					{places.slice(0, 3).map(el => (
						<div key={el.groupname} className='flex flex-col gap-6 pt-6'>
							<h1>{el.groupname}</h1>
							<div className='flex flex-col gap-4'>
								{el.children.map(place => (
									<div className='flex items-center' key={place.name}>
										<Checkbox className='text-white' onChange={(e: CheckboxChangeEvent) => onChange(e, place.value)}>
											{place.name}
										</Checkbox>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div>
					{places.slice(3, 5).map(el => (
						<div key={el.groupname} className='flex flex-col gap-6 pt-6'>
							<h1>{el.groupname}</h1>
							<div className='flex flex-col gap-4'>
								{el.children.map(place => (
									<div className='flex items-center' key={place.name}>
										<Checkbox className='text-white' onChange={(e: CheckboxChangeEvent) => onChange(e, place.value)}>
											{place.name}
										</Checkbox>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div>
					{places.slice(5, 8).map(el => (
						<div key={el.groupname} className='flex flex-col gap-6 pt-6'>
							<h1>{el.groupname}</h1>
							<div className='flex flex-col gap-4'>
								{el.children.map(place => (
									<div className='flex items-center' key={place.name}>
										<Checkbox className='text-white' onChange={(e: CheckboxChangeEvent) => onChange(e, place.value)}>
											{place.name}
										</Checkbox>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div>
					{places.slice(9).map(el => (
						<div key={el.groupname} className='flex flex-col gap-6 pt-6'>
							<h1>{el.groupname}</h1>
							<div className='flex flex-col gap-4'>
								{el.children.map(place => (
									<div className='flex items-center' key={place.value}>
										<Checkbox className='text-white' onChange={(e: CheckboxChangeEvent) => onChange(e, place.value)}>
											{place.name}
										</Checkbox>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
	);
}

export default Step4;
