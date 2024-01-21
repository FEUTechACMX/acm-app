import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import UndertakingStage1, {
	UndertakingGeneratorProps,
} from "./UndertakingStage1";
import UndertakingStage2 from "./UndertakingStage2";
import UndertakingStage3 from "./UndertakingStage3";

const UndertakingGenerator: React.FC<UndertakingGeneratorProps> = ({
	props,
}) => {
	return (
		<div className="flex w-full flex-col">
			<Tabs
				aria-label="Options"
				className="w-full grid"
				color={"primary"}
				radius="sm"
			>
				<Tab
					key="Information"
					title="Your Information"
					className="w-full text-center"
				>
					<Card radius="sm">
						<CardBody>
							<UndertakingStage1 props={props} />
						</CardBody>
					</Card>
				</Tab>
				<Tab
					key="Course Select"
					title="Course Select"
					className="w-full text-center"
				>
					<Card radius="sm">
						<CardBody>
							<UndertakingStage2 props={props} />
						</CardBody>
					</Card>
				</Tab>
				<Tab
					key="Compliance Check"
					title="Compliance Check"
					className="w-full text-center"
				>
					<Card radius="sm">
						<CardBody>
							<UndertakingStage3 props={props} />
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
};

export default UndertakingGenerator;
