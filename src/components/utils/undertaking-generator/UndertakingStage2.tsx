import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Pagination,
	Selection,
	SortDescriptor,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { courseJSON } from "public/data/json/export";
import { useCallback, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const INITIAL_VISIBLE_COLUMNS = ["code", "name"];

const columns = [
	{
		key: "code",
		label: "Course Code",
	},
	{
		key: "name",
		label: "Course Name",
	},
	{
		key: "yearLevelId",
		label: "Year Level",
	},
	{
		key: "termId",
		label: "Term",
	},
	{
		key: "departmentId",
		label: "Department",
	},
];
type Course = (typeof courseJSON)[0];
export default function UndertakingStage2() {
	const [filterValue, setFilterValue] = useState("");
	const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
	const [visibleColumns, setVisibleColumns] = useState<Selection>(
		new Set(INITIAL_VISIBLE_COLUMNS),
	);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
		column: "yearLevelId",
		direction: "ascending",
	});
	const [page, setPage] = useState(1);

	const pages = Math.ceil(courseJSON.length / rowsPerPage);

	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = useMemo(() => {
		if (visibleColumns === "all") return columns;

		return columns.filter((column) =>
			Array.from(visibleColumns).includes(column.key),
		);
	}, [visibleColumns]);

	const filteredItems = useMemo(() => {
		let filteredUsers = [...courseJSON];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter((user) =>
				user.name.toLowerCase().includes(filterValue.toLowerCase()),
			);
		}

		return filteredUsers;
	}, [courseJSON, filterValue]);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = useMemo(() => {
		return [...items].sort((a: Course, b: Course) => {
			const first = a[sortDescriptor.column as keyof Course] as number;
			const second = b[sortDescriptor.column as keyof Course] as number;
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === "descending" ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const onRowsPerPageChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			setRowsPerPage(Number(e.currentTarget.value));
			setPage(1);
		},
		[],
	);

	const onSearchChange = useCallback((value?: string) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue("");
		}
	}, []);

	const topContent = useMemo(() => {
		return (
			<div className="flex flex-col gap-4">
				<div className="flex justify-between gap-3 items-center">
					<Input
						isClearable
						classNames={{
							base: "w-full",
							inputWrapper: "border-1",
						}}
						placeholder="Search by course name..."
						size="sm"
						startContent={<FaSearch className="text-default-300" />}
						value={filterValue}
						variant="bordered"
						onClear={() => setFilterValue("")}
						onValueChange={onSearchChange}
					/>
					<Dropdown className="w-full">
						<DropdownTrigger className="flex w-2/4">
							<Button size="md" radius="sm" variant="flat">
								Columns
								<FaChevronDown className="text-base text-default-300" />
							</Button>
						</DropdownTrigger>
						<DropdownMenu
							disallowEmptySelection
							aria-label="Table Columns"
							closeOnSelect={false}
							selectedKeys={visibleColumns}
							selectionMode="multiple"
							onSelectionChange={setVisibleColumns}
						>
							{columns.map((column) => (
								<DropdownItem key={column.key} className="capitalize">
									{column.label}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-default-400 text-small">
						Total {courseJSON.length} courses
					</span>
					<label className="flex items-center text-default-400 text-small">
						Rows per page:
						<select
							className="bg-transparent outline-none text-default-400 text-small"
							onChange={onRowsPerPageChange}
						>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
						</select>
					</label>
				</div>
			</div>
		);
	}, [
		filterValue,
		visibleColumns,
		onSearchChange,
		onRowsPerPageChange,
		courseJSON.length,
		hasSearchFilter,
	]);

	const bottomContent = useMemo(() => {
		return (
			<div className="py-2 px-2 flex justify-between items-center">
				<Pagination
					showControls
					classNames={{
						cursor: " bg-assets text-background",
					}}
					color="default"
					isDisabled={hasSearchFilter}
					page={page}
					total={pages}
					variant="light"
					onChange={setPage}
				/>
				<span className="text-small text-default-400">
					{selectedKeys === "all"
						? "All items selected"
						: `${selectedKeys.size} of ${items.length} selected`}
				</span>
			</div>
		);
	}, [selectedKeys, items.length, page, pages, hasSearchFilter]);

	const classNames = useMemo(
		() => ({
			wrapper: ["max-w-full", "overflow-x-auto"],
			th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
			td: [
				// changing the rows border radius
				// first
				"group-data-[first=true]:first:before:rounded-none",
				"group-data-[first=true]:last:before:rounded-none",
				// middle
				"group-data-[middle=true]:before:rounded-none",
				// last
				"group-data-[last=true]:first:before:rounded-none",
				"group-data-[last=true]:last:before:rounded-none",
			],
		}),
		[],
	);

	return (
		<Table
			isCompact
			removeWrapper
			aria-label="Example table with custom cells, pagination and sorting"
			bottomContent={bottomContent}
			bottomContentPlacement="outside"
			checkboxesProps={{
				classNames: {
					wrapper: "after:bg-assets after:text-background text-background",
				},
			}}
			classNames={classNames}
			selectedKeys={selectedKeys}
			selectionMode="multiple"
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement="outside"
			onSelectionChange={setSelectedKeys}
			onSortChange={setSortDescriptor}
		>
			<TableHeader columns={headerColumns}>
				{(column) => (
					<TableColumn key={column.key} allowsSorting={true}>
						{column.label}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={"No courses found"} items={sortedItems}>
				{(item) => (
					<TableRow key={item.code}>
						{(columnKey) => (
							<TableCell>{item[columnKey as keyof Course]}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
