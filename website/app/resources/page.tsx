import { ExternalLink, FileText, Info, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Information and resources to help you address lead in your water
          </p>
        </div>

        <Tabs defaultValue="prevention" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prevention">Prevention</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
            <TabsTrigger value="replacement">Replacement</TabsTrigger>
            <TabsTrigger value="assistance">Financial Assistance</TabsTrigger>
          </TabsList>

          <TabsContent value="prevention" className="space-y-4 pt-4">
            <div className="prose max-w-none">
              <h2>Preventing Lead Exposure</h2>
              <p>
                While the ultimate solution is to replace lead service lines, there are several steps you can take to
                reduce your exposure to lead in drinking water:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Use Cold Water</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Always use cold water for drinking, cooking, and preparing baby formula. Hot water dissolves lead
                    more quickly than cold water and contains higher levels of lead.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Flush Your Pipes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If water hasn't been used for several hours, run the cold water for 3-5 minutes before using it for
                    drinking or cooking. This helps flush out any lead that may have accumulated.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clean Aerators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Regularly clean faucet aerators to remove lead particles that may become trapped in the screen.
                    Simply unscrew the aerator, rinse out any debris, and reattach.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Consider using a water filter certified to remove lead. Look for filters that are NSF/ANSI Standard
                    53 certified for lead reduction. Remember to replace filter cartridges according to manufacturer
                    instructions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avoid Certain Containers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Do not use hot water from the tap for cooking or drinking. Do not boil water to remove lead (boiling
                    water increases lead concentration). Avoid storing water in older containers that may contain lead.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regular Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Test your water regularly, especially if you have young children or are pregnant. The only way to
                    know for sure if you have lead in your water is to test it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="testing" className="space-y-4 pt-4">
            <div className="prose max-w-none">
              <h2>Testing Your Water</h2>
              <p>
                Testing your water is the only way to know for certain if you have lead in your drinking water. Here are
                resources for testing:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>City of Chicago Free Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The City of Chicago offers free water quality tests to residents. You can request a test kit that
                    will be delivered to your home with instructions for collecting water samples.
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://311.chicago.gov/s/new-service-request?typecodeid=a1Pt0000000Q7fiEAC&language=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      Request a Test Kit <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Private Laboratory Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    For more comprehensive testing, you can use a private laboratory certified to test for lead in
                    drinking water. These labs can provide detailed analysis of your water quality.
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://www.epa.gov/dwlabcert/contact-information-certification-programs-and-certified-laboratories-drinking-water"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      Find Certified Labs <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>How to Collect Water Samples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>Proper sample collection is crucial for accurate results. Follow these steps:</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Select a faucet that is commonly used for drinking water (usually the kitchen sink).</li>
                      <li>
                        Do not use the faucet for at least 6-8 hours before collecting the sample (overnight is ideal).
                      </li>
                      <li>Do not remove the aerator from the faucet.</li>
                      <li>
                        Use the sample bottles provided in your test kit and follow the specific instructions included.
                      </li>
                      <li>
                        Typically, you'll need to collect:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>
                            First draw sample: The first water that comes out of the tap after the period of non-use
                          </li>
                          <li>Second draw sample: After running the water for 3-5 minutes</li>
                          <li>Third draw sample: After running the water for 5-10 minutes</li>
                        </ul>
                      </li>
                      <li>Fill out all required information on the sample bottles and forms.</li>
                      <li>Return the samples as instructed in your test kit.</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="replacement" className="space-y-4 pt-4">
            <div className="prose max-w-none">
              <h2>Lead Service Line Replacement</h2>
              <p>
                Replacing lead service lines is the most effective long-term solution to prevent lead exposure from
                drinking water. Here's information about replacement options:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Chicago Lead Service Line Replacement Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The City of Chicago has established a Lead Service Line Replacement Program to help residents
                    replace their lead service lines. The program offers several options:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Equity Program: Free replacements for low-income residents</li>
                    <li>
                      Homeowner-Initiated Program: For those who want to replace their service line at their own cost
                    </li>
                    <li>Block-by-Block Program: Coordinated replacements in targeted areas</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://www.leadsafechicago.org/lead-service-line-replacement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Working with a Plumber</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you decide to replace your lead service line independently, you'll need to work with a licensed
                    plumber. Here's what to know:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Get multiple quotes from licensed plumbers experienced in service line replacement</li>
                    <li>Ensure they obtain all necessary permits</li>
                    <li>Ask about different replacement methods and materials</li>
                    <li>Typical cost ranges from $3,000 to $7,000 depending on length and complexity</li>
                    <li>The process typically takes 1-2 days to complete</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Replacement Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>The lead service line replacement process typically involves:</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Verification that your service line is made of lead</li>
                      <li>Obtaining necessary permits from the city</li>
                      <li>Excavation to access the service line</li>
                      <li>Disconnection of the old lead pipe</li>
                      <li>Installation of a new copper or plastic service line</li>
                      <li>Connection to the water main and your home's plumbing</li>
                      <li>Restoration of excavated areas</li>
                      <li>Water quality testing after replacement</li>
                    </ol>
                    <p>
                      After replacement, it's important to flush your plumbing system thoroughly and consider using
                      filters for a few weeks as disturbing lead pipes can temporarily increase lead levels.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="assistance" className="space-y-4 pt-4">
            <div className="prose max-w-none">
              <h2>Financial Assistance Programs</h2>
              <p>
                Several programs are available to help Chicago residents with the cost of lead service line replacement:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Chicago Equity Lead Service Line Replacement Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    This program provides free lead service line replacements for eligible low-income homeowners. To
                    qualify:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>You must own and reside in a single-family home or two-flat</li>
                    <li>Your household income must be below 80% of the area median income</li>
                    <li>Your home must have a confirmed lead service line</li>
                    <li>You must be current on water bills or enrolled in a payment plan</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://www.leadsafechicago.org/equity-lead-service-line-replacement-program"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Illinois EPA Loan Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The Illinois EPA offers low-interest loans through the Public Water Supply Loan Program to help
                    communities fund lead service line replacement projects.
                  </p>
                  <p className="mt-4">
                    While this program is primarily for municipalities, it can benefit residents through community-wide
                    replacement initiatives.
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://epa.illinois.gov/topics/grants-loans/state-revolving-fund.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Federal Tax Deduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    In some cases, the cost of lead service line replacement may qualify as a medical expense deduction
                    on your federal taxes if you can document that the replacement was done for medical purposes (e.g.,
                    to address elevated blood lead levels).
                  </p>
                  <p className="mt-4">
                    Consult with a tax professional to determine if you qualify for this deduction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Assistance Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Some nonprofit organizations and community groups offer assistance programs for lead remediation,
                    including:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Metropolitan Planning Council's water affordability programs</li>
                    <li>Elevate Energy's healthy homes initiatives</li>
                    <li>Local community development organizations</li>
                  </ul>
                  <p className="mt-4">Contact these organizations directly to inquire about available assistance.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Additional Resources</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  Educational Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.epa.gov/ground-water-and-drinking-water/basic-information-about-lead-drinking-water"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      EPA Lead in Drinking Water <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cdc.gov/lead-prevention/prevention/drinking-water.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      CDC Lead in Water Resources <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.chicago.gov/city/en/depts/water/supp_info/water_quality_resultsandreports.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Chicago Water Quality Information <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Reports & Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.metroplanning.org/work/project/23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Metropolitan Planning Council Lead Service Line Report <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nrdc.org/resources/lead-pipes-are-widespread-and-used-every-state"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      NRDC Lead Pipes Report <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.safewaterengineering.com/resources"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Safe Water Engineering Resources <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <span className="font-medium">Chicago Department of Water Management</span>
                    <a href="tel:3127447001" className="text-blue-600 hover:underline">
                    (312) 744-4420
                    </a>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">EPA Safe Drinking Water Hotline</span>
                    <a href="tel:8004264791" className="text-blue-600 hover:underline">
                      800-426-4791
                    </a>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Lead Service Line Replacement Program</span>
                    <a href="tel:3127457038" className="text-blue-600 hover:underline">
                      311
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

