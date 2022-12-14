# To run this script directly, run this in an elevated admin PowerShell prompt:
#     Invoke-WebRequest -UseBasicParsing https://raw.githubusercontent.com/LearnWithLlew/TestingLegacyCodeCourse.ts/main/install.windows.ps1 | Invoke-Expression

# This script is intended to setup a dev machine from scratch. Very useful for setting up a EC2 instance for mobbing.
#

iwr -useb https://raw.githubusercontent.com/JayBazuzi/machine-setup/main/windows.ps1 | iex
iwr -useb https://raw.githubusercontent.com/JayBazuzi/machine-setup/main/javascript-webstorm.ps1 | iex

cinst typora  --ignore-checksums
 
# Clone repo
& "C:\Program Files\Git\cmd\git.exe" clone https://github.com/LearnWithLlew/TestingLegacyCodeCourse.ts C:\Code\TestingLegacyCodeCourse
cd \Code\TestingLegacyCodeCourse\src
npm ci
npm test


# Done
cls
echo "Done!"
