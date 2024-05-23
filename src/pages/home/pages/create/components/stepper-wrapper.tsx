import FormWrapper from "components/form-wrapper";
import Stepper from "components/stepper";
import { Form, Formik, FormikHelpers } from "formik";
import { useHooks } from "hooks";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Step1 from "./steps/step-1";
import Step2 from "./steps/step-2";
import Step3 from "./steps/step-3";
import Step4 from "./steps/step-4";
import Step5 from "./steps/step-5";
import Step6 from "./steps/step-6";
import Step7 from "./steps/step-7";
import Step8 from "./steps/step-8";
import { cn } from "lib/utils";
import { weekDays } from "./consts";
import axios from "axios";
import Spinner from "components/spinner";

interface StepperWrapperProps {
	formTitle: string;
	description?: {
		title: string;
		content: string;
	};
}

const getFileSizeInMB = (file: File) => file.size / 1024 / 1024;

const validationSchemas = [
	Yup.object({
		name: Yup.string().required("Kiritish majburiy"),
		phone: Yup.string().required("Kiritish majburiy"),
		phone2: Yup.string().required("Kiritish majburiy"),
	}),
	Yup.object({
		image: Yup.mixed()
			.required("A file is required")
			.test("Fayl hajmi juda katta. 10 Mb dan oshmasligi kerak", (value: any) => {
				return value && getFileSizeInMB(value) <= 10;
			})
			.test("type", "Fayl formati xato", (value: any) => {
				return value && ["image/jpeg", "image/png", "image/gif", "image/webp", "image/jpg"].includes(value.type); // Allowed file types
			}),
	}),
	Yup.object({
		address: Yup.string().required("Majburiy"),
		full_address: Yup.string().required("Majburiy"),
		latitude: Yup.number().required("Majburiy"),
		longitude: Yup.number().required("Majburiy"),
	}),
	Yup.object({
		place_type: Yup.array().required("Majburiy"),
	}),
	Yup.object({
		work_days: Yup.array()
			.of(
				Yup.object({
					active: Yup.boolean().required("Active status is required"),
					dayOfWeek: Yup.number().required("Majburiy"),
					startTime: Yup.string().required("Majburiy"),
					endTime: Yup.string().required("Majburiy"),
				})
			)
			.test("work_days", "Kamida 1 ta kun activ bo'lishi kerak", items => {
				return items && items.some(item => item.active);
			})
			.required("Majburiy"),
		timezone: Yup.object().required("Majburiy"),
	}),

	Yup.object({
		instagram: Yup.string()
			.url("URL formati xato")
			.required("Majburiy"),
		website: Yup.string()
			.url("URL formati xato")
			.required("Majburiy"),
		facebook: Yup.string()
			.url("URL formati xato")
			.required("Majburiy"),
		telegram: Yup.string()
			.url("URL formati xato")
			.required("Majburiy"),
		telegram_bot: Yup.string().required("Majburiy"),
		twitter: Yup.string()
			.url("URL formati xato")
			.required("Majburiy"),
		youtube: Yup.string()
			.url("URL formati xato")
			.required("Majburiy"),
	}),
	Yup.object({
		about: Yup.array().required("Majburiy"),
	}),

	Yup.object({
		user_name: Yup.string().required("Majburiy"),
		user_phone: Yup.string().required("Majburiy"),
	}),
];

const initialValues = {
	name: "",
	phone: "+998",
	phone2: "+998",
	image: "",
	address: "",
	full_address: "",
	latitude: 41.3106176,
	longitude: 69.2518912,
	place_type: [],
	work_days: weekDays.map(item => ({ startTime: "9:00", endTime: "18:00", name: item.name, active: false, dayOfWeek: item.day })),
	timezone: "",
};

function StepperWrapper({ formTitle, description }: StepperWrapperProps) {
  const { get, query, navigate, qs } = useHooks();
  const [loading , setLoading] = useState(false);

	useEffect(() => {
		if (window) {
			window.scrollTo(0, 0);
		}
		if (!+get(query, "step", 0)) {
			navigate(
				{
					search: qs.stringify({
						...query,
						step: 1,
					}),
				},
				{ replace: true }
			);
		}
	}, []);
	const handleNext = (values: any, actions: FormikHelpers<any>) => {
		console.log("values", values);
		if (+get(query, "step", 1) < 8) {
			navigate({
				search: qs.stringify({
					...query,
					step: +get(query, "step", 1) + 1,
				}),
			});
		} else {
			actions.setSubmitting(false);
			const formData = new FormData();

			Object.keys(values).forEach(key => {
				formData.append(key, values[key]);
			});

			formData.delete("place_type");
			formData.delete("work_days");
			formData.delete("timezone");
			formData.delete("about");
			formData.append("place_type", JSON.stringify(values.place_type));
			formData.append(
				"work_days",
				JSON.stringify(
					values.work_days
						.filter((el: any) => el.active)
						.map((el: any) => ({ dayOfWeek: el.dayOfWeek, startTime: el.startTime, endTime: el.endTime }))
				)
			);
			formData.append("timezone", get(values,'timezone.label'));
      formData.append("about", JSON.stringify(values.about));
      setLoading(true)
			axios
				.post(`${import.meta.env.VITE_API_URL}/new-place/`, formData, { headers: { "Content-Type": "multipart/form-data" } })
				.then(res => {
					navigate("/");
				})
				.catch(err => {
					console.log(err);
        }).finally(() => {
          setLoading(false)
        })
		}
	};

	const prev = () => {
		if (+get(query, "step", 1) > 1) {
			navigate({
				search: qs.stringify({
					...query,
					step: +get(query, "step", 1) - 1,
				}),
			});
		}
	};
	return (
		<div className='flex flex-col gap-10 w-full'>
			<Stepper
				activeStep={+get(query, "step", 1)}
				stepsCount={8}
				steps={[
					{
						title: "Joy nomi",
					},
					{
						title: "Joy rasmlari",
					},
					{
						title: "Joylashuv ma’lumotlari",
					},
					{
						title: "Joy turi",
					},
					{
						title: "Ish vaqtlari",
					},
					{
						title: "Havolalar",
					},
					{
						title: "Qo’shimcha ma’lumotlar",
					},
					{
						title: "Arizachi ma’lumoti",
					},
				]}
			/>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchemas[+get(query, "step", 1) - 1]}
				onSubmit={handleNext}
			>
				{({ isSubmitting, values, setFieldValue, errors }) => {
					return (
						<Form>
							<FormWrapper title={formTitle} description={description}>
								<div className='flex flex-col gap-6 py-6'>
									<div className='w-full'>
										{+get(query, "step", 1) === 1 && <Step1 />}
										{+get(query, "step", 1) === 2 && <Step2 values={values} setFieldValue={setFieldValue} errors={errors} />}
										{+get(query, "step", 1) === 3 && <Step3 values={values} setFieldValue={setFieldValue} />}
										{+get(query, "step", 1) === 4 && <Step4 setFieldValue={setFieldValue} errors={errors} />}
										{+get(query, "step", 1) === 5 && <Step5 values={values} setFieldValue={setFieldValue} errors={errors} />}
										{+get(query, "step", 1) === 6 && <Step6 />}
										{+get(query, "step", 1) === 7 && <Step7 errors={errors} setFieldValue={setFieldValue} />}
										{+get(query, "step", 1) === 8 && <Step8  />}
									</div>
								</div>
								<div className='flex justify-end items-center w-full gap-8'>
									{+get(query, "step", 1) > 1 && +get(query, "step", 1) < 8 && (
										<button
											onClick={prev}
											type='button'
											className=' shadow-md shadow-[#2970FF]/40 flex items-center gap-1 h-[40px] px-4 rounded-[8px] bg-transparent hover:bg-[#2970FF] border border-[#2970FF] transition-all'
										>
											{" "}
											<FaArrowLeft /> Orqaga{" "}
										</button>
									)}

									{+get(query, "step", 1) <= 8 && (
										<button
                      type='submit'
                      disabled={loading}
											className={cn(
												"flex shadow-md shadow-[#2970FF]/40  items-center gap-1 h-[40px] px-4 rounded-[8px] bg-[#2970FF] hover:bg-[#ff70FF] transition-all"
											)}
										>
                      {+get(query, "step", 1) == 8 ? "Yuborish" : "Keyingisi"} <FaArrowRight />
                      {
                        loading && <Spinner/>
                      }
										</button>
									)}
								</div>
							</FormWrapper>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default StepperWrapper;
