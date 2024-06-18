import { Link } from "react-router-dom";

const DefaultDoc = () => {
    return (
        <div className="p-4">
            <h1 className="py-2 text-xl font-bold">
                Welcome here .
            </h1>
            <Link to="/example">visit the <p className="cursor-point text-blue-300 underline inline-block">Example</p></Link>
                
        </div>
    )
}

export default DefaultDoc;