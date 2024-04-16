// Button.jsx
function Button({ onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={`fixed bottom-5 right-5 p-2 rounded-full bg-gray-700 text-white hover:bg-black transition-colors duration-200`}
        >
            {children}
        </button>
    );
}

export default Button;
