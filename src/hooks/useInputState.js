import { useState } from "react";

export default function useInputState(initVal = "") {
    const [value, setValue] = useState(initVal)
    const changeVal = (e) => setValue(e.target.value)
    return [value, changeVal]
}