import DefaultRoutes from './Route';
import Header from "@/components/layout/Header";


function App() {

    return (
        <div className="sapce-y-4 grid grid-rows-24 gap-2 w-full h-full">
            <Header className="row-span-2" />
            <DefaultRoutes className="row-span-22" />
        </div>
    )
}

export default App
