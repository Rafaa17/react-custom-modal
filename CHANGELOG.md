# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Released]

## [1.3.1] - 2024-03-03

### Changed

- Fixed exported types from index.d.ts when installing the package

## [1.3.0] - 2024-02-28

### Changed

- Refactored code as per common React project standards
- Made onDismissed prop available to all popup types

## [1.2.0] - 2022-03-25

### Changed

- Added option to pass custom icon
- Added option to allow/disallow closing of dialogs on ESC key press
- Updated dependencies
- Resolved all packages vulnerabilities
- Unit Tests using Jest

## [1.1.3] - 2021-12-04

### Changed

- Updated react, react-dom peer dependencies

## [1.1.2] - 2021-11-13

### Fixed

- Issue When importing ToastPosition enum

## [1.1.1] - 2021-10-17

### Fixed

- Issue with z-index of toasts container

## [1.1.0] - 2021-10-17

### Added

- Toast Multiple Positioning (Top Center, Top Left, Top Right, Bottom Center, Bottom Left, Bottom Right)
- Toast timeout progress indication (optional)
- Toast timeout progress coloring (optional)
- Toast responsiveness fix devices with low width
