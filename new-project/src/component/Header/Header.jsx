

const Header = () => {
    return (
        <div className="flex justify-between m-10">
            <div>
                <h1>Book Vibe</h1>
            </div>
            <div>
                <ul className="flex">
                    <li>Home</li>
                    <li>Listed Books</li>
                    <li>Pages to Read</li>
                </ul>
            </div>

            <div>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;