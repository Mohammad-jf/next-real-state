import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth/next";
import { CredentialsProviders } from 'next-auth/providers'


const authOptions = {
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProviders({
            async authorize(credentials,) {
                const { email, password } = credentials;
                try {
                    await connectDB();
                } catch (error) {
                    console.log(error);
                    throw new Error("مشکلی در سرور رخ داده است")
                }

                if (!email || !password) {
                    throw new Error("اطلاعات کاربری نادرست ست");
                }

                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("حساب کاربری وجود ندارد")
                }

                const validPassword = await verifyPassword(password, user.password);

                if (!validPassword) {
                    throw new Error("ایمیل یا رمز عبور اشتباه است")
                }

                return { email }
            }
        })
    ]
}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }