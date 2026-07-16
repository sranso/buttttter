import moundOfButter from './assets/mound-of-butter.jpg'

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-yellow-50">
      <h1 className="text-4xl text-yellow-900">butter</h1>
      <img
        src={moundOfButter}
        alt="Mound of Butter by Antoine Vollon"
        className="max-h-[60vh] w-auto rounded-lg shadow-lg"
      />
    </main>
  )
}
