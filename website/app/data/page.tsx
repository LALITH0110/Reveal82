import { BarChart, LineChart, PieChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function DataPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Data & Analysis</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our data sources, methodology, and findings
          </p>
        </div>

        <Tabs defaultValue="findings" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="findings">Key Findings</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="data-sources">Data Sources</TabsTrigger>
          </TabsList>

          <TabsContent value="findings" className="space-y-6 pt-4">
            <div className="prose max-w-none">
              <h2>Key Findings</h2>
              <p>
                Our analysis of Chicago's lead service lines and water testing data has revealed several important
                findings:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cool stuff by Virginia</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42.3%</div>
                  <p className="text-xs text-muted-foreground">
                    of Chicago households are estimated to have lead levels above the EPA's proposed 10ppb limit
                  </p>
                  <div className="mt-4 h-[180px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-sm text-gray-500">Chart visualization would appear here</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cool stuff by Raj</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">76.8%</div>
                  <p className="text-xs text-muted-foreground">
                    accuracy in predicting service line composition using our machine learning models
                  </p>
                  <div className="mt-4 w-full flex items-center justify-center">
                    <img
                      src="Raj_pic.png"
                      alt="Feature Correlation Matrix showing relationships between property characteristics"
                      className="w-full h-auto rounded-md shadow-sm"
                    />
                  </div>

                </CardContent>
              </Card>

              <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Lead Levels by Neighborhood</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="mt-4 h-[300px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-sm text-gray-500">Map visualization would appear here <br></br> (I want to add other groups project here)</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Our spatial analysis shows significant variation in lead levels across Chicago neighborhoods, blah blah blah.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose max-w-none">
              <h3>Key Insights</h3>
              <ul>
                <li>
                  <strong>Property Age Correlation:</strong> Homes built before 1986 have a significantly higher
                  likelihood of having lead service lines, with the highest risk in homes built between 1900-1950.
                </li>
                <li>
                  <strong>Geographic Patterns:</strong> Our spatial analysis revealed clusters of high lead levels in
                  specific neighborhoods, particularly in areas with older housing stock and a history of disinvestment.
                </li>
                <li>
                  <strong>Predictive Factors:</strong> The most significant predictors for lead service lines includes ...
                </li>
                <li>
                  <strong>Environmental Justice:</strong> Our analysis found that low-income communities and communities
                  of color are disproportionately affected by lead service lines, highlighting environmental justice
                  concerns.
                </li>
                <li>
                  <strong>Model Performance:</strong> Our ensemble machine learning approach achieved high 80s percent accuracy in
                  predicting service line composition, significantly better than random guessing (which would be 50%).
                </li>
              </ul>

              <h3>Recommendations</h3>
              <ul>
                <li>
                  <strong>Prioritize Replacement:</strong> The city should prioritize service line replacement in
                  neighborhoods with the highest predicted lead levels and greatest health risks.
                </li>
                <li>
                  <strong>Expand Testing:</strong> Increase water testing coverage, particularly in areas with limited
                  data, to improve model accuracy and identify high-risk properties.
                </li>
                <li>
                  <strong>Public Education:</strong> Enhance public education about lead risks and mitigation
                  strategies, especially in high-risk neighborhoods.
                </li>
                <li>
                  <strong>Financial Assistance:</strong> Expand financial assistance programs for lead service line
                  replacement, with a focus on equity and accessibility.
                </li>
                <li>
                  <strong>Data Transparency:</strong> Improve transparency and accessibility of service line inventory
                  data to help residents understand their risk and make informed decisions.
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="methodology" className="space-y-6 pt-4">
            <div className="prose max-w-none">
              <h2>Methodology</h2>
              <p>
                Our project employed a comprehensive approach combining statistical analysis and machine learning to
                address two key problems:
              </p>

              <h3>1. Predicting Lead Contamination</h3>
              <p>To predict the percentage of households with lead contamination above 10ppb, we used:</p>
              <ul>
                <li>
                  <strong>Spatial Logistic Regression:</strong> We developed spatial logistic regression models to
                  analyze how lead contamination is distributed across Chicago, accounting for geographic clustering and
                  neighborhood effects.
                </li>
                <li>
                  <strong>Spatial Linear Regression:</strong> This helped us model relationships between household lead
                  levels and geographic or structural factors such as neighborhood, property characteristics, and
                  historical trends.
                </li>
                <li>
                  <strong>PCA Regression:</strong> We used Principal Component Analysis to reduce dimensionality and
                  address multicollinearity among predictors.
                </li>
                <li>
                  <strong>Bootstrapping Methods:</strong> To address potential sampling bias in our dataset, we employed
                  bootstrapping techniques to ensure all neighborhoods, wards, and demographic groups were adequately
                  represented.
                </li>
              </ul>

              <h3>2. Identifying Lead Service Lines</h3>
              <p>For classifying service lines as lead or non-lead, we implemented:</p>
              <ul>
                <li>
                  <strong>Machine Learning Models:</strong> We tested multiple algorithms including:
                  <ul>
                    <li>XGBoost</li>
                    <li>k-Nearest Neighbors (k-NN)</li>
                    <li>Random Forest Classifiers</li>
                    <li>Fully Connected Neural Networks</li>
                    <li>Naïve Bayes Classifiers</li>
                  </ul>
                </li>
                <li>
                  <strong>Ensemble Methods:</strong> We combined multiple models using ensemble techniques to improve
                  prediction accuracy.
                </li>
                <li>
                  <strong>Feature Engineering:</strong> We created new features from existing data, including property
                  age categories, neighborhood risk scores, and distance-based metrics.
                </li>
                <li>
                  <strong>Cross-Validation:</strong> We used cross-validation to ensure model reliability and
                  prevent overfitting.
                </li>
              </ul>

              <h3>Model Evaluation</h3>
              <p>We evaluated our models using:</p>
              <ul>
                <li>
                  <strong>Confusion Matrices:</strong> To visualize true positives, false positives, true negatives, and
                  false negatives.
                </li>
              </ul>

              <h3>Addressing Bias</h3>
              <p>We took several steps to address potential biases in our analysis:</p>
              <ul>
                <li>
                  <strong>Ethical Review:</strong> We conducted an ethical review of our methodology and results to
                  identify and address potential biases.
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="data-sources" className="space-y-6 pt-4">
            <div className="prose max-w-none">
              <h2>Data Sources</h2>
              <p>
                Our analysis integrated multiple data sources to create a comprehensive dataset for predicting lead
                service lines and contamination levels:
              </p>

              <h3>Primary Data Sources</h3>
              <ul>
                <li>
                  <strong>Initial Draw Dataset:</strong> Water testing results from a sample of Chicago households,
                  including three draws of water after 8 hours of no use, with the maximum lead level recorded for each
                  address.
                </li>
                <li>
                  <strong>Cook County Assessor's Office:</strong> Some of the property-level data includes:
                  <ul>
                    <li>Geographic information (latitude, longitude)</li>
                    <li>Property characteristics (age, size, construction materials)</li>
                    <li>Property value and assessment information</li>
                    <li>Number and type of rooms</li>
                    <li>Total square footage</li>
                  </ul>
                </li>
                <li>
                  <strong>City of Chicago Service Line Inventory:</strong> Data on service line materials for public and
                  private portions of water infrastructure, categorized as:
                  <ul>
                    <li>Lead</li>
                    <li>Suspected lead</li>
                    <li>Not lead</li>
                    <li>Galvanized requiring replacement(optional)</li>
                  </ul>
                </li>
                <li>
                  <strong>Census Data:</strong> Demographic information at the block group level, including:
                  <ul>
                    <li>Income levels</li>
                    <li>Race and ethnicity</li>
                    <li>Housing characteristics</li>
                    <li>Educational attainment</li>
                  </ul>
                </li>
              </ul>

              <h3>Additional Data Sources</h3>
              <ul>
                <li>
                  <strong>Chicago Data Portal:</strong> Information on city infrastructure, ward boundaries, and
                  historical data.
                </li>
                
              </ul>

              <h3>Data Processing</h3>
              <p>We performed several data processing steps to prepare our dataset for analysis:</p>
              <ul>
                <li>
                  <strong>Data Cleaning:</strong> Handling missing values, removing duplicates, and correcting errors.
                </li>
                <li>
                  <strong>Feature Engineering:</strong> Creating new variables such as property age categories, distance
                  to water mains, and neighborhood risk scores.
                </li>
                <li>
                  <strong>Geocoding:</strong> Converting addresses to geographic coordinates for spatial analysis.
                </li>
                <li>
                  <strong>Data Integration:</strong> Merging multiple datasets using address matching and spatial joins.
                </li>
                <li>
                  <strong>Privacy Protection:</strong> Rounding address data to the nearest 100th block number to
                  protect privacy.
                </li>
              </ul>

              <h3>Data Limitations</h3>
              <p>We acknowledge several limitations in our data:</p>
              <ul>
                <li>
                  <strong>Sampling Bias:</strong> The water testing data may not be representative of all Chicago
                  households, as testing is often voluntary.
                </li>
                <li>
                  <strong>Missing Data:</strong> Many service lines are classified as "suspected lead" without
                  definitive confirmation.
                </li>
                <li>
                  <strong>Temporal Limitations:</strong> Water testing data represents a snapshot in time and may not
                  capture variations due to seasonal changes or water system modifications.
                </li>
                <li>
                  <strong>Limited Historical Data:</strong> Incomplete records for older properties and service line
                  installations.
                </li>
              </ul>

              <p>
                Despite these limitations, our integrated dataset provides a robust foundation for analyzing lead
                service lines and contamination risks in Chicago.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

