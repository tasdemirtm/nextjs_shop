function Input(props) {

    const { type, errorMessage, touched, placeholder, ...inputProps } = props;


    return (
        <>
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    {placeholder}
                </label>

                <input
                    type={type}
                    className="shadow appearance-none border rounded w-full py-2 px-3 h-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    placeholder={placeholder}
                    {...inputProps}
                />
                <span className="text-xs text-red-800">{errorMessage}</span>

        </>
    );
}

export default Input;
