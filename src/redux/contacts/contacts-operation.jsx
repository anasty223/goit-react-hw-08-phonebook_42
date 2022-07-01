import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["CONTACT"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      keepUnusedDataFor: 5,
      providesTags: ["CONTACT"],
    }),
    addContacts: builder.mutation({
      query: (newContact) => ({
        url: "/contacts",
        method: "POST",
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ["CONTACT"],
    }),
    deleteContacts: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CONTACT"],
    }),
  }),
});
console.log("contactsApi", contactsApi);
export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
