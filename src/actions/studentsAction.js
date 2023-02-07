import axios from "axios";
const url = "http://localhost:3001/Users"

export default function StudentAction(){

    return({
        type: 'StudentAction',
        payload: axios.get(url).then((result) =>result.data)
         
    })
}