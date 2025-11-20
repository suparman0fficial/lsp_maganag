# LSP-SI Design System

## Overview

This design system is created for the Lembaga Sertifikasi Profesi Sistem Informasi (LSP-SI) project. It provides a comprehensive set of design tokens, components, and guidelines to create consistent, professional, and user-friendly interfaces for certification management.

## Design Philosophy

Our design philosophy focuses on creating interfaces that are:

- **Professional**: Clean, corporate aesthetic that builds trust
- **Accessible**: Following WCAG 2.1 AA standards
- **Responsive**: Optimized for desktop (1440px) and mobile (375px)
- **Consistent**: Unified components across all touchpoints
- **Scalable**: Modular system that grows with the project

## Structure

```
figmadesign-system/
├── design-tokens/          # Core design variables
│   ├── colors.json        # Color palette and semantic colors
│   ├── typography.json    # Font families, sizes, and weights
│   ├── spacing.json       # Spacing scale and grid system
│   ├── shadows.json       # Elevation and shadow definitions
│   └── grid-system.json   # Layout grid and breakpoints
├── components/
│   ├── atoms/             # Basic UI elements
│   │   ├── button.json
│   │   ├── input-field.json
│   │   ├── badge.json
│   │   ├── card.json
│   │   └── icons.json
│   ├── molecules/         # Combinations of atoms
│   │   ├── navbar.json
│   │   ├── sidebar.json
│   │   ├── progress-stepper.json
│   │   ├── data-table.json
│   │   └── certification-card.json
│   └── organisms/         # Complex UI sections
│       ├── dashboard-layout.json
│       └── registration-form.json
└── templates/             # Page layouts and templates
```

## Color Palette

### Primary Colors
- **Primary Blue**: #0A3D62 (Main brand color)
- **Ocean Blue**: #4285F4 (Secondary accent)
- **Background**: #F5F6FA (Light background)
- **Surface White**: #FFFFFF (Card backgrounds)

### Semantic Colors
- **Success**: #4CAF50 (Completed, verified)
- **Warning**: #FFC107 (Pending attention)
- **Error**: #F44336 (Failed, rejected)
- **Info**: #2196F3 (Informational)

### Neutral Colors
- **Gray Scale**: #1A1A1A to #F5F6FA (10-step scale)

## Typography

### Font Families
- **Poppins**: Headings (modern, geometric)
- **Roboto**: Body text (high readability)

### Type Scale
- **H1**: 48px, Poppins Semibold
- **H2**: 36px, Poppins Semibold
- **H3**: 24px, Poppins Semibold
- **Body Large**: 18px, Roboto Regular
- **Body**: 16px, Roboto Regular
- **Small**: 14px, Roboto Regular
- **Caption**: 12px, Roboto Regular

## Spacing System

8px base unit scale:
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **XXL**: 48px

## Grid System

### Breakpoints
- **Mobile**: 375px - 768px (4 columns)
- **Tablet**: 768px - 1024px (8 columns)
- **Desktop**: 1024px+ (12 columns)

### Container Widths
- **Mobile**: 100% (with padding)
- **Desktop**: 1440px max-width

## Components

### Atomic Components
- **Button**: Primary, secondary, outline, ghost variants
- **Input Field**: Text, email, password, textarea
- **Badge**: Status indicators with semantic colors
- **Card**: Container components with elevation
- **Icons**: Material Icons with size/color variants

### Molecular Components
- **Navigation Bar**: Top navigation with logo and user menu
- **Sidebar**: Side navigation with menu items
- **Progress Stepper**: Multi-step progress indicators
- **Data Table**: Sortable, filterable tables with pagination
- **Certification Card**: Scheme information cards

### Organismic Components
- **Dashboard Layout**: Complete page layouts
- **Registration Form**: Multi-step form wizard

## Usage Guidelines

### Button Hierarchy
1. **Primary**: Main action (Register, Submit)
2. **Secondary**: Alternative actions (Cancel, Back)
3. **Outline**: Tertiary actions (Learn More)
4. **Ghost**: Destructive actions (Delete, Remove)

### Form Validation
- **Success**: Green borders and checkmarks
- **Error**: Red borders and error messages
- **Warning**: Yellow borders for attention
- **Info**: Blue borders for guidance

### Status Indicators
- **Green**: Completed, verified, competent
- **Yellow**: Pending, in-progress, review
- **Red**: Failed, rejected, incomplete
- **Blue**: Information, neutral, scheduled

## Accessibility

### Color Contrast
- All text meets WCAG 2.1 AA contrast ratios (4.5:1)
- Interactive elements have 3:1 contrast ratio minimum

### Focus States
- Visible focus indicators on all interactive elements
- Consistent focus ring styling (2px solid Primary Blue)

### Screen Readers
- Semantic HTML structure
- ARIA labels and descriptions
- Logical heading hierarchy

## Responsive Design

### Mobile First Approach
- Design for mobile (375px) first
- Scale up to tablet and desktop
- Progressive enhancement for larger screens

### Breakpoint Strategy
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Implementation

### Figma Setup
1. Create styles for all design tokens
2. Build components with Auto Layout
3. Use variants for different states
4. Set up proper constraints for responsiveness

### Development
1. Export design tokens as JSON/CSS variables
2. Implement components using React/Vue/Angular
3. Apply responsive design patterns
4. Ensure accessibility compliance

## Contributing

When adding new components:
1. Follow the atomic design methodology
2. Include all necessary states and variants
3. Document usage guidelines
4. Test for accessibility
5. Ensure responsive behavior

## Version History

### v1.0.0 (Current)
- Initial design system release
- Core design tokens established
- Basic component library created
- Accessibility guidelines implemented