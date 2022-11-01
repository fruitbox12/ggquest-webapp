import useFetch from "./useFetch"


const useProfile = (address : string) => {
    const [questId] = useFetch("https://gg.quest/api/profiles/"+ address)
    return questId
}

export default useProfile