import { useMemo } from "react"


export const useUppyState = () => {
    //监听uppy状态
    const [state, setState] = useState(uppy.getState())
}