import icon from '@assets/icon.svg';

export const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src={icon} alt="icon" className="w-8" />
            <span className="text-xl font-medium">
                Twit
                <span className="text-blue-600">Gram</span>
            </span>
        </div>
    )
};

export const LogoInline = () => {
    return (
        <div className="flex items-center gap-2 w-max">
            <img src={icon} alt="icon" className="w-8" />
            <span className="text-xl font-medium">
                Twit
                <span className="text-blue-600">Gram</span>
            </span>
        </div>
    )
};