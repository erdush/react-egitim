import { useEffect } from "react";

const Post = () =>{

    useEffect(() => {
        console.log("Post comp render edildi");
    },[]);

    return (<></>);
}
export default Post;