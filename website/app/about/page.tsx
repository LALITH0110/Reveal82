import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Project</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn more about our mission to address lead service lines in Chicago
          </p>
        </div>

        <Tabs defaultValue="problem" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="problem">The Problem</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="ethics">Ethical Considerations</TabsTrigger>
          </TabsList>
          <TabsContent value="problem" className="space-y-4 pt-4">
            <div className="prose max-w-none">
              <h2>Chicago's Lead Service Line Crisis</h2>
              <p>
                Chicago has the most lead service lines of any city in the United States, with approximately 400,000
                still in use today. This is a direct result of the city's 1937 plumbing code, which mandated the use of
                lead pipes for service lines until the EPA banned lead pipes in 1986.
              </p>
              <p>
                Lead is a well-documented neurotoxin that is harmful to all people, with no safe level of exposure.
                Despite this knowledge, Chicago residents continue to be exposed to lead through their drinking water
                due to these aging lead service lines.
              </p>
              <h3>Key Issues:</h3>
              <ul>
                <li>No amount of lead is safe for human consumption</li>
                <li>The city only labels unknown service lines as "Suspected Lead," without providing risk levels</li>
                <li>Many residents rely on limited water testing data that doesn't fully assess exposure risk</li>
                <li>Lead exposure disproportionately affects low-income communities and communities of color</li>
              </ul>
              <p>
                The EPA's Lead and Copper Rule currently sets the action level at 15 parts per billion (ppb), though the
                proposed revision would lower this to 10 ppb. However, it's important to note that the allowable limit
                for lead in bottled water is only 5 ppb.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Link href="/risk-assessment">
                <Button className="bg-blue-600 hover:bg-blue-700">Check Your Risk</Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="team" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Eileen Garay",
                  role: "Co-Leader",
                  skills: "RStudio, Python, Data Mining, Data visualization, Machine Learning",
                },
                {
                  name: "Virginia Reider",
                  role: "Leader / Statistical Lead",
                  skills: "RStudio, Statistical Analysis, Regression Modeling, Data Visualizations, Ethical Analysis",
                },
                {
                  name: "Rajan Savani",
                  role: "Spokesperson / ML Lead",
                  skills: "ML, RStudio, Exploratory Data Analysis, Linear Algebra",
                },
                {
                  name: "Austin Samuel",
                  role: "Data Wrangler / ML",
                  skills: "Data Scraping, Visualization, ML, Langchain",
                },
                {
                  name: "Elijah Perez",
                  role: "ML / Data Optimization",
                  skills: "ML, Linear Algebra, Data Handling",
                },
                {
                  name: "Lalith Kothuru",
                  role: "Data Fusion / Back-end / ML",
                  skills: "Full-stack, ML, Data Scraping",
                },
              ].map((member, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{member.role}</p>
                    <p className="text-sm text-gray-500 mt-2">{member.skills}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Subject Matter Experts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Elin Betanzo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      President and founder of Safe Water Engineering LLC, a consulting firm working to improve access
                      to safe drinking water through policy consulting and engineering.
                    </p>
                    <p className="mt-2">
                      Played a key role in uncovering the Flint Water Crisis and has extensive experience with lead
                      service line issues.
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>BlueConduit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      A company that uses Machine Learning driven predictive modeling to classify lead service lines
                      composition.
                    </p>
                    <p className="mt-2">
                      In Flint, Michigan, they achieved an 80% hit rate while replacing lead lines, saving millions by
                      reducing unnecessary excavations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="methodology" className="space-y-4 pt-4">
            <div className="prose max-w-none">
              <h2>Our Approach</h2>
              <p>
                Our project uses a combination of statistical analysis and machine learning techniques to address two
                key problems:
              </p>

              <h3>1. Predicting Lead Contamination</h3>
              <p>
                We use spatial logistic regression and spatial linear regression to analyze how lead contamination is
                distributed across Chicago. These methods allow us to model relationships between household lead levels
                and geographic or structural factors.
              </p>
              <p>Key techniques include:</p>
              <ul>
                <li>Spatial logistic regression to predict households with lead levels above 10ppb</li>
                <li>Spatial linear regression to analyze how household characteristics affect lead levels</li>
                <li>PCA regression to analyze correlations between variables</li>
              </ul>

              <h3>2. Identifying Lead Service Lines</h3>
              <p>
                We develop predictive models that classify service lines more accurately based on property
                characteristics, location, and water testing data.
              </p>
              <p>Our machine learning approach employs:</p>
              <ul>
                <li>XGBoost</li>
                <li>k-Nearest Neighbors (k-NN)</li>
                <li>Random Forest Classifiers</li>
                <li>Fully Connected Neural Networks</li>
                <li>Naïve Bayes Classifiers</li>
              </ul>

              <h3>Data Sources</h3>
              <p>Our analysis integrates multiple data sources:</p>
              <ul>
                <li>Initial Draw dataset with water testing results</li>
                <li>Property information from the Cook County Assessor's Office</li>
                <li>Service line material data from the City of Chicago's Service Line Inventory</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ethics" className="space-y-4 pt-4">
            <div className="prose max-w-none">
              <h2>Ethical Considerations</h2>
              <p>Our project addresses several important ethical considerations:</p>

              <h3>Data Bias</h3>
              <p>
                We recognize the potential for sampling bias in our dataset. Training predictive models on biased data
                will only lead to biased results. We address this by:
              </p>
              <ul>
                <li>
                  Using bootstrapping methods to ensure all wards, neighborhoods, and zip codes are equally represented
                </li>
                <li>Adding variables from multiple sources to debias our data</li>
                <li>Conducting thorough exploratory data analysis to identify potential biases</li>
              </ul>

              <h3>Model Accuracy</h3>
              <p>We understand the consequences of false positives and false negatives in our predictions:</p>
              <ul>
                <li>False positives may result in unnecessary costs from digging up non-lead pipes</li>
                <li>
                  False negatives can result in the continued use of misclassified lead pipes, posing health risks
                </li>
              </ul>
              <p>We use ensemble methods and rigorous validation techniques to maximize model accuracy.</p>

              <h3>Environmental Justice</h3>
              <p>We examine our data through an intersectional lens, recognizing that:</p>
              <ul>
                <li>Low-income communities often face financial barriers to replacing lead service lines</li>
                <li>Limited access to healthcare can exacerbate the health consequences of lead poisoning</li>
                <li>Chicago has a history of redlining, which has disproportionately impacted many minority groups</li>
              </ul>

              <h3>Data Privacy</h3>
              <p>We uphold data privacy by:</p>
              <ul>
                <li>Only using publicly available data</li>
                <li>Rounding address data to the nearest 100th block number</li>
                <li>Ensuring no personally identifiable information is exposed</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

