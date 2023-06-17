
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duraction-500"
                href="#"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png" />
            </a>
            <a
                className="hover:opacity-50 transition duraction-500"
                href="#"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="facebook" src="../assets/facebook.png" />
            </a>
            <a
                className="hover:opacity-50 transition duraction-500"
                href="#"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram" src="../assets/instagram.png" />
            </a>
            <a
                className="hover:opacity-50 transition duraction-500"
                href="#"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="twitter" src="../assets/twitter.png" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;