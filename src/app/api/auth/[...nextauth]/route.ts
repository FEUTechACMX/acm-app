// import db_projects, { mongooseId } from "@/db/projects/flat";
// import clientPromise from "@/db/projects/mongo";
// import Mailer, { serverDetails } from "@/utils/mailer";
// import emailSignin from "@/utils/mailer/templates/signin";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import authOptions from "@/utils/authOptions";
import NextAuth from "next-auth/next";

// export default NextAuth(authOptions);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
