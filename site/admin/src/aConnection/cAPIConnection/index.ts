import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiConnection = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_ENVIRONMENT === "Production" ? "https://inventech-backend.onrender.com/api/v1/" : "http://localhost:8080/api/v1/",
    credentials: "include"
  }),
  tagTypes: [
    "baseManyToOneList", "baseManyToManyList", "baseList", "baseOneToOneList", "baseOneToManyList", 
    "MenuList", "RoleList", "UserList",
    "ProductList", "CategoryList", "TagList", 
  ],
  endpoints: () => ({})
})

export default apiConnection;
