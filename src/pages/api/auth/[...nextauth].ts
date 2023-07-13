import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";



export default NextAuth({

providers: [
  GoogleProvider({
    clientId:"599815915021-3u2bounbnc324u12liqpepvat4stpssl.apps.googleusercontent.com",
    clientSecret:"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"
  }),
],

});


