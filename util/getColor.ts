export default function getColor(index: number): string{
    const row = Math.floor((63 - index) / 8) + 1;
    if(row % 2 === 0){
        return index % 2 === 0 ? 'white' : 'amber-900';
    } else {
        return index % 2 === 0 ? 'amber-900' : 'white';
    }
}