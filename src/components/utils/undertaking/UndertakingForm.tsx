// "use client";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { Inputs, Props } from "./form";

// // ... (imports and other code)
// // ... (imports and other code)
// export const UndertakingForm: React.FC<Props> = ({ props: { data } }) => {
// 	const {
// 		// register,
// 		handleSubmit,
// 		// eslint-disable-next-line no-unused-vars
// 		watch,
// 		// eslint-disable-next-line no-unused-vars
// 		formState: { errors },
// 	} = useForm<Inputs>();

// 	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

// 	return (
// 		<form
// 			onSubmit={handleSubmit(onSubmit)}
// 			className="flex justify-center items-center"
// 		>
// 			<div className="sm:p-6 rounded-lg sm:shadow-md sm:shadow-accents">
// 				<div className="w-full p-4 flex gap-1 flex-col items-center justify-center">
// 					<div className="w-32 h-12 relative">...</div>
// 					{/* <h2 className="m-auto">Course Select</h2> */}
// 					{/* <input
//                 type="search"
//                 placeholder="Search for course name"
//                 className="px-1 py-2 sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
//             /> */}
// 					<div className="flex flex-col gap-1 max-h-96 overflow-y-scroll overflow-x-clip border-accents border-b-2">
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
// 							error libero nostrum quos sit modi rerum facere dignissimos
// 							placeat minima doloremque nesciunt, doloribus, sed ipsa. Eaque
// 							voluptatum quo est! Ipsum.
// 						</p>
// 						{/* {data.map((course) => (
//                 <p className="truncate" key={course.id}>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Reprehenderit eligendi totam rerum veniam repellendus eos
//                     perferendis velit ipsa recusandae amet praesentium debitis
//                     placeat cupiditate, sed quod aperiam, doloremque voluptatem
//                     incidunt?
//                     <Checkbox defaultChecked size="md" className="truncate">
//                         <p className="block gap-2 w-full truncate">
//                             <span>{course.code}</span>
//                             <span
//                                 style={{
//                                     overflow: "hidden",
//                                     textOverflow: "ellipsis",
//                                     whiteSpace: "nowrap",
//                                 }}
//                             >
//                                 {course.name}
//                             </span>
//                             <span className="text-right">{course.term.term}</span>
//                         </p>
//                     </Checkbox>
//                 </p>
//             ))} */}
// 					</div>
// 				</div>
// 			</div>
// 		</form>
// 	);
// };
