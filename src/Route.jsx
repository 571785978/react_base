import {Routes,Route} from 'react-router-dom'

import Example from '@/views/example/example';
import DefaultDoc from '@/views/welcome/index'

const DefaultRoutes = () =>{
    return (
        <Routes>
            <Route path="/example" element={<Example />} />
            <Route path="/" element={<DefaultDoc />} />
        </Routes>
    )
}

export default DefaultRoutes;