const Header = () => {
  return (
    <div>
      <div className="flex justify-between ml-20 mr-20 mt-5">
        <div>
          <h1 className="font-extrabold text-3xl">Book Vibe</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="font-medium mr-4 p-2">Home</li>
            <li className="font-medium mr-4 p-2">Listed Books</li>
            <li className="font-medium mr-4 p-2">Pages to Read</li>
          </ul>
        </div>

        <div>
          <button className="bg-emerald-600 mr-10 p-3 rounded-md font-semibold text-gray-50">
            Sign In
          </button>
          <button className="bg-sky-700 p-3 rounded-md font-semibold text-gray-50">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex bg-gray-400 rounded-md ml-20 mr-20 mt-5">
        <div>
            <h1 className="text-6xl">Books to freshen up your bookshelf</h1>
            <button className="bg-green-900 text-white p-3 rounded-md">View The List</button>
        </div>
        <img src="https://i.ibb.co.com/7r7Mjs9/pngwing-1.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
