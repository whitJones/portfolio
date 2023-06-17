import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-green pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfiar font-semibold text-2xl text-opaque-black">WHIT JONES</p>
                    <p className="font-playfair text-md text-opaque-black">@2023 JONES. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;