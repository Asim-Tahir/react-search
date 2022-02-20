import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { User } from "@types";

const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getUsers: builder.query<Array<User>, void>({
      query: () => `list`,
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = userService;
export default userService;
