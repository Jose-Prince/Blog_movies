# Blog_movies

This is a blog created to see which are the best movies of all times. The project was done in React JS using Vite. 

## How it works?

The blog uses the Restfull API: [Blog_API](https://github.com/Jose-Prince/Blog_API). The API is already runnig on a server so it isn't neccessary to configure the API as it says in the Readme section of the API. 

For running the blog in developvers mode, use the following command:
```
npm run dev
```

## Views
The blog has two main views the home and the admin view.

In the home view you can do the following things:
- Watch blogs, while listening to the most characteristic soundtrack of the movie
- See the trailer of the movie by clicking in the seat of the movie

In the admin view you can do the following things:
- Watch blogs, while listening to the most characteristic soundtrack of the movie
- See the trailer of the movie by clicking in the seat of the movie
- Create new movies for the blog
- Delete movies
- Modify movies by double clicking in the seat of the movie
- Add people related to a movie

## Possible future fixes
- Update the React Suspense use, it isn't implemented the right way.
- Migrate the songs to the database, they are burned in the code and in the PlayMusic custom hook.
- Make the lazy loading responsive.
