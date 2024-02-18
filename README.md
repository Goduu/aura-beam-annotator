<p align="center">
  <img alt="AuraBeam Annotator" src="https://raw.githubusercontent.com/goduu/aura-beam-annotator/HEAD/.github/logo.svg" width="500" style="max-width: 100%;"/>
</p>

# AuraBeam Annotator

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?logo=storybook&logoColor=white)](https://aura-beam-annotator.vercel.app/)

The AuraBeam Annotator library offers a set of React components designed to enhance the visual appeal of your application with annotated highlights and decorative elements. This library includes the AuraBeamAnnotator, AuraBeamAnnotatorContainer, and AuraBeamVerticalDivider components, each customizable with various props for color and positioning.

This library uses [Storybook](https://storybook.js.org/) to manage its UI components, making it easy for developers to browse a live UI library and interact with each component's states without diving into the codebase.

## Installation

To use the AuraBeam Components in your project, install the package via npm:

```bash
npm install aura-beam-annotator
```

Or if you prefer using yarn:

```bash
yarn add aura-beam-annotator
```

Import the css to your main component:

```ts
import "aura-beam-annotator/dist/tailwind.css";
```

## Components

### AuraBeamAnnotator

The AuraBeamAnnotator component adds a highlighted annotation to your text content, with an optional round circle and a customizable border color.

Props

- title: The text to be displayed as the title.
- positioning: Position of the highlight and title ("left" or "right").
- children: The content to be displayed beneath the title.
- color: Optional. The color key for background and border colors.

Usage

```jsx
import {
  AuraBeamAnnotator,
  AuraBeamAnnotatorContainer,
} from "aura-beam-annotator";

<AuraBeamAnnotatorContainer>
  <AuraBeamAnnotator title="Your Title" positioning="left" color="blue">
    Your content here
  </AuraBeamAnnotator>
  ;
</AuraBeamAnnotatorContainer>;
```

### AuraBeamAnnotatorContainer

A container component to wrap around one or multiple AuraBeamAnnotator components for consistent spacing and shadow effects.

Props

- children: The AuraBeamAnnotator components to be included in the container.

Usage

```jsx
import {
  AuraBeamAnnotator,
  AuraBeamAnnotatorContainer,
} from "aura-beam-annotator";

<AuraBeamAnnotatorContainer>
  <AuraBeamAnnotator title="First Title" positioning="left" color="red">
    First content
  </AuraBeamAnnotator>
  <AuraBeamAnnotator title="Second Title" positioning="right" color="green">
    Second content
  </AuraBeamAnnotator>
</AuraBeamAnnotatorContainer>;
```

### AuraBeamVerticalDivider

A component to add a decorative vertical divider with customizable direction and color.

Props

- direction: The direction of the divider ("l-to-r" when the upper component has positioning="left" and the second positioning="right; "r-to-l" when the upper component has positioning="right" and the second positioning="left").
- color: Optional. The color key for the divider.
-

```jsx
import {
  AuraBeamVerticalDivider,
  AuraBeamAnnotatorContainer,
} from "aura-beam-annotator";

<AuraBeamAnnotatorContainer>
  <AuraBeamVerticalDivider direction="l-to-r" color="purple" />;
</AuraBeamAnnotatorContainer>;
```

## Examples of use:

<img alt="Tailwind CSS" src="https://raw.githubusercontent.com/goduu/aura-beam-annotator/HEAD/.github/ss_01.png" width="2067" style="max-width: 100%;"/>
<img alt="Tailwind CSS" src="https://raw.githubusercontent.com/goduu/aura-beam-annotator/HEAD/.github/ss_02.png" width="2067" style="max-width: 100%;"/>
<img alt="Tailwind CSS" src="https://raw.githubusercontent.com/goduu/aura-beam-annotator/HEAD/.github/ss_03.png" width="2067" style="max-width: 100%;"/>
<img alt="Tailwind CSS" src="https://raw.githubusercontent.com/goduu/aura-beam-annotator/HEAD/.github/ss_04.png" width="2067" style="max-width: 100%;"/>

## Customization

The color props for these components are based on predefined color keys from Tailwind.

## Contributing

We welcome contributions to the AuraBeam Components library. Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
This `README.md` template includes sections for installation instructions, descriptions of each component, their props, usage examples, customization tips, contributing guidelines, and licensing information. Adapt the content to fit the specifics of your package, such as the actual package name in the installation commands, the available props for each component, and any additional details you want to include about customization and contribution.

```
