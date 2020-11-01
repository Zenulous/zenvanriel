---
slug: "/blogs/nodejs-windows-app-service"
title: "Zen van Riel - Avoiding pitfalls when deploying Node.JS code to Windows App Service"
description: "Blog post about avoiding common problems with deploying a Node.JS app to Azure Windows App Service"
imageUrl: "https://miro.medium.com/max/700/1*f_058fMFtUNYJUi3HI-49A.png"
---

<br>

> Azure App Service allows you to host your Node.js application quickly and easily.

<br>

This is a great tagline and is truthful most of the time, but you will find that the devil is in the details. Unless you have a vanilla Node.js application, you will likely have to take some steps to ensure successful deployments to App Service. To show this in practice, this article will describe solutions to common pitfalls when deploying a TypeScript project to Windows App Service.

![Overview of deployment to Kudu Build Service on App Service. It’s as simple as it gets.](https://cdn-images-1.medium.com/max/3000/1*f_058fMFtUNYJUi3HI-49A.png)

---

# Deployment Method

This article assumes that the project is using the Kudu build server deployment option within Azure. This is a relatively easy and flexible way to set up continuous deployment, perfect if your project is just getting started or for one-man projects. It only takes a few clicks and new code changes from your designated branch will be automatically retrieved. (You’ll want to follow the [documentation](https://docs.microsoft.com/en-us/Azure/app-service/deploy-continuous-deployment#enable-continuous-deployment) for the initial configuration.) After retrieving code changes, the default Kudu build configuration will, in the case of a Node.js project, run `npm install --production` . Following this it will look for a compatible start script.

Of course, you could (and in time perhaps should) opt for a more advanced deployment option involving a CI/CD pipeline and/or containerization. A great starting point would be [ZIP deployment](https://docs.microsoft.com/en-us/azure/app-service/deploy-zip), but this goes beyond the scope of this article.

---

# Configuring IIS Routing

When deploying on App Service using Windows, Azure makes use of an [IIS web server](https://en.wikipedia.org/wiki/Internet_Information_Services). IIS needs some help to handle your Node.js application, requiring a `web.config` file to run Node.js using [iisnode](https://github.com/tjanczuk/iisnode). [Kudu will automatically create this web.config file](https://github.com/projectkudu/kudu/wiki/Using-a-custom-web.config-for-Node-apps) for you during deployment. This only gets you so far though, because the default configuration expects the main JavaScript file to be in the root of the repository. In the case of a TypeScript project, you need to compile your app to JavaScript, ideally in a sub directory. The default `web.config` generated will not suffice in this case. That’s why you want to create a `web.config` file yourself. This file needs to be placed in the root of your repository.

Note how in the following example the path for iisnode is set to `lib/app.js` , which is the output folder for the TypeScript compiler in one of my [template projects](https://github.com/Zenulous/typescript-project-template).

---

#### Handling TypeScript compilation

Redirecting IIS to your compiled JavaScript is great, except what do you do when your TypeScript is not compiled in the first place? I often use an `npm start` script like `tsc && node ./lib/app.js` to compile and start my app locally. You’d expect this to be executed by Kudu (after it installs dependencies). However, a Windows App Service will return the following error:

```
Invalid start-up command "tsc && node ./lib/app.js" in package.json. Please use the format "node <script relative path>".
```

There’s some strict limitations on the start-up command you can use. To solve this, you can add a `"postinstall":"tsc"` command to your `package.json` . The custom post-install script is always run by the Kudu build server after it installs the project’s dependencies and does not have the same restriction as `npm start`. Do note that for the `tsc` command to work `typescript` needs to be part of your regular dependencies, **not** dev dependencies. This is because Kudu runs `npm install --production` .

If you want to change Kudu’s default behavior, you can create [your own deployment script](https://github.com/projectkudu/kudu/wiki/Custom-Deployment-Script). With a custom deployment script, you could avoid this problem altogether by running the `tsc` command during deployment without relying on an `npm` start/post-install script. You can also run other commands according to your application’s needs.

You can always leave the original `npm start` command as it is. IIS will run your project according to `web.config` after Kudu ignores an unsupported start-up command. Pretty handy, since you can still keep a complex start command for local development.

# Do these steps apply to a Linux deployment?

The two pitfalls discussed do not apply to Linux.

The first is irrelevant since the Linux environment does not rely on IIS + iisnode to operate. The second is also not applicable, since on Linux you are far more flexible in defining a complex `npm start` command: you’re not limited to an expectation like `node <script relative path>`.

# In Conclusion…

This article describes solutions to common Kudu deployment problems when using Windows App Service. But since these problems don’t apply to Linux, you may wonder why you’d want to deploy to Windows in the first place.

In general, I’d say the configuration is easier if you deploy to Linux, but this should not rule out deployment to Windows. There’s some neat features locked to this platform such as WebJobs and more default logging options in the Azure portal. In the end, facing the difficulty of configuring your app to work on Azure is something you’re likely to do only a few times. Choosing the OS based on other factors such as the needs of your application will likely benefit you in the longer run.

_If you’d like to play around with deploying to App Service, I’ve published a template [TypeScript application](https://github.com/Zenulous/typescript-project-template) which is configured for both Windows and Linux Kudu deployment._
