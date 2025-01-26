export function Footer() {
  return (
    <footer className="py-6 px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-400">© 2024 Portfolio. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="text-zinc-400 hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="text-zinc-400 hover:text-blue-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

