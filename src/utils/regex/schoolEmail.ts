import regexIdNumber from "./schoolId";
// extend the regexIdNumber to include the school email. Attach @fit.edu.ph at the end. $ must be used.
const regexSchoolEmail = new RegExp(regexIdNumber.source + "@fit.edu.ph$");

export default regexSchoolEmail;
