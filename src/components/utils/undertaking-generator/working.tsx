import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	getKeyValue,
} from "@nextui-org/react";
import { courseJSON } from "public/data/json/export";

const columns = [
	{
		key: "code",
		label: "Code",
	},
	{
		key: "name",
		label: "NAME",
	},
	{
		key: "yearLevelId",
		label: "Year Level",
	},
];
// courseJSON
// const columns = Object.keys(courseJSON[0]) as (keyof typeof courseJSON[0])[];

export default function UndertakingStage2() {
	return (
		<div className="flex flex-col gap-3">
			<Table
				aria-label="Selection behavior table example with dynamic content"
				selectionMode="multiple"
				removeWrapper
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>
				<TableBody items={courseJSON}>
					{(item) => (
						<TableRow key={item.code}>
							{(columnKey) => (
								<TableCell>{getKeyValue(item, columnKey)}</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
