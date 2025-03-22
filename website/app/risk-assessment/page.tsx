"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AlertCircle, CheckCircle, Info, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function RiskAssessmentPage() {
  const searchParams = useSearchParams()
  const [address, setAddress] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const addressParam = searchParams.get("address")
    const zipCodeParam = searchParams.get("zipCode")
    if (addressParam) setAddress(addressParam)
    if (zipCodeParam) setZipCode(zipCodeParam)
    // If both parameters are present, automatically submit the form
    if (addressParam && zipCodeParam) {
      handleSubmit(new Event("submit") as any)
    }
  }, [searchParams])

  // Mock data for demonstration
  const mockResult = {
    riskScore: 89,
    leadServiceLine: "Suspected Lead",
    leadLevel: "Estimated 12-18 ppb",
    recommendations: [
      "Use cold water for drinking and cooking",
      "Let water run for 3-5 minutes before using",
      "Consider installing an NSF-certified water filter",
      "Schedule a professional water test",
    ],
    propertyInfo: {
      yearBuilt: 1952,
      neighborhood: "Logan Square",
      ward: 32,
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const getRiskLevel = (score) => {
    if (score < 30) return { level: "Low", color: "text-green-600" }
    if (score < 70) return { level: "Moderate", color: "text-yellow-600" }
    return { level: "High", color: "text-red-600" }
  }

  const risk = getRiskLevel(mockResult.riskScore)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lead Risk Assessment</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check your address to assess your risk of lead service lines and contamination
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Address Lookup</CardTitle>
              <CardDescription>Enter your Chicago address to check your risk</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main St"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="60601"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                  {loading ? (
                    <>Analyzing...</>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" /> Check Address
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="text-sm text-gray-500">
                We only use publicly available data and do not store your address information.
              </p>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>How we assess risk</AlertTitle>
              <AlertDescription>
                Our risk assessment uses machine learning models trained on Chicago property data, service line
                information, and water testing results. We analyze factors like property age, location, and historical
                data to estimate your risk.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Understanding Your Results</CardTitle>
                <CardDescription>Our assessment provides several key pieces of information:</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Risk Score</h4>
                    <p className="text-sm text-gray-500">
                      A score from 0-100 indicating your overall risk level based on multiple factors
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Service Line Status</h4>
                    <p className="text-sm text-gray-500">
                      The predicted material of your service line based on our model
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Lead Level Estimate</h4>
                    <p className="text-sm text-gray-500">
                      An estimated range of lead concentration in your water based on similar properties
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {submitted && (
          <Card className="mt-8 border-t-4 border-t-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Results for {address}, {zipCode} (From Lalith's NN model)
                <span className={`text-lg ${risk.color}`}>{risk.level} Risk</span>
              </CardTitle>
              <CardDescription>Based on our predictive models and available data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Risk Score: {mockResult.riskScore}/100</span>
                  <span className={`text-sm ${risk.color}`}>{risk.level}</span>
                </div>
                <Progress value={mockResult.riskScore} className="h-2" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Service Line Status</h4>
                  <p className="text-sm">{mockResult.leadServiceLine}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Estimated Lead Level</h4>
                  <p className="text-sm">{mockResult.leadLevel}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Property Information</h4>
                  <div className="text-sm">
                    <p>Year Built: {mockResult.propertyInfo.yearBuilt}</p>
                    <p>Neighborhood: {mockResult.propertyInfo.neighborhood}</p>
                    <p>Ward: {mockResult.propertyInfo.ward}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Recommendations</h4>
                  <ul className="text-sm space-y-1">
                    {mockResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle>What does this mean?</AlertTitle>
                <AlertDescription>
                  Your property has a {risk.level.toLowerCase()} risk of having lead service lines and lead
                  contamination in your water. We recommend taking the precautions listed above and considering a
                  professional water test to confirm these results.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <p className="text-sm text-gray-500">
                This assessment is based on predictive modeling and available data. For definitive results, we recommend
                professional testing.
              </p>
              <div className="flex gap-3">
                <Link href="/resources">
                  <Button variant="outline">View Resources</Button>
                </Link>
                <Link href="/data">
                  <Button variant="outline">Learn About Our Data</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

