# Contributing to JSG SPARSH PUNE Mobile App

Thank you for your interest in contributing to the JSG SPARSH PUNE Mobile App! This document provides guidelines and information for contributors.

## ?? Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/JSG-SPARSH-Mobile-App.git
   cd JSG-SPARSH-Mobile-App
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Sync the project**:
   ```bash
   npm run sync
   ```

## ??? Development Workflow

### Setting Up Your Development Environment

1. **Install Prerequisites**:
   - Node.js (v14 or higher)
   - Android Studio (for Android development)
   - Xcode (for iOS development, macOS only)

2. **Install Capacitor CLI** globally:
   ```bash
   npm install -g @capacitor/cli
   ```

3. **Verify your setup**:
   ```bash
   npm run doctor
   ```

### Making Changes

1. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Web assets: Modify files in the `www/` directory
   - Native Android: Make changes in the `android/` directory
   - Native iOS: Make changes in the `ios/` directory
   - Configuration: Update `capacitor.config.json` if needed

3. **Sync your changes**:
   ```bash
   npm run sync
   ```

4. **Test your changes**:
   ```bash
   # For Android
   npm run run:android
   
   # For iOS
   npm run run:ios
   ```

### Code Style and Standards

- Follow existing code formatting and style
- Use meaningful commit messages
- Keep changes focused and atomic
- Test on both Android and iOS when possible

### Commit Message Format

Use clear and descriptive commit messages:

```
type(scope): brief description

Longer description if necessary

- List any breaking changes
- Reference issues: Fixes #123
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## ?? Testing

### Manual Testing Checklist

Before submitting a pull request, please test:

- [ ] App launches successfully on Android
- [ ] App launches successfully on iOS
- [ ] Web content loads correctly
- [ ] Navigation works as expected
- [ ] App handles network connectivity issues gracefully
- [ ] App works on different screen sizes

### Platform-Specific Testing

#### Android Testing
- Test on different Android versions (API 22+)
- Test on different screen sizes and densities
- Verify APK builds correctly

#### iOS Testing
- Test on different iOS versions (13.0+)
- Test on different iPhone and iPad sizes
- Verify app archives correctly for App Store

## ?? Pull Request Process

1. **Update documentation** if your changes affect the public API or user experience
2. **Update the README.md** if you add new features or change setup procedures
3. **Ensure your PR description** clearly describes the problem and solution
4. **Link any relevant issues** in your PR description
5. **Request review** from maintainers

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Android
- [ ] Tested on iOS
- [ ] Manual testing completed

## Screenshots
If applicable, add screenshots to help explain your changes

## Additional Notes
Any additional information about the changes
```

## ?? Bug Reports

When reporting bugs, please include:

1. **Device Information**:
   - Platform (Android/iOS)
   - OS Version
   - Device Model

2. **App Information**:
   - App Version
   - Build Type (Debug/Release)

3. **Reproduction Steps**:
   - Clear steps to reproduce the issue
   - Expected behavior
   - Actual behavior

4. **Additional Context**:
   - Screenshots or screen recordings
   - Error logs or console output

## ?? Feature Requests

When requesting features:

1. **Describe the feature** clearly and concisely
2. **Explain the use case** and why it would be valuable
3. **Provide examples** or mockups if applicable
4. **Consider implementation** complexity and alternatives

## ?? Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Development](https://developer.android.com/)
- [iOS Development](https://developer.apple.com/documentation/)
- [Git Best Practices](https://git-scm.com/book)

## ?? Code of Conduct

Please be respectful and professional in all interactions. We're all here to build something great together!

## ? Questions?

If you have questions about contributing:

1. Check existing issues and discussions
2. Create a new issue with the "question" label
3. Reach out to the maintainers

Thank you for contributing to JSG SPARSH PUNE Mobile App! ??