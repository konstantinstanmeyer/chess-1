export default function getSize(piece:string){
    switch(piece){
        case "pawn":
            return "h-[70%] w-[70%]";
        case "rook":
        case "knight":
        case "bishop":
            return "h-[80%] w-[80%]";
        case "king": 
        case "queen":
            return "h-[90%] w-[90%]";
        default: 
            return null;
    }
}