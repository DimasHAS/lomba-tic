"use client"

import { useState } from "react"
import { Eye, EyeOff, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TaniMajuLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-50 to-emerald-100 p-12 flex-col justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(34,197,94,0.1)_0%,_transparent_50%)] transform rotate-12"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.1)_0%,_transparent_50%)] transform -rotate-12"></div>
        </div>
        
        <div className="relative z-10 max-w-lg">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-text-primary">TaniMaju</span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl font-bold text-text-primary mb-6 leading-tight">
            Teknologi AI untuk Petani Indonesia yang Lebih Maju
          </h1>
          
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Platform AI TaniMaju membantu petani meningkatkan produktivitas dengan diagnosis tanaman, prediksi panen, optimasi pupuk, dan wawasan berbasis data satelit. Bergabunglah dengan revolusi pertanian digital.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Mulai Gratis Sekarang
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-card">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center mb-8 lg:hidden">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-text-primary">TaniMaju</span>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Masuk ke TaniMaju
            </h2>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-text-primary font-medium">
                  Email atau Username
                </Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Email atau Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-text-primary font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Masuk
              </Button>
              
              <div className="text-right">
                <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Lupa Password?
                </a>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card px-4 text-text-secondary">atau</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-text-secondary">
                  Belum punya akun?{" "}
                  <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                    Daftar gratis
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}