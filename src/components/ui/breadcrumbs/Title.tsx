interface Props {
    title?: string;
    subtitle?: string;
    className?: string;
}

export const Title=({ title, subtitle, className }: Props)=>{

    return (
        <div className={`${className} flex bg-slate-100`  }>
            <h1 className="text-5xl sm:text-6xl font-family-[Amiri] font-[400]">{title}</h1>
            <h1 className="text-5xl sm:text-6xl font-family-[Amiri] font-[700]">{subtitle}</h1>
        </div>
    )
}