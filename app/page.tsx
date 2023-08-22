import { useState } from "react"
import Board from "@/components/Board";

export default function Home() {
  const [color, setColor] = useState<String>("select");

  return (
    <div className="">
      <Board color={color} />
    </div>
  )
}
