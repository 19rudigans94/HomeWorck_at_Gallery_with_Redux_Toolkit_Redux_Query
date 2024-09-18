import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getPhotosByAlbum: builder.query({
            query: ({ albumId = 1, limit = 50 }) => `/photos?albumId=${albumId}&_limit=${limit}`,
        }),
    }),
});

export const { useGetPhotosByAlbumQuery } = photosApi;