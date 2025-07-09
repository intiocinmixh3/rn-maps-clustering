# Contributing to RN Super Cluster

First off, thank you for considering contributing to `RN Maps Clustering`! Your help is greatly appreciated. Any contribution, no matter how small, is welcome.

## How Can I Contribute?

### 🐛 Reporting Bugs

If you find a bug, please create a new issue in the [GitHub Issues](https://github.com/suwi-lanji/rn-maps-clustering/issues) section.

Please include as much detail as possible in your bug report:
- A clear and descriptive title.
- A detailed description of the problem.
- Steps to reproduce the bug.
- What you expected to happen vs. what actually happened.
- Screenshots or GIFs if applicable.
- Information about your environment (React Native version, library version, platform, etc.).

### ✨ Suggesting Enhancements

If you have an idea for a new feature or an improvement to an existing one, please open an issue to discuss it. This allows us to coordinate efforts and ensure the feature aligns with the project's goals.

### 💻 Pull Requests

We welcome pull requests! If you're ready to contribute code, please follow these steps:

1.  **Fork the Repository**
    Click the "Fork" button at the top right of the repository page.

2.  **Clone Your Fork**
    Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/your-username/rn-maps-clustering.git
    cd rn-maps-clustering
    ```

3.  **Set Up the Development Environment**
    This project uses `pnpm` for package management. This single command will install dependencies for the root library and the example app.
    ```bash
    pnpm install
    ```

4.  **Create a New Branch**
    Create a new branch for your feature or bug fix. Use a descriptive name.
    ```bash
    git checkout -b feature/my-awesome-feature
    # or
    git checkout -b fix/resolve-map-issue
    ```

5.  **Make Your Changes**
    Write your code! Make sure to follow the existing code style. All source code for the library is in the `src/` directory.

6.  **Test Your Changes**
    You can test your changes live in the `example/` app.
    ```bash
    # From the root directory
    pnpm example start
    ```
    This will start the Metro server for the example app, which you can run on a simulator or device.

7.  **Lint and Type-Check**
    Before committing, make sure your code passes the linter and TypeScript checks.
    ```bash
    # Run ESLint to check for code style issues
    pnpm lint

    # Run the TypeScript compiler to check for type errors
    pnpm typecheck
    ```

8.  **Commit Your Changes**
    Use a clear and descriptive commit message. This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
    ```bash
    git commit -m "feat: Add custom animation support for clusters"
    ```

9.  **Push to Your Fork**
    ```bash
    git push origin feature/my-awesome-feature
    ```

10. **Open a Pull Request**
    Go to the original repository on GitHub and open a pull request from your forked branch. Provide a clear description of the changes you've made.

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Thank you again for your contribution!
