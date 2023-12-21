function isFile(obj: File | FileList): obj is File {
	return (obj as File).name !== undefined;
}

export default isFile;
