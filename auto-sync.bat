@echo off
REM === Auto-sync script for GitHub ===
REM Change this path to your local repo folder
set REPO_PATH=D:\HTML ReLearning\myjourney-code-log

cd /d "%REPO_PATH%"

echo Watching for changes in %REPO_PATH% ...
echo Press Ctrl+C to stop.

REM Watch all files recursively
chokidar "**/*" -c "git add -A && git commit -m 'Auto-sync commit' && git push origin main" --initial
