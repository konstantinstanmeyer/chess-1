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
                const row = Math.floor((63 - i) / 8) + 1;
                let color: string;
                if(row % 2 === 0){
                    color = i % 2 === 0 ? 'white' : 'amber-900';
                } else {
                    color = i % 2 === 0 ? 'amber-900' : 'white';
                }
                return (
                    <div className={`bg-${color} w-[12.5%] h-[12.5%]`}>

                    </div>
                )  
            })}
        </div>
    )
}