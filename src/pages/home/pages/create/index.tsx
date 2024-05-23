import { useHooks } from "hooks";
import StepperWrapper from "./components/stepper-wrapper";
import stepsList, { IStep } from "./components/consts";
import { useEffect, useState } from "react";
function Create() {
	const { query, get } = useHooks();
	const [currentStep, setCurrentStep] = useState<IStep>(stepsList[0]);

	useEffect(() => {
		setCurrentStep(stepsList.find(item => item.id === +get(query, "step", 1)) as IStep);
	}, [get(query, "step", 1)]);

	return (
		<div className='max-w-[884px] mx-auto flex flex-col gap-10'>
			<StepperWrapper
				formTitle={currentStep.name}
				description={{
					content:
						"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.",
					title: "This is a tooltip",
				}}
			/>
		</div>
	);
}

export default Create;
