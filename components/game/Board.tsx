import getColor from "@/util/getColor"

interface Props {
    color: string;
}

const piecesArray: Array<string> = [
    'R','N','B','Q','K','B','N','R',
    'p','p','p','p','p','p','p','p',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    'p','p','p','p','p','p','p','p',
    'R','N','B','Q','K','B','N','R'
]

export default function Board({ color }: Props){
    return (
        <div className="flex flex-wrap w-64 h-64">
            {piecesArray.map((piece, i) => {
                return (
                    <div className={`bg-${getColor(i)} w-[12.5%] h-[12.5%]`}>

                    </div>
                )  
            })}
        </div>
    )
}