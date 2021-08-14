import React, { useState } from 'react';
import "./styles.css"


const bookDB = {
    javascript: [
        {
            name: "Eloquent JavaScript",
            rating: "4/5"
        },
        {
            name: "You Don't Know JS",
            rating: "3.5/5"
        },
        {
            name: "JavaScript: The Good Parts",
            rating: "5/5"
        }
    ],

    fiction: [
        {
            name: "The Witcher",
            rating: "4.75/5"
        },
        {
            name: "Shiva Trilogy",
            rating: "5/5"
        },
        {
            name: "Harry Potter and the Sorcerer's Stone",
            rating: "4.5/5"
        },
    ],
    business: [
        {
            name: "Never Split the Difference",
            rating: "3.5/5"
        },
        {
            name: "Loonshots",
            rating: "5/5"
        },
        {
            name: "How to Win Friends and Influence People",
            rating: "4/5"
        }
    ]
};

const foodDB = {
    "Chinese": [
        {
            name: "Spring rolls",
            des: "This is actually a type of dumpling, popularised from the Cantonese style of cooking and is prepared to welcome the season of spring. In India, they are fried till are golden are filled with Julienne cut pieces of vegetables.",
            rating: "5/5"
        },
        {
            name: "Chillichicken",
            des: "Chilli chicken is probably most common Chinese dish readily available in all parts of the nation. In fact, it is so famous, that most roadside street food stalls even sell Chilli Chicken. It is prepared with a Soy Sauce Marinade forthe chicken. The Chicken marinade is cooked with Garlic, Ginger, and spices and stir-fried with Onions and Green Chillies.",
            rating: "5/5"
        },
        {
            name: "Chowmein",
            des: "Chowmein is a common dish in China as well as India. Over there, it is only boiled and served with Soy Sauce, Scrambled Eggs over the top resting on a layer of green vegetables. But in the Indian variant, it is prepared by stir-frying the boiled Noodles with Soy Sauce, Vinegar, and sometimes even MSG.",
            rating: "4.7/5"
        }
    ],
    "North Indian": [
        {
            name: "Chole Bhature",
            des: "Mouth-watering meal straight from the Punjabi kitchen - garma garam bhature with chickpeas cooked in assorted spices. What's better than that?",
            rating: "5/5"
        },
        {
            name: "Stuffed Bati",
            des: "This Rajasthani bread snack is cooked in ghee and served with chutney and dal. Bati is usually stuffed with paneer and spices.",
            rating: "4.5/5"
        },
        {
            name: "Rogan Josh",
            des: "Originated in Kashmir, we bring you the signature dish of the valley. This one is an all-time favourite among meat lovers.",
            rating: "4.75/5"
        }
    ],
    "South Indian": [
        {
            name: "Chicken Chettinad",
            des: " Full of flavour and bold masalas, this dish will floor your family and guests. A gorgeous melange of onions, tomatoes, cinnamon sticks, cloves, cumin, curry leaves and a rich coconut-y paste.",
            rating: "5/5"
        },
        {
            name: "Andhra Style Chicken Curry",
            des: "A fiery Andhra curry cooked with ginger-garlic paste, curry leaves, cinnamon, chicken masala and a delectable cashew and poppy seed paste.",
            rating: "4.85/5"
        },
        {
            name: "Masala Dosa",
            des: "The king of all dosas! Listed as one of the world's most delicious foods, a masala dosa never fails to impress! Re-create this classic at home",
            rating: "5/5"
        }
    ]
}

const genreButtons = [
    "javascript",
    "fiction",
    "business"
]

const foodButtons = [
    "Chinese",
    "North Indian",
    "South Indian"
]

export default function App() {

    const [cuisine, setcuisine] = useState("Chinese")

    function oncuisineClick(cuisine) {
        console.log(cuisine)
        setcuisine(cuisine)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ padding: "1rem", margin: "1rem" }} >📚 Goodbooks</h1>
            <p style={{ padding: "1rem", margin: "1rem" }} >
                Checkout my favorite dishes. Select a cuisine to get started
            </p>
            <div style={{ padding: "1rem", margin: "1rem" }} >
                {
                    foodButtons.map(cuisine => {
                        return (
                            <button key={cuisine} style={{
                                padding: "0.5rem 1rem", cursor: "pointer",
                                borderRadius: "0.5rem", border: "1px solid black",
                                margin: "0.5rem 1rem"
                            }} onClick={() => oncuisineClick(cuisine)}>{cuisine}</button>
                        )
                    })
                }
            </div>

            <hr />

            <div>
                <ul className="books-list">
                    {foodDB[cuisine].map((book) => (
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
                            <div style={{ fontSize: "larger" }}> {book.name} </div>
                            <div style={{ fontSize: "smaller" }}> {book.rating} </div>
                            <div>{book.des}</div>
                        </li>
                    ))}
                </ul>
            </div>

            <footer>
                <ul className="footer-list">
                    <li class="list-item"><a target="_blank" rel="noreferrer" href="mailto:chakravarthisaran7@gmail.com" class="footer-links">
                        <i class="fa fa-envelope" aria-hidden="true"></i></a>
                    </li>
                    <li class="list-item"><a target="_blank" rel="noreferrer" href="https://github.com/chakravarthi0">
                        <i class="fab fa-github" aria-hidden="true"></i>
                    </a>
                    </li>
                    <li class="list-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saran-chakravarthi-b44438175">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                    <li class="list-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/saranchakravar3">
                        <i class="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li class="list-item"><a target="_blank" rel="noreferrer" href="https://portfolio-saran.netlify.app/">
                        <i class="fas fa-briefcase"></i>
                    </a>
                    </li>

                </ul>
            </footer>

        </div>
    )
}
