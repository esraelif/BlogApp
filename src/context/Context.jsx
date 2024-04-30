import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
const BlogContext = createContext()

const Context = ({ children }) => {
    return (
        <BlogContext.Provider>
            {children}
        </BlogContext.Provider>
    );
}

export default Context;
export const Blog = () => useContext(BlogContext)
