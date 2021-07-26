import React, { useState } from 'react';
import "./styles.css"


const bookDB = {
    javascript: [
        { name: "Eloquent JavaScript", rating: "4/5" },
        { name: "You Don't Know JS", rating: "3.5/5" }
    ],

    fiction: [
        {
            name: "Shiva Trilogy",
            rating: "5/5"
        },
        {
            name: "Harry Potter and the Sorcerer's Stone",
            rating: "4.5/5"
        }
    ],
    business: [
        {
            name: "Never Split the Difference",
            rating: "3.5/5"
        },
        {
            name: "Loonshots",
            rating: "5/5"
        }
    ]
};

const genreButtons = [
    "javascript",
    "fiction",
    "business"
]

export default function App() {

    const [genre, setGenre] = useState("javascript")

    function onGenreClick(genre) {
        console.log(genre)
        setGenre(genre)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ padding: "1rem", margin: "1rem" }} >📚 goodbooks</h1>
            <p style={{ padding: "1rem", margin: "1rem" }} >
                Checkout my favorite books. Select a genre to get started
            </p>
            <div style={{ padding: "1rem", margin: "1rem" }} >
                {
                    genreButtons.map(genre => {
                        return (
                            <button key={genre} style={{
                                padding: "0.5rem 1rem", cursor: "pointer",
                                borderRadius: "0.5rem", border: "1px solid black",
                                margin: "0.5rem 1rem"
                            }} onClick={() => onGenreClick(genre)}>{genre}</button>
                        )
                    })
                }
            </div>

            <hr />

            <div>
                <ul >
                    {bookDB[genre].map((book) => (
                        <li
                            key={book.name}
                            style={{
                                listStyle: "none",
                                padding: "1rem",
                                border: "1px solid black",
                                width: "20rem",
                                margin: "1rem 0rem",
                                borderRadius: "0.5rem"
                            }}
                        >
                            {" "}
                            <div style={{ fontSize: "larger" }}> {book.name} </div>
                            <div style={{ fontSize: "smaller" }}> {book.rating} </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
