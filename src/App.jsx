import { BookOpen } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <BookOpen className="mx-auto h-12 w-12 text-blue-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">olibano-ebook1</h1>
        <p className="mt-2 text-gray-600">Bem-vindo ao seu ebook!</p>
      </div>
    </div>
  )
}

export default App