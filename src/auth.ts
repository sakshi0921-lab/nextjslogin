import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};

        // Example: Replace this with your actual user authentication logic
        const userEmail = 'admin@example.com';
        const userPassword = 'passcode123';

        if (email === userEmail && password === userPassword) {
          // Valid credentials
          return { id: '1', name: 'Admin', email: userEmail };
        } else {
          // Invalid credentials
          throw new Error('Email or password is incorrect');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login', // Custom sign-in page if needed
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
};

export default NextAuth(authOptions);
