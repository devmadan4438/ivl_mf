## Micro Frontend Apps: Task & AddTask
This repository contains two Micro Frontend (MFE) applications:

###Task: Manages task listing and allows removing tasks from the list.
###AddTask: Provides functionality to add new tasks.

##Technologies Used
React
Redux
Redux Saga
React Bootstrap
Webpack Module Federation

##Application Overview
#Task
Description: Handles the listing of tasks and removal of tasks from the list.

##Key Features:
Displays a list of tasks.
Allows users to remove tasks.
Uses Redux for state management.
Uses Redux Saga for handling side effects.
Styled with React Bootstrap.


#AddTask
Description: A standalone application responsible for adding tasks.

##Key Features:
Provides a form to add a new task.
Exposes the AddTask component via Module Federation for use in other apps.
Uses Redux for state management.
Uses Redux Saga for asynchronous actions.
Styled with React Bootstrap.
Setup and Installation

## Prerequisites
Node.js and npm installed.

## Installation Steps
Clone the repository:
git clone <repository-url>
Navigate to each app directory (Task and AddTask) and install dependencies:

Integration with Module Federation
Both apps use Webpack Module Federation to enable the integration of Micro Frontend components. The AddTask app exposes the AddTask component, which can be consumed by the Task app.
