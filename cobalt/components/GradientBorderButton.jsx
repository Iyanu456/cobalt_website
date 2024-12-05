

export default function GradientBorderButton({className, label, onClick}) {
    return (
        <button onClick={onClick} className={`relative flex justify-center center-align  bg-[#a1a1aa38] overflow-hidden w-[fit-content] h-[fit-content] rounded-[32px] mx-auto p-[2px] ${className}`}>
          <div className="absolute w-[15em] right-auto left-auto h-[5em]  inset-0 radial-gradient blur-3xl opacity-[80%]"></div>

          <span className="relative bg-[#09090B] rounded-[30px] py-2 px-[1.5em] font-semibold text-[1.1em]">
            {label}
          </span>
        </button>
    )
}