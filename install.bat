@echo off
title F-Bumper

if exist node_modules\ (
  echo You've already installed this
  echo Navigate to "config" folder for bot settings and "src" to start the script
  pause
  exit
) else (
  call npm i >> NUL
  echo Succesfully installed!
  echo Please re-run this file.
  pause
  exit
)