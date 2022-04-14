# Movies App

Movies App is a small project made for interview technical process.

## Tecnologies

- [React Native](https://reactnative.dev/): Version 0.63.4

- [React](https://reactjs.org/): Version 16.13.1

- [Javascript](https://www.javascript.com/)

- [Typescript](https://www.typescriptlang.org/)

- [Java Android](https://developer.android.com/)

- [Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

## development environment:

Depending on the device you want to work with to develop in React Native, it will be the configuration that you will have to make.

Since the project was only requested for Android, any operating system (Windows, Linux, Unix) will be useful.

A brief summary of the steps to be carried out since they are sections that have their own official documentation:

1. Download and install the following dependencies: -[NodeJS](https://nodejs.org/en/download/). -[JDK](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html). -[Android-Studio](https://developer.android.com/studio).

2. Set up development environments: [Environment settings](https://reactnative.dev/docs/environment-setup).

## Installing packages.

The project uses open source third-party libraries, which allow us to avoid reinventing the wheel. To find all these dependencies, you can place them in the root folder of the project, in the file called "package.json".

To install the libraries open a console that uses the node "npm" package manager and type in the console: `npm install`

This process may take some time as it will download all these dependencies and store them in the "node_modules" folder located at the root of the project.

## Lifting the app.

If you managed to get your development environment set up right, you shouldn't have any problems up to this point.
test your devices with command
`adb devices`
this whill show your physical and virtual devices

In a terminal type the following command: `npx react-native run-android`
and for iOS:
`npx pod-install`
`npx react-native run-ios`

The following will happen:

1. Will raise a console [Metro Bundler](https://reactnative.dev/docs/_getting-started-macos-ios#step-1-start-metro), which is the engine that will translate the javascript codes into native Android or iOS code.

2. It will bring up a virtual emulator that you previously set up in Android Studio when setting up your development environment. If you prefer to use a physical device, visit the section [Run on Physical Device](https://reactnative.dev/docs/running-on-device).

3. It will install the application on the Android device and will depend entirely on Metro Bundler. This means that the application is configured for the development environment, and not for a production environment.

4. Once installed, the application will start running on your device.

> Note that the command used is a shortening of the official command used in the documentation with react native cli: `react-native run-android` or if you did not install this tool globally you can use it from the "node_modules" folder by prepending the npx command: `npx react-native run-android`.
