"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AlertTriangle, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [address, setAddress] = useState("")
  const [zipCode, setZipCode] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Navigate to risk assessment page with query parameters
    router.push(`/risk-assessment?address=${encodeURIComponent(address)}&zipCode=${encodeURIComponent(zipCode)}`)
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Chicago Lead Service Line Risk Assessment
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Chicago has approximately 400,000 lead service lines still in use today, the highest of any U.S. city.
                Our project helps residents understand their risk and take action.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/risk-assessment">
                  <Button className="bg-blue-600 hover:bg-blue-700">Check Your Risk</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -left-4 -top-4 h-72 w-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -right-4 -bottom-4 h-72 w-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 h-72 w-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                {/* <div className="relative shadow-xl rounded-lg overflow-hidden border border-gray-200 bg-white">
                  <img
                    src="image.svg?height=400&width=400"
                    alt="Water pipe illustration"
                    className="w-full h-auto"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Understanding the Problem</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lead is a well-documented neurotoxin, and no level of exposure is safe. Our project addresses two key
                problems:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Predicting Lead Contamination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Using statistical and machine learning models, we analyze available water testing and property data to
                  estimate the percentage of Chicago households exceeding the EPA's proposed revised limit of 10 ppb for
                  lead in drinking water.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  Identifying Lead Service Lines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Many entries in Chicago's service line inventory are classified as "suspected lead." Our project
                  develops predictive models that classify these service lines more accurately based on property
                  characteristics, location, and water testing data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Approach</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We use advanced data science techniques to provide accurate risk assessments and empower Chicago
                residents.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We combine property data, service line information, and water testing results to create comprehensive
                  datasets for analysis.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Predictive Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Using spatial regression, machine learning, and statistical analysis to predict lead service line
                  locations and contamination risks.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Public Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Providing accessible information, risk mitigation strategies, and policy recommendations to help
                  residents protect themselves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check Your Risk</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Use our tool to assess the likelihood of lead service lines at your address and get personalized
                recommendations.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/risk-assessment">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                  <CardTitle>Address Lookup</CardTitle>
                  <CardDescription>Enter your Chicago address to check your risk</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="address"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Street Address
                      </label>
                      <input
                        id="address"
                        placeholder="123 Main St"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="zip"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        ZIP Code
                      </label>
                      <input
                        id="zip"
                        placeholder="60601"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Search className="mr-2 h-4 w-4" /> Check Address
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

