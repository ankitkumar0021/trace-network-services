// import { postApiServices } from "../rtkquery/postApiServices";


// export const postApi = postApiServices.injectEndpoints({
//     endpoints: builder => ({
//         uploadPrescription: builder.mutation({
//             query: (value) => ({
//                 url: `/upload-prescription`,
//                 method: "POST",
//                 body: value
//             }),
//         }),
//         aiSuggestion: builder.mutation({
//             query: (value) => ({
//                 url: `/lens-suggestion`,
//                 method: "POST",
//                 body: value
//             }),
//         }),
//     })
// })


// export const { useUploadPrescriptionMutation, useAiSuggestionMutation } = postApi;