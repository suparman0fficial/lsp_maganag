# Component Usage Guide

## Quick Reference

### Buttons

#### Primary Button
```css
/* Usage: Main actions like "Register", "Submit", "Daftar Sekarang" */
background: #0A3D62;
color: #FFFFFF;
padding: 16px 32px;
border-radius: 8px;
```

#### Secondary Button
```css
/* Usage: Alternative actions like "Cancel", "Back" */
background: transparent;
color: #0A3D62;
border: 2px solid #0A3D62;
```

#### Ghost Button
```css
/* Usage: Destructive actions or tertiary options */
background: transparent;
color: #0A3D62;
padding: 12px 16px;
```

### Badges

#### Status Badges
```css
/* Success - Completed, Verified */
background: #E6F4EA;
color: #388E3C;

/* Warning - Pending, Review */
background: #FFF8E1;
color: #F57C00;

/* Error - Failed, Rejected */
background: #FFEBEE;
color: #D32F2F;

/* Info - Informational */
background: #E3F2FD;
color: #1976D2;
```

### Forms

#### Input Fields
```css
/* Default State */
border: 2px solid #DADCE0;
border-radius: 8px;
padding: 16px 20px;

/* Focus State */
border: 2px solid #0A3D62;
box-shadow: 0 0 0 4px rgba(10, 61, 98, 0.1);

/* Error State */
border: 2px solid #F44336;
box-shadow: 0 0 0 4px rgba(244, 67, 54, 0.1);

/* Success State */
border: 2px solid #4CAF50;
box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.1);
```

### Cards

#### Default Card
```css
background: #FFFFFF;
border: 1px solid #DADCE0;
border-radius: 12px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

#### Elevated Card
```css
background: #FFFFFF;
border: none;
border-radius: 12px;
padding: 24px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
```

## Layout Components

### Dashboard Layout
- **Participant**: 250px fixed sidebar + content area
- **Admin**: 72px topbar + 280px sidebar + content area
- **Container padding**: 32px desktop, 16px mobile

### Navigation

#### Sidebar Items
```css
/* Default */
color: rgba(255, 255, 255, 0.8);
background: transparent;

/* Hover */
background: rgba(255, 255, 255, 0.1);
color: #FFFFFF;

/* Active */
background: rgba(255, 255, 255, 0.15);
border-left: 3px solid #FFFFFF;
```

#### Topbar
- **Height**: 72px desktop, 64px mobile
- **Position**: Sticky, top: 0
- **Box-shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)

## Data Display

### Tables

#### Header
```css
background: #F8F9FA;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
color: #5F6368;
```

#### Row Hover
```css
background: #F8F9FA;
transition: background-color 0.2s ease;
```

### Progress Steppers

#### Step Circle
```css
/* Completed */
background: #4CAF50;
border: 3px solid #4CAF50;

/* Active */
background: #0A3D62;
border: 3px solid #0A3D62;
box-shadow: 0 0 0 6px rgba(10, 61, 98, 0.1);

/* Pending */
background: #FFFFFF;
border: 3px solid #DADCE0;
color: #9AA0A6;
```

## Responsive Guidelines

### Mobile (375px - 768px)
- Sidebar: Hidden behind hamburger menu
- Container padding: 16px
- Grid: 1-2 columns max
- Font sizes: Reduce by 10-15%

### Tablet (768px - 1024px)
- Sidebar: Can be visible or overlay
- Container padding: 24px
- Grid: 2-4 columns
- Font sizes: Same as desktop

### Desktop (1024px+)
- Full layout with persistent navigation
- Container padding: 32px
- Grid: Full 12-column system
- Full font sizes

## Component States

### Interactive Elements
Always include these states:
- Default
- Hover
- Focus/Active
- Disabled
- Loading (if applicable)

### Form Validation
- **Empty**: Default state
- **Valid**: Green success state
- **Invalid**: Red error state with message
- **Warning**: Yellow for attention needed

## Spacing Guidelines

### Use multiples of 8px:
- **Tight**: 8px, 16px
- **Comfortable**: 24px, 32px
- **Spacious**: 48px, 64px+

### Common patterns:
- **Card padding**: 24px
- **Section margin**: 32px
- **Form field gap**: 16px
- **Button gap**: 12px

## Icon Usage

### Common Icons and Their Meanings
- **Check**: Success, complete, verified
- **Warning**: Attention needed, pending
- **Error**: Failed, error, rejection
- **Info**: Information, help
- **Arrow**: Navigation, direction
- **Menu**: Navigation toggle
- **Edit**: Modify, update
- **Delete**: Remove, destructive action
- **Upload**: File upload
- **Download**: File download

### Icon Sizes
- **XS**: 16px (Inline)
- **SM**: 20px (Small buttons)
- **MD**: 24px (Standard)
- **LG**: 32px (Large buttons)
- **XL**: 48px (Hero sections)

## Animation Guidelines

### Timing
- **Fast**: 0.15s (Button hover)
- **Normal**: 0.2s (Card hover)
- **Slow**: 0.3s (Menu transitions)

### Easing
- **Ease-out**: Most transitions
- **Ease-in-out**: Complex animations
- **Linear**: Loading spinners

### Properties to Animate
- Transform (translateY, scale)
- Opacity
- Background color
- Border color

**Avoid animating:**
- Width/height (use transform instead)
- Left/top/right/bottom
- Box-shadow