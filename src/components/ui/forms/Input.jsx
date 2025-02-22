const Input = ({ Icon, type, name, required, placeholder, value, onchange, disable, onblue }) => {
    return (
        <div className={`input h-[50px] ${disable?"bg-gray-300 border-none":""} hover:border-4 hover:border-cyan-950 flex items-center justify-between rounded-lg px-2 bg-white border-2 border-cyan-600 border my-2 `}>
            <Icon className="text-cyan-700  text-2xl" />
            <input onBlur={onblue} onChange={onchange} disabled={disable} value={value} type={type}  name={name} required={required} className="input-input h-full py-2 border-none bg-none rounded-md outline-none w-full px-2" placeholder={placeholder} />
        </div>
    )
}

export default Input
