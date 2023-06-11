import icon from '@assets/icon.svg';

export const Logo = ({ isInline }) => {
    return (
        <div className={`flex items-center gap-2 ${isInline ? '' : 'flex-col'}`}>
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
        <Logo isInline />
    )
};