# Contributing to LabsUI

Thank you for your interest in contributing to Lab's! We appreciate your support and look forward to your contributions. This guide will help you understand the directory structure and provide detailed instructions on how to add a new component to Lab's.

Read the [example PR]() to learn which files you need to add. **You only need to change 5 files to add a new component or effect** and it only takes around 10 minutes of work!

Once done, open a pull request from your forked repo to the main repo [here](https://github.com/Vaibhav-kesarwani/portfolio/compare).

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/Vaibhav-kesarwani/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/portfolio.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd portfolio
   ```

4. **Create a new branch for your changes**

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**

   ```bash
   pnpm i
   ```

6. **Run the project**
   ```bash
   pnpm dev
   ```

## Adding a New Component

To add a new component to Lab's, you will need to modify several files. Follow these steps:

### 1. Create Component

Create the main component in `registry/components/example-component.tsx`

```tsx
import React from "react";

export default function ExampleComponent() {
  return <div>This is your component.</div>;
}
```

### 2. Create Component Demo

Provide a basic example to showcase your component in `registry/example/example-component-demo.tsx`

```tsx
import ExampleComponent from "@/registry/components/example-component";

export default function ExampleComponentDemo() {
  return (
    <div className="relative justify-center">
      <ExampleComponent />
    </div>
  );
}
```

### 3. Update Sidebar

Add your component to the sidebar in `content/components/meta.json`

```json
"---Basic UI---", // Heading Respected to the component category.
"example-component"
```

### 4. Create docs

Create an MDX file for documenting your component in `content/docs/components/example-component.mdx`

````md
---
title: CircularText
description: Animated circular text component for modern UI layouts.
---

## Preview

<ComponentPreview name="example-component-demo" />

## Features

- Smooth circular text animation
- Fully **customizable** text content
- Lightweight and performant
- Works with light and dark themes
- Easy drop-in usage

## Installation

<Tabs defaultValue="cli">
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>
  <TabsContent value="cli">
    ```npm 
    npx shadcn@latest add https://vaibhavkesarwani.vercel.app/r/example-component.json 
    ```
  </TabsContent>
  <TabsContent value="manual">
    <Steps>
      <Step>Import the dependecies</Step>
      ```npm
      npm install motion
      ```

      <Step>Copy and paste the following code into your project.</Step>
      <ComponentSource name="example-component" />

      <Step>Update the import paths to match your project setup.</Step>
    </Steps>

  </TabsContent>
</Tabs>

### Usage

```tsx
import CircularText from "@/components/ui/circular-text";
```

```tsx
<CircularText
  text="VAIBHAV*LABS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
```

### Props

// This is for the prop table which can be generated automatically
<AutoTypeTable 
  path="registry/components/props/example-component.ts"
  name="CircularTextProps"
/>

### Dependencies

<ButtonDependency items={[{ name: "motion", href: "https://motion.dev" }]} />
````

### 5. Update Registry

Export your component and example in the registry files:

Before adding the components in the registry try to run the server again : `pnpm dev`

In `registry.json`:

```tsx
"items": [
    //..//
    {
      "name": "example-component",
      "type": "registry:component",
      "title": "Example Component",
      "description": "Example Component animation using the framer motion",
      "dependencies": ["motion"],
      "files": [
        {
          "path": "registry/components/example-component.tsx",
          "type": "registry:component",
          "target": "components/labs/example-component.tsx"
        }
      ],
      "author": "Vaibhav Kesarwani"
    }
  ]
```

Make sure to add any necessary dependencies, tailwind configurations, or other properties as needed for your specific component.

### 6. Build registry

```bash
pnpm build:registry
```

## Ask for Help

For any help or questions, please open a new GitHub issue.