import MenuItem from './components/MenuItem'

export default function AppBar() {
  return (
    <header className="w-full flex items-center justify-center bg-tmdbDarkBlue h-16">
      <div className="w-full flex max-w-maxPrimaryPageWidth p-30-40">
        <MenuItem />
      </div>
    </header>
  )
}
