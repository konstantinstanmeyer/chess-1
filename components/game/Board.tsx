import getColor from "@/util/getColor"
import getSize from "@/util/getSize"

interface Props {
    color: string;
}

const piecesArray: Array<string> = [
    'rook','knight','bishop','queen','king','bishop','knight','rook',
    'pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',
    'pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn',
    'rook','knight','bishop','queen','king','bishop','knight','rook'
]

export default function Board({ color }: Props){
    return (
        <div className="flex flex-wrap w-80 h-80">
            {piecesArray.map((piece, i) => {
                return (
                    <div key={i} className={`bg-${getColor(i) as string} w-[12.5%] h-[12.5%] relative flex justify-center items-center`}>
                        {piece !== " " ? <img className={`${getSize(piece)}`} src={`${piece}.png`}/> : null}
                    </div>
                    // <div className={`bg-${getColor(i)} w-[12.5%] h-[12.5%] relative flex justify-center items-center`}>
                    //     {piece !== " " ? <img className={`${piece === "pawn" ? "w-[70%] h-[70%]" : "w-[90%] h-[90%]"}`} src={`${piece}.png`}/> : null}
                    // </div>
                )
            })}
        </div>
    )
}