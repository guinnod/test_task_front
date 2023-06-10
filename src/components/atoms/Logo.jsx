import icon from '@assets/icon.svg'
export const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-2 justify-center">
            <img src={icon} alt="icon" className="w-8" />
            <span className="text-xl font-medium">
                Twit
                <span className="text-blue-600">Gram</span>
            </span>
        </div>
    )
};