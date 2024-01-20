import { Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";
const UndertakingStage3 = () => {
	const [isRegulationChecked, setIsRegulationChecked] = useState(false);
	const [isEULAChecked, setIsEULAChecked] = useState(false);

	return (
		<div className="w-full flex flex-col gap-2">
			<Checkbox
				required
				className="break-words"
				isSelected={isRegulationChecked}
				onValueChange={setIsRegulationChecked}
			>
				I have fully read and understood the undertaking and agree to abide by
				the rules and regulations of the college.
			</Checkbox>
			<Checkbox
				required
				className="break-words"
				isSelected={isEULAChecked}
				onValueChange={setIsEULAChecked}
			>
				I agree to the terms and conditions of the End User License Agreement
				(EULA) in using the Project ACM-X Undertaking Generator.
			</Checkbox>
			<div className="w-full">
				<Button
					type="submit"
					color="primary"
					variant="solid"
					size="lg"
					radius="sm"
					className="w-full"
					disabled={!isRegulationChecked || !isEULAChecked}
				>
					-- Generate and Download --
				</Button>
			</div>
		</div>
	);
};

export default UndertakingStage3;
