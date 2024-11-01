import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";

const MessageForm = () => {
    return (
        <section>
        <Element
            name="Messageform"
            className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
        >
            <div className="container">
            <div className="flex flex-col items-center">
                <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
                    <p className="h4 mb-10 max-w-md text-center">
                        Reach Us to Join Us 
                    </p>

                </div>
            </div>

            <ul className="mt-24 flex justify-center max-lg:hidden">
                {logos.map(({ id, url, width, height, title }) => (
                <li key={id} className="mx-10">
                    <img src={url} width={width} height={height} alt={title} />
                </li>
                ))}
            </ul>
            </div>
        </Element>
        </section>
    );
}

export default MessageForm