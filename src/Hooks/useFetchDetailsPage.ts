import axios from "axios";
import { useEffect, useState } from "react"


const useFetchDetailsPage = (endPoint: string) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(endPoint);
            setLoading(false);
            setData(response?.data)
        } catch (error) {
            console.log("Fetch Data Error", error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [endPoint])
    return (
        { data, loading }
    )
}

export default useFetchDetailsPage