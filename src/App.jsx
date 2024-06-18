import DefaultRoutes from './Route';
import Header from "@/components/layout/Header";


function App() {

    return (
        <div className="sapce-y-4 w-full h-full flex flex-col">
            <Header/>
            <section className='w-full flex-grow'>
                <DefaultRoutes/>
            </section>
        </div>
    )
}

export default App
