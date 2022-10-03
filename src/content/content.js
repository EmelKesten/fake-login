import { Routes, Route, Navigate } from 'react-router-dom';

function Content() {
    const login = JSON.parse(localStorage.getItem("login"));
    if(!login) {
        return <Routes><Route path='*' element={ <Navigate to="/login" /> }/></Routes>
    }
    return (
        <div>
            <h1>Content</h1>
        </div>
    )
}

export default Content