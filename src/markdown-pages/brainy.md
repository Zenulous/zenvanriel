---
slug: "/brainy-bot"
title: "Zen van Riel - Brainy"
description: "Brainy is a Microsoft Teams app (bot) that helps a team with the allocation of tasks"
imageUrl: "www.zenvanriel.nl/icons/brainy.svg"
---

The Brainy bot is an app template for Microsoft Teams. Finding the right person for a specific task can be a challenge, especially when different roles within an organization must work as a team. Brainy makes the collaboration across these roles more structured and efficient by orchestrating its flow.

The three roles are as follows:

- **Task owner (TO)**: submits a task
- **Task manager (TM)**: assigns task to a task executor or declines it
- **Task executor (TE)**: accepts or declines the task

The Brainy bot enables a fast and simple process flow through the use of customized adaptive cards which embed various user friendly features.

[GitHub Code Repository](https://github.com/microsoft/microsoft-teams-brainy-bot)

# Main Features

**Task owner components:**

- To submit a new task, the task owner fills in a task form, which includes different types of input fields.

![overview1.gif](https://github.com/microsoft/microsoft-teams-brainy-bot/wiki/.attachments/overview1.gif)

- The TO will be notified once a task has been assigned and accepted.

**Task manager components:**

- The task submitted by the TO is directed to a group where it is reviewed by one or multiple TM.
- The task can be declined with the click of a button; the decline notification and related comment will then land in the TO's chat, after which the task can be modified and re-submitted.
- The TM can assign the task through selecting the desired TE from a drop-down list; TM can also add a comment to offer further guidance to the TE.

![overview2.gif](https://github.com/microsoft/microsoft-teams-brainy-bot/wiki/.attachments/overview2.gif)

**Task executor components:**

- Once the TM assigns a task, a new task notification will be sent to the TE.

![overview3.gif](https://github.com/microsoft/microsoft-teams-brainy-bot/wiki/.attachments/overview3.gif)

- The card received by the TE contains all information submitted by the TO and the TM's comment
- The TE can Accept/Decline, open a chat with the TM/TO and schedule a meeting with the TM/TO through the click of a button

# Architecture

<img  src="https://github.com/microsoft/microsoft-teams-brainy-bot/wiki/.attachments/architecture.png" width="600px">

## Brainy Bot

The bot is hosted on Azure App Service. It is built using TypeScript and the [Bot Framework SDK v4](https://docs.microsoft.com/en-us/azure/bot-service/javascript/bot-builder-javascript-quickstart?view=azure-bot-service-4.0). Task Owners and Task Executors communicate to Brainy using a 1:1 channel. Task Managers communicate to Brainy using the respective manager team.

## Configuration Application

The configuration app is an [Angular](https://angular.io/) application used to configure the manager team and all user roles. To access the application, the user's user principal name (UPN) within an Azure Active Directory tenant is checked against a whitelist.

## SQL Database

The SQL database is predominantly used to store and retrieve data related to the task allocation process. A full history of tasks, actions, assignments and feedback is stored in this database. Such relational data can easily be used to achieve data visualization utilizing [PowerBI](https://powerbi.microsoft.com/) or to create a companion app. The database also retains user role information and task metadata, which is used in Brainy's rigid permission system.
