import pandas as pd
import time
from rapidfuzz import process, fuzz


#In the assessor data (https://datacatalog.cookcountyil.gov/Property-Taxation/Assessor-Archived-05-11-2022-Property-Locations/c49d-89sn/about_data), I have filter 
#the data to only have Chicago Zipcode, since we are focusing on chicago houses
#I also added another filter where Indicator_has_latlon = 1, to only give data that has latitude and longitude
#Zipcode range: 60601-60827
Assessor = pd.read_csv('Assessor.csv')
Assessor.rename(columns={'pin':'PIN'}, inplace=True)
Assessor_df = Assessor.drop(columns=['school_elem_district', 'school_hs_district', 'indicator_has_address', 'indicator_has_latlon', 'township_name', 'nbhd', 'puma',
                                    'municipality_fips', 'municipality', 'commissioner_dist', 'reps_dist', 'senate_dist', 'ssa_name', 'ssa_no', 'withinmr100',
                                    'withinmr101300', 'indicator_has_address', 'indicator_has_latlon'])

#In the Assessor characteristic (https://datacatalog.cookcountyil.gov/Property-Taxation/Assessor-Archived-05-11-2022-Residential-Property-/bcnq-qi2z/about_data),
# I have fiter the PIN to only give Chicago houses, same reasons as above 
#Pin range: 14000000000000 - 25000000000000
Assessor_char = pd.read_csv('Assessor_char.csv')
Assessor_char = Assessor_char.drop(columns=['Property Address', 'Longitude', 'Latitude', 'Town Code'])
#To only give merge on data that are known (no NA's)
Chi_char = pd.merge(Assessor_df, Assessor_char, on = "PIN", how = "inner")

resp = pd.read_csv('Responsive_Document.csv')

Chi_char["property_address"] = Chi_char["property_address"].str.lower().str.strip()
resp["Address"] = resp["Address"].str.lower().str.strip()

def fuzzy_merge(chi_df, resp_df, threshold=90, update_interval=100):
    start_time = time.time()
    matches = []
    total_rows = len(chi_df)
    
    for index, chi_row in chi_df.iterrows():
        best_match = process.extractOne(chi_row["property_address"], resp_df["Address"], scorer=fuzz.ratio)
        
        if best_match and best_match[1] >= threshold:  # Ensure match meets threshold
            matched_index = resp_df[resp_df["Address"] == best_match[0]].index[0]
            resp_row = resp_df.loc[matched_index, ["Private Service Line Material", "Public Service Line Material"]]
            
            # Append merged data
            matches.append({
                "property_address": chi_row["property_address"],
                "Private Service Line Material": resp_row["Private Service Line Material"],
                "Public Service Line Material": resp_row["Public Service Line Material"]
            })
        if (index + 1) % update_interval == 0:
            elapsed_time = time.time() - start_time
            avg_time_per_row = elapsed_time / (index + 1)
            estimated_total_time = avg_time_per_row * total_rows
            estimated_remaining_time = estimated_total_time - elapsed_time
            print(f"🔄 Processed {index + 1}/{total_rows} rows - Elapsed: {elapsed_time:.2f}s - Est. remaining: {estimated_remaining_time:.2f}s")

    end_time = time.time()  # End timer
    execution_time = end_time - start_time
    print(f"\n✅ Fuzzy matching completed in {execution_time:.2f} seconds.\n")  
    
    return pd.DataFrame(matches)

merged_df = fuzzy_merge(Chi_char, resp, threshold=90, update_interval=100)

#merged_df.to_csv("merged_data.csv", index=False)
print(merged_df.head())