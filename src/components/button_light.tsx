


export default function LightButtonLink({link, text} : {link: string; text: string}) {
    return (
        <a
            href={link}
            className="btn-get-started animate__animated animate__fadeInUp scrollto"
        >
            {text}
        </a>
    )
}