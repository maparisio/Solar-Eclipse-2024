# Solar-Eclipse-2024
Project 3
--------------------------------
- By M. Aparisio, H. Heer, M. Smith & L. Vara
--------------------------------

Note: It is important that if you are going to use this code, all files
are placed in a directory that matches this repository, for the better functionality of it.
Otherwise you would have to adjust the paths on the files, accordingly.

This repository consists of a Team Project were we explore the path of the Solar Eclipse observed on April 8th, 2024 across the United States:
---------------------------------
INDEX
---------------------------------
1. Analysis & Slide Presentation 
2. Content of the repository
3. Instructions for the Project
4. References

---------------------------------
Analysis & Slide Presentation
---------------------------------
- ??Solar Ecliplse 04/08/2024 Analysis Report: LINK
- ??Presentation: LINK 

---------------------------------
Content of the repository
---------------------------------
- Resources Directory:
  - Eclipse_Cities_Totality_duration.csv
  - Eclipse_Citites_Totality_duration.json
  - Eclipse_Totality_Averages.csv

- static Directory:
  - Cities_Outside_Totality.csv
  - Cities_Outside_Totality.geojson  <-- Main data file used for the Partial Eclipse locations
  - Cities_Outisde_Totality.json
  - Cleanning_Ttl_E_duration.ipynb  <-- This file helped with calculation on the duration of the Total Eclipse and how many States had Total Eclipse Sightings.
  - Eclipse_Cities_Totality.csv
  - Eclipse_Cities_Totality.geojson <-- Main data file used for the Total Eclipse locations, duration calculations, average total eclipse duration, and percentage of US states that viewed the Total Eclipse vs Partial Eclipse.
  - Eclipse_Cities_Totality.json
  - cleaned_TotalE_Duration.csv
  - cleaned_TotalE_Duration.json
  - cleaned_TotalE_Duration.xlsx
  - eclipse-background-2.png
  - eclipse-background.jpg
  - logic.js   <-- This is the main Javascript file that gives functionality to our HTML
  - style.css   <-- This is the css file that styles our HTML
 
- working_files Directory:
  - DurationPlots.js <-- Javascript that contains the Bar Plot, that we later incorporated to the logic.js file
  - durationIndex.html <-- HTML to test out the Bar Plot from this directory.
 
- Eclipse_Totality_Duration_csvtojson.ipynb
- index.html

----------------------------------
Instructions
----------------------------------
Data Visualization Track
1. The project must include visualizations. We opted for Javascript by using the Plotly and Leaflet libraries.
2. ????Data must be stored in and extracted from at least one database. (PostgreSQL, MongoDB, SQLite, etc).
3. The project must include at least one JavaScript or Python library that we did not cover. We used the video.js library to incorporate a relevant video to our project.
4. The project must be powered by a dataset with at least 100 records. Our datasets are: Cities_Outside_Totality.geojson, and Eclipse_Cities_Totality.geojson
5. The project must include some level of user-driven interaction, such as:
   * HTML menus, dropdowns, and/or textboxes to display JavaScript-powered visualizations
   * Visualizations created from user-selected filtered data, which could be powered by:
       - JavaScript libraries: We created an interactive map, from which the user can choose to see the path of the Total Eclipse, or the whole area where only Partial Eclipse sightings were recorded. The user can also click on the markers of the Total Eclipse path, and find out what was the duration of the Total Eclipse per each of the cities in relation to the particular marker. The charts also allow the user to hover over, and view more information regarding the information within the charts.
       - Python in Jupyter Notebook
       - Command-line Python scripts that save visualizations locally
6. If possible, your final visualizatoin should ideally include at least three views.
7. The GitHub repo must include a ReadMe.md with an outline of the project including:
  - An overview of the project and its purpose
  - Instructions on how to use and interact with the project
  - At least one paragraph summarizing efforts for ethical considerations made in the project
  - References for the data source(s)
  - References for any code used that is not your own



------------------------------------
References
------------------------------------

**References for the data source(s):**


**References for code:**
- To convert datetime using pd.to_datetime on the Jupyter Notebook "Cleanning_Ttl_E_duration.ipynb":
  - https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html
  - https://pandas.pydata.org/pandas-docs/version/0.23/generated/pandas.to_datetime.html
- For the format and referencing %Z
  - https://www.educative.io/answers/what-is-the-pandastodatetime-method

- For calculateDurationMMSS function in the logic.js file, to calculate the duration of the eclipse and transform that value into a MM:SS format:
  - https://stackoverflow.com/questions/17624335/converting-milliseconds-to-minutes-and-seconds
  - https://stackoverflow.com/questions/15493521/how-do-i-calculate-a-duration-time
  - https://www.geeksforgeeks.org/how-to-measure-time-taken-by-a-function-to-execute-using-javascript/
  - https://stackoverflow.com/questions/13894632/get-time-difference-between-two-dates-in-seconds

- For the fetch() method in the logic.js file:
  - https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example
  - https://learnjavascript.online/topics/fetch.html

**Image Resources:**
  -
  -
  -

-----------------------------------------------------------------------------------------------------------------------


