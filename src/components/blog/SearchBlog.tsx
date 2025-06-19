'use client'
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

export default function SearchBlog() {
    // const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    // const handleSearch = () => {
    //     dispatch(handleBlogSearch({ blogSearchName: searchValue }))
    // };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // handleSearch();
            alert('jnj jb ')
        }
    };
    return (
        <>
            <div className="flex gap-2">
                <input
                    type="search"
                    placeholder="search"
                    name="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="outline-none border p-2 px-4 w-full rounded-full"
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="bg-primary w-fit text-white font-semibold py-2 rounded-full px-10 transition transform hover:scale-105 duration-300 cursor-pointer">
                    Search
                </button>
            </div>
        </>
    );
}
