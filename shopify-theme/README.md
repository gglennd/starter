# Shopify Theme Starter

A Shopify 2.0 theme starter template using Shopify CLI.

## Requirements

- Node.js 24.x
- pnpm 10.33.0
- Shopify CLI 3.93.2+

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Connect to a Shopify store:
   ```bash
   shopify auth login
   ```

3. Start development server:
   ```bash
   pnpm dev
   ```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with live reload |
| `pnpm check` | Run theme Check linter |
| `pnpm pull` | Pull theme files from store |
| `pnpm push` | Push theme files to store |
| `pnpm package` | Package theme as .zip |

## Theme Structure

```
theme/
├── config/         # Theme settings
├── layout/         # Layout templates
├── sections/       # Theme sections
├── blocks/         # Theme blocks
├── snippets/       # Liquid snippets
└── templates/      # Page templates
```

## Documentation

- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [Theme Architecture](https://shopify.dev/docs/themes/architecture)