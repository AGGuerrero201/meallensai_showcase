# meallensai_showcase
Showcase repo for MealLensAI – AI powered calorie tracker with trainer client hub.

# MealLensAI

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Built with React Native](https://img.shields.io/badge/React%20Native-Expo-blue)
![Backend: Supabase](https://img.shields.io/badge/Backend-Supabase-green)

## Overview
MealLensAI is an AI powered nutrition tracker with a built in trainer client hub. Users snap a photo of a meal to get instant macro estimates and save entries to a daily log. Trainers view client logs in real time and can adjust targets without spreadsheets or manual check ins.

## Quick Start
This is a read only showcase. App source is private. This repo includes schema snippets, policy examples, and a demo walkthrough.

1. Browse the screenshots below  
2. Review schema and policies in `snippets/`  
3. Watch the short demo  
4. Read the case study at the end  

## Problem
Manual food logging is slow and often inaccurate. Trainers struggle to monitor client intake because most apps are built only for individuals, not coaching workflows.

## Solution
MealLensAI automates meal logging with image recognition and extends the tracker into a coaching platform. Clients log meals with photos, upload progress photos for check ins, while trainers monitor compliance, adjust targets, and provide accountability from a central hub.

## Features
* AI meal recognition with auto macro breakdown  
* Nutrition lookup from food databases with 4 9 4 macro fallback  
* Daily goal progress bar with traffic light indicators  
* Profile settings for units and macro presets  
* Secure data storage with Supabase Row Level Security  
* Trainer client hub to view logs, adjust targets, and track progress  
* Client progress photos visible to assigned coaches for visual check ins  
* Trainer controls to edit client calorie goals and macro targets in app

## Tech Stack
* Frontend: React Native with Expo  
* Backend: Supabase Postgres plus Edge Functions  
* APIs: LogMeal image recognition, USDA FoodData Central  
* Auth: Supabase Auth with Row Level Security  

## Trainer Client Hub (What Sets It Apart)
Most calorie trackers stop at the individual level. MealLensAI includes a trainer dashboard where coaches can  
* View client food logs in real time  
* Adjust calorie and macro targets remotely directly in the app  
* Review client progress photos for visual compliance and physique trends  
* Monitor adherence and detect patterns without spreadsheets or manual check ins

## Progress Photos
Clients can upload progress photos directly in the app. Assigned coaches see these photos alongside daily logs and targets. This creates a simple weekly or monthly check in flow and gives trainers context when adjusting calories and macros.

## Database Design and Security
The schema supports both client tracking and trainer dashboards  
* Clients can only view and manage their own entries and photos  
* Trainers can view entries and photos for their assigned clients through the trainer_clients join table  
* RLS policies Row Level Security ensure strict access control for privacy and security  

See [schema.sql](snippets/schema.sql) and [policies_readme.md](snippets/policies_readme.md) for full table definitions and example RLS policies.

## Screenshots

### Dashboard
![Dashboard Main](screenshots/dashboard_main.PNG)  
![Dashboard Progress](screenshots/dashboard_progress.PNG)  
![Dashboard Progress Alt](screenshots/dashboard_progress_alt.PNG)  

### Logging Meals
![Log Meal Entry](screenshots/log_meal_entry.PNG)  

### Goals
![Goals Primary](screenshots/goals_primary.PNG)  
![Goals Targets](screenshots/goals_targets.PNG)  

### Profile
![Profile Overview](screenshots/profile_overview.PNG)  
![Profile Physical Info](screenshots/profile_physical_info.PNG)  

### Trainer Hub
![Trainer Hub Overview](screenshots/trainerhub_overview.PNG)  
![Trainer Hub Macros](screenshots/trainerhub_macros.PNG)  
![Trainer Hub Activity](screenshots/trainerhub_activity.PNG)  
![Trainer Hub Check-ins](screenshots/trainerhub_checkins.PNG)  

### Recipes
![Recipes Empty](screenshots/recipes_empty.PNG)  

### Subscription
![Subscription Plans](screenshots/subscription_plans.PNG)  

## Roadmap
* Apple Health and Google Fit integration  
* Push notifications for meal logging and coach reminders  
* Weekly trainer reports and client insights  
* Improved portion guidance with sliders and plate size estimation  

## Lessons Learned
* Implementing secure row level policies for user data  
* Handling kcal versus kJ normalization in food databases  
* Designing dual flows that serve both clients and trainers  

## Demo
Demo video coming soon.

## Case Study
I built MealLensAI because I was frustrated with how slow and inaccurate food logging can be. Most apps are designed only for individuals, which makes coaching and accountability way harder than it needs to be. I wanted to create something that worked for both sides: clients who just want a faster way to log their meals, and trainers who need a clear dashboard to monitor progress without juggling spreadsheets and endless check-ins.

As a personal trainer myself, it can get annoying flipping through different texts from clients, opening separate photos, and trying to keep track of macros across multiple conversations. It gets confusing and time consuming, and it’s easy to miss details. I wanted to centralize all of that into one place where both sides can see the same information and stay on track.

The biggest challenges were setting up secure row level policies so client data stayed private, and figuring out how to normalize nutrition data from different sources like kcal versus kJ. I also had to think through how to design the trainer and client flows so they felt natural, but still respected security boundaries.

In the end, I was able to build out a working system where clients can log meals, upload photos, and track their macros, while trainers can see those logs, adjust targets, and check visual progress all in one place. It’s not perfect yet — the AI meal recognition is still stubbed — but the foundation is there and I’m proud of how far it’s come. What I really took away from this is how important it is to design with security and real user workflows in mind from the start.  
 
## License
MIT License for showcase repo. App code and brand remain private.
