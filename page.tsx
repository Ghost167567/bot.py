import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ᴅᴏᴍɪɴɪᴏ ʙʟᴀᴄᴋ | 2 ꜱɪᴛᴇꜱ
              </div>
              <div className="text-xs text-purple-300">#1 Gen Site</div>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="#services" className="text-purple-300 hover:text-purple-100 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-purple-300 hover:text-purple-100 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            ᴅᴏᴍɪɴɪᴏ ʙʟᴀᴄᴋ | 2 ꜱɪᴛᴇꜱ
          </h1>
          <p className="text-xl text-purple-200 mb-2">#1 Sites | We're the best beaming site out there!</p>
          <div className="inline-flex items-center gap-1 text-yellow-400 text-sm">
            <span>⭐</span>
            <span>Best Site</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Main Website Card */}
          <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-purple-100 mb-4">Main Website</h3>
              <Link
                href="https://immortal.rs/?code=MzU0NDgzNzE1Njk0MTY5OTgzNl82MjI0ODM2MTkzODM1Mzg1Mzc1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg">
                  ENTER...
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Best Website Card */}
          <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-100 mb-4">Best Website</h3>
              <Link href="https://acortar.link/GMluaj" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg">
                  ENTER...
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Back Up Website Card */}
          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-pink-100 mb-4">Back Up Website</h3>
              <Link href="https://www.logged.tg/auth/domino" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg">
                  ENTER...
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-purple-300 text-sm">ᴅᴏᴍɪɴɪᴏ ʙʟᴀᴄᴋ | 2 ꜱɪᴛᴇꜱ</p>
        </div>
      </footer>
    </div>
  )
}
