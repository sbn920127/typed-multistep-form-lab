import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import StandardFormPage from "./pages/StandardFormPage.tsx";
import ChatFormPage from "./pages/ChatFormPage.tsx";
import PreviewPage from "./pages/PreviewPage.tsx";

function App() {

    return (
        <BrowserRouter>
            <nav style={{ padding: 16 }}>
                <Link to="/form">手動填寫</Link> |{' '}
                <Link to="/chat-form">AI 協助填寫</Link> |{' '}
                <Link to="/preview">預覽表單</Link>
            </nav>

            <Routes>
                <Route path="/form" element={<StandardFormPage />} />
                <Route path="/chat-form" element={<ChatFormPage />} />
                <Route path="/preview" element={<PreviewPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
