import React from "react";
import Image from "next/image";

interface MySkillProps {
    iconUrl: string;
    alterText: string;
    text: string;
}

const MySkill: React.FC<MySkillProps> = ({
    iconUrl,
    alterText,
    text,
}) => {
    return(
        <div className='p-5'>
            <Image src={iconUrl} width={100} height={100} alt={alterText} className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
            <p className='text-white text-center mt-4'>{text}</p>
        </div>
    )
}

export default MySkill;