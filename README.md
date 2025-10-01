# JSG SPARSH PUNE Mobile App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Capacitor](https://img.shields.io/badge/Capacitor-v7.4.3-blue.svg)](https://capacitorjs.com/)

A cross-platform mobile application built with Capacitor that provides a native mobile wrapper for the JSG SPARSH PUNE web application.

## Overview

This mobile app serves as a native wrapper that launches the JSG SPARSH PUNE web application hosted at [https://jsg-sparsh-pune.vercel.app](https://jsg-sparsh-pune.vercel.app). It provides users with a native mobile app experience while leveraging the existing web application.

## Features

- **Cross-platform**: Supports both Android and iOS platforms
- **Native Performance**: Built with Capacitor for optimal native performance
- **Web Integration**: Seamlessly integrates with the existing web application
- **Offline Capable**: Basic offline handling with launch screen

## Technology Stack

- **Framework**: [Capacitor](https://capacitorjs.com/) v7.4.3
- **Platforms**: Android, iOS
- **Web Runtime**: Native WebView with Capacitor plugins
- **Build System**: 
  - Android: Gradle
  - iOS: Xcode

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Capacitor CLI](https://capacitorjs.com/docs/cli)

### Platform-specific requirements:

#### Android
- [Android Studio](https://developer.android.com/studio)
- Android SDK (API level 22 or higher)
- Java Development Kit (JDK 11 or higher)

#### iOS
- [Xcode](https://developer.apple.com/xcode/) (latest version)
- iOS deployment target: 13.0 or higher
- macOS (required for iOS development)
- Apple Developer Account (for device testing and App Store deployment)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ag241290/JSG-SPARSH-Mobile-App.git
   cd JSG-SPARSH-Mobile-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Capacitor CLI globally (if not already installed)**
   ```bash
   npm install -g @capacitor/cli
   ```

## Building the App

### Prepare the web assets
```bash
# The web assets are already built and located in the 'www' directory
# If you need to update them, modify the files in the 'www' directory
```

### Sync with native platforms
```bash
npx cap sync
```

## Running on Devices

### Android

1. **Open in Android Studio**
   ```bash
   npx cap open android
   ```

2. **Run the app**
   - Connect an Android device or start an emulator
   - Click the "Run" button in Android Studio or use:
   ```bash
   npx cap run android
   ```

### iOS

1. **Open in Xcode**
   ```bash
   npx cap open ios
   ```

2. **Run the app**
   - Connect an iOS device or start a simulator
   - Click the "Run" button in Xcode or use:
   ```bash
   npx cap run ios
   ```

## Development

### Project Structure

```
JSG-SPARSH-Mobile-App/
  android/                   # Android native project
    app/
      src/main/
      build.gradle
    build.gradle
  ios/                       # iOS native project
    App/
      App/
      App.xcodeproj
  www/                       # Web assets (built)
    index.html
    assets/
  web/                       # Web source files
    index.html
    index.js
  icons/                     # App icons
  capacitor.config.json      # Capacitor configuration
  package.json               # Node.js dependencies
  README.md                  # Project documentation
  CONTRIBUTING.md            # Contributing guidelines
  .gitignore                 # Git ignore rules
```

### Configuration

The app configuration is managed in `capacitor.config.json`:

```json
{
  "appId": "com.jsg.sparsh.pune",
  "appName": "JSG SPARSH Pune",
  "webDir": "www",
  "bundledWebRuntime": false,
  "server": {
    "url": "https://jsg-sparsh-pune.vercel.app",
    "cleartext": false
  }
}
```

### Making Changes

1. **Update web content**: Modify files in the `www/` directory
2. **Update native code**: Make changes in the respective `android/` or `ios/` directories
3. **Sync changes**: Run `npx cap sync` to update native projects
4. **Test**: Run the app on devices/simulators

## Updating Capacitor

To update Capacitor to the latest version:

```bash
npm update @capacitor/cli @capacitor/core
npx cap sync
```

## Testing

### Manual Testing
- Test on physical devices for both Android and iOS
- Verify web content loads correctly
- Test app launch and navigation
- Verify offline behavior

### Automated Testing
```bash
# Run any existing tests
npm test
```

## Building for Production

### Android APK/AAB

1. Open the project in Android Studio
2. Go to **Build** → **Generate Signed Bundle/APK**
3. Follow the signing process
4. Choose between APK (for direct installation) or AAB (for Play Store)

### iOS App Store

1. Open the project in Xcode
2. Set the development team and signing certificates
3. Archive the app (**Product** → **Archive**)
4. Upload to App Store Connect via the Organizer

## Deployment

### Android Play Store
1. Build a signed AAB file
2. Upload to [Google Play Console](https://play.google.com/console)
3. Complete store listing and compliance requirements
4. Submit for review

### iOS App Store
1. Archive and upload the app via Xcode
2. Complete app information in [App Store Connect](https://appstoreconnect.apple.com)
3. Submit for App Store review

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in this repository
- Contact the development team

## Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Developer Guide](https://developer.android.com/guide)
- [iOS Developer Guide](https://developer.apple.com/documentation/)
- [JSG SPARSH PUNE Web App](https://jsg-sparsh-pune.vercel.app)

---

**Note**: This app is a native wrapper for the JSG SPARSH PUNE web application. The main functionality is provided by the web app hosted on Vercel.