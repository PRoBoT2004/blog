// src/pages/Home.jsx
import React from 'react';

const Home = ({ isDarkMode }) => {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      image: 'https://imgs.search.brave.com/5HO39_dHx9nPxQ5WAuLH5IzJgVRVxkxRXY64detO1No/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDIvcmVhY3Qt/aG9va3MtY2hlYXQt/c2hlYXQtYmVzdC1w/cmFjdGljZXMtZXhh/bXBsZXMtbm9jZG4u/cG5n',
      description: 'A deep dive into the world of React Hooks and how they can simplify your component logic.',
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      image: 'https://imgs.search.brave.com/8Fw13v3k8AOqpT-zVNzEUO9mRlTlvKLu4NUTnRRPMiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDQvY3NzLWZs/ZXhib3gtdnMtY3Nz/LWdyaWQucG5n',
      description: 'Comparing CSS Grid and Flexbox to see which one is the best fit for your layout needs.',
    },
    {
      id: 3,
      title: 'JavaScript ES6 Features',
      image: 'https://imgs.search.brave.com/iT2jw1MPt27VEF2rAFjRv7kJWnizsm87bclX1xlrl-k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ymlnc2NhbC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MTEvVW5sb2NrLUph/dmFTY3JpcHRzLXBv/dGVudGlhbC13aXRo/LUVTNi5wbmc',
      description: 'An overview of the most useful ES6 features that can improve your coding efficiency.',
    },
    {
      id: 4,
      title: 'Building Accessible Websites',
      image: 'https://imgs.search.brave.com/onUeJpwK-GxRZejWYW3nbswNR0oXVcYb0rK0nQCu52Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvR29vZ2xl/JTIwRHJpdmUlMjBJ/bnRlZ3JhdGlvbi93/ZWIlMjBhY2Nlc3Np/YmlsaXR5JTIwYXVk/aXRfNDIwMjMucG5n',
      description: 'Best practices for ensuring your websites are accessible to everyone, including those with disabilities.',
    },
  ];

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl ${
              isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-black'
            }`}
          >
            <img src={blog.image} alt={blog.title} className="object-cover w-full h-48" />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">{blog.title}</h2>
              <p className="mb-0">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
