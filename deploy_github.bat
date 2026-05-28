@echo off
cd /d "c:\Users\Sachin\Desktop\Portfoio-main"
if not exist .git (
    git init
)
git remote remove origin >nul 2>&1
git remote add origin https://github.com/sachinmewada/portfolio.git
git add dist/*
git commit -m "Initial portfolio deployment"
git branch -M main
git push -u origin main
