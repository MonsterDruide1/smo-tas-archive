import { useEffect, useState } from "react";

export interface Props {
    url: string,
    className?: string
}

export default function TwitterEmbed(props: Props) {
    let defaultData = {html: "<p style='color:white;width:100%;height:100%;text-align:center;'>Loading Twitter embed...</p>"};
    let [ data, setData ] = useState(defaultData);
    useEffect(() => {
        if(data == defaultData) {
            fetch(`https://thingproxy.freeboard.io/fetch/https://publish.twitter.com/oembed?dnt=true&theme=dark&url=${props.url}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
        }
    })
    return <iframe srcDoc={`${data.html}`} className={props.className}></iframe>
}
