import { postApiServices } from "../rtkquery/postApiServices";

export const authApi = postApiServices.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (userData) => ({
        url: `/login`,
        method: "POST",
        body: userData,
      }),
    }),
    // googleLogin: builder.mutation({
    //     query: (userData) => ({
    //         url: `/google-login`,
    //         method: "POST",
    //         body: userData
    //     }),
    // }),
    // signUp: builder.mutation({
    //     query: (userData) => ({
    //         url: `/register`,
    //         method: "POST",
    //         body: userData
    //     }),
    // }),
    // forgotPassword: builder.mutation({
    //     query: (userData) => ({
    //         url: `/forgot-password`,
    //         method: "POST",
    //         body: userData
    //     }),
    // }),
    // resetPassword: builder.mutation({
    //     query: (userData) => ({
    //         url: `/new-password`,
    //         method: "POST",
    //         body: userData
    //     }),
    // }),
    // verifyOtp: builder.mutation({
    //     query: (userData) => ({
    //         url: `/verify`,
    //         method: "POST",
    //         body: userData
    //     }),
    // }),
  }),
});

export const {
  useSignInMutation,
  //   useSignUpMutation,
  //   useForgotPasswordMutation,
  //   useResetPasswordMutation,
  //   useVerifyOtpMutation,
  //   useGoogleLoginMutation,
} = authApi;
