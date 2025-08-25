# meallensai_showcase
Showcase repo for MealLensAI – AI-powered calorie tracker with trainer-client hub.

# MealLensAI

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Built with React Native](https://img.shields.io/badge/React%20Native-Expo-blue)
![Backend: Supabase](https://img.shields.io/badge/Backend-Supabase-green)

## Overview
MealLensAI is an AI-powered nutrition tracker with a built-in trainer-client hub. Users snap a photo of a meal to get instant macro estimates and save entries to a daily log. Trainers view client logs in real time and can adjust targets without spreadsheets or manual check-ins.

## Problem
Manual food logging is slow and often inaccurate. Trainers struggle to monitor client intake because most apps are built only for individuals, not coaching workflows.

## Solution
MealLensAI automates meal logging with image recognition and extends the tracker into a coaching platform. Clients log meals with photos, while trainers monitor compliance, adjust targets, and provide accountability from a central hub.

## Features
- 📸 AI meal recognition with auto-macro breakdown  
- 🔢 Nutrition lookup from food databases with 4-9-4 macro fallback  
- 🎯 Daily goal progress bar with traffic light indicators  
- 👤 Profile settings for units and macro presets  
- 🔐 Secure data storage with Supabase Row-Level Security  
- 🏋️ Trainer-client hub to view logs, adjust targets, and track progress  

## Tech Stack
- **Frontend:** React Native with Expo  
- **Backend:** Supabase (Postgres + Edge Functions)  
- **APIs:** LogMeal (image recognition), USDA FoodData Central  
- **Auth:** Supabase Auth with Row-Level Security  

## Trainer-Client Hub (What Sets It Apart)
Most calorie trackers stop at the individual level. MealLensAI includes a trainer dashboard where coaches can:  
- View client food logs in real time  
- Adjust calorie and macro targets remotely  
- Monitor compliance and detect trends  
- Reduce manual check-ins and spreadsheets  

## Database Design & Security
The schema supports both client tracking and trainer dashboards:
- **Clients** can only view and manage their own entries.  
- **Trainers** can view entries for their assigned clients through the `trainer_clients` join table.  
- **RLS policies** (Row-Level Security) ensure strict access control for privacy and security.  

👉 See [schema.sql](snippets/schema.sql) for full table definitions and example RLS policies.  

## Roadmap
- Apple Health + Google Fit integration  
- Push notifications for meal logging and coach reminders  
- Weekly trainer reports and client insights  
- Improved portion guidance with sliders and plate-size estimation  

## Lessons Learned
- Implementing secure row-level policies for user data  
- Handling kcal vs kJ normalization in food databases  
- Designing dual flows that serve both clients and trainers  

## Demo
🎥 Demo video coming soon.  

## License
MIT License for showcase repo. App code and brand remain private.
