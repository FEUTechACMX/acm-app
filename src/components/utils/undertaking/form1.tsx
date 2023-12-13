// const UndertakingForm1 = () => {
// 	return (
// 		<>
// 			<h1>Undertaking Generator</h1>
// 			<hr className="w-full" />
// 			<div>
// 				<label htmlFor="fullName">Full Name:</label>
// 				<input
// 					type="text"
// 					name="fullName"
// 					{...(register("fullName"),
// 					{
// 						required: true,
// 						minLength: 5,
// 						maxLength: 50,
// 						placeholder: "Ricardo D. Dalisay",
// 					})}
// 					className="px-1 py-2 valid:bg-accents sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
// 				/>
// 			</div>
// 			<div>
// 				<label htmlFor="Year/Program">Year/Program:</label>
// 				<div className="flex w-full gap-2">
// 					<select
// 						{...(register("year"), { required: true })}
// 						className=" p-1 border-2 border-accents rounded-md flex-1"
// 					>
// 						<option value="1st">1st</option>
// 						<option value="2nd">2nd</option>
// 						<option value="3rd">3rd</option>
// 						<option value="4th">4th</option>
// 					</select>
// 					<select
// 						{...(register("program"), { required: true })}
// 						className=" p-1 border-2 border-accents rounded-md flex-1"
// 					>
// 						<option value="BSCSSE">BSCSSE</option>
// 						<option value="BSCSDS">BSCSDS</option>
// 					</select>
// 				</div>
// 			</div>
// 			<div>
// 				<label htmlFor="signatureImg">Signature Image:</label>
// 				<input
// 					type="file"
// 					name="signatureImg"
// 					accept="image, .png, .jpg, .jpeg"
// 					{...(register("signatureImg"), { required: true })}
// 					className="block border-2 border-accents w-full rounded-md"
// 				/>
// 			</div>

// 			<div>
// 				<label htmlFor="idImg">ID Image:</label>
// 				<input
// 					type="file"
// 					name="idImg"
// 					accept="image, .png, .jpg, .jpeg"
// 					{...(register("idImg"), { required: true })}
// 					className="block  border-2 border-accents w-full rounded-md"
// 				/>
// 			</div>
// 		</>
// 	);
// };

// export default UndertakingForm1;
