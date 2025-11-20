# LSP-Online Design System

Professional Competency Certification Web System - A comprehensive UI component library and design system built with React and modern CSS.

## 🎨 Design System Overview

### Color Palette
- **Primary**: `#0A3D62` (Deep Blue - Trust & Professionalism)
- **Secondary**: `#1E88E5` (Bright Blue - Actions/Links)
- **Background Light**: `#F5F6FA`
- **Background White**: `#FFFFFF`
- **Success**: `#4CAF50` (Lulus)
- **Error**: `#F44336` (Belum Lulus/Error)
- **Warning**: `#FFC107` (Pending)

### Typography
- **Primary Font**: Poppins (Headings)
- **Secondary Font**: Roboto (Body Text, Forms)
- **Font Sizes**: 12px to 48px with consistent scale
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing & Layout
- **Grid System**: 12 columns (Desktop), 4 columns (Mobile)
- **Spacing Scale**: 4px base unit with consistent utilities
- **Responsive**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, 1280px

## 🧩 Component Library

### Atoms (Basic UI Elements)

#### Button
Multiple variants for different use cases:
- **Primary**: Main call-to-action buttons
- **Secondary**: Secondary actions
- **Ghost**: Transparent with border
- **Outline**: Bordered without background
- **Link**: Link-style button
- **Disabled**: Disabled state

```jsx
import { Button } from './components';

<Button variant="primary" size="md" onClick={() => console.log('clicked')}>
  Daftar Sekarang
</Button>
```

#### Input
Form input with validation states and icons:
- **States**: Default, Active, Error, Disabled
- **Sizes**: Small, Medium, Large
- **Features**: Icons, Helper text, Error messages

```jsx
import { Input } from './components';

<Input
  label="Nama Lengkap"
  placeholder="Masukkan nama"
  error="Field ini wajib diisi"
  required
/>
```

#### FileUpload
Drag-and-drop file upload component:
- **Features**: Drag & drop, file preview, multiple files
- **Validation**: File size, type restrictions
- **States**: Uploading, success, error

```jsx
import { FileUpload } from './components';

<FileUpload
  label="Upload KTP"
  accept="image/*,.pdf"
  maxSize={2}
  maxFiles={1}
  required
/>
```

### Molecules (Component Combinations)

#### Card
Flexible card container:
- **Variants**: Different padding, shadows, borders
- **Interactions**: Hover effects, clickable
- **Responsive**: Adapts to different screen sizes

```jsx
import { Card } from './components';

<Card hover padding="lg" shadow="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

#### ScheduleCard
Specialized card for certification schedules:
- **Information**: Title, scheme, date, time, location
- **Status**: Available, Full, Closed
- **Features**: Capacity indicator, price, registration button

```jsx
import { ScheduleCard } from './components';

<ScheduleCard
  title="Junior Web Developer"
  scheme="SKKNI Bidang TIK"
  date="15 Februari 2024"
  time="09:00 - 17:00"
  location="Jakarta"
  status="available"
  price={1500000}
  capacity={20}
  registered={12}
  onRegister={handleRegister}
/>
```

#### StatusCard
Statistics display card:
- **Features**: Icon, title, value, trend indicator
- **Colors**: Primary, Success, Error, Warning
- **Sizes**: Small, Medium, Large

```jsx
import { StatusCard } from './components';

<StatusCard
  title="Total Peserta"
  value="1,234"
  icon={<UserIcon />}
  color="primary"
  trend="up"
  change="12% dari bulan lalu"
/>
```

#### Stepper
Multi-step form indicator:
- **Orientations**: Horizontal, Vertical
- **States**: Completed, Active, Pending
- **Features**: Clickable steps, labels, descriptions

```jsx
import { Stepper } from './components';

<Stepper
  steps={[
    { title: 'Data Diri', description: 'Informasi personal' },
    { title: 'Upload Dokumen', description: 'KTP dan ijazah' },
    { title: 'Konfirmasi', description: 'Review data' }
  ]}
  currentStep={1}
  onStepClick={handleStepClick}
/>
```

### Organisms (Complex Components)

#### Table
Data table with advanced features:
- **Features**: Sorting, pagination, row selection
- **Customization**: Custom cell renderers, row actions
- **Responsive**: Horizontal scroll on mobile

```jsx
import { Table } from './components';

<Table
  columns={[
    { key: 'name', title: 'Nama', sortable: true },
    { key: 'status', title: 'Status', render: renderStatusBadge }
  ]}
  data={tableData}
  pagination={{
    currentPage: 1,
    totalPages: 5,
    onPageChange: handlePageChange,
    totalRecords: 45
  }}
  onSort={handleSort}
  onRowClick={handleRowClick}
/>
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lsp-certification-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI elements
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── FileUpload.jsx
│   ├── molecules/      # Component combinations
│   │   ├── Card.jsx
│   │   ├── ScheduleCard.jsx
│   │   ├── StatusCard.jsx
│   │   └── Stepper.jsx
│   ├── organisms/      # Complex components
│   │   └── Table.jsx
│   └── index.js        # Component exports
├── styles/
│   └── design-system.css  # Global styles and CSS variables
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 🎯 Usage Guidelines

### Design Principles
1. **Consistency**: Use components as designed to maintain visual consistency
2. **Accessibility**: All components follow WCAG 2.1 AA guidelines
3. **Responsive**: Mobile-first design approach
4. **Performance**: Optimized for fast loading and smooth interactions

### Color Usage
- **Primary**: For main CTAs, links, important actions
- **Secondary**: For secondary actions and highlights
- **Success**: For success states, completion indicators
- **Error**: For error states, warnings, validation feedback
- **Warning**: For pending states, cautions

### Typography Hierarchy
1. **H1**: Page titles (36px, Bold)
2. **H2**: Section titles (30px, Semibold)
3. **H3**: Subsection titles (24px, Semibold)
4. **H4**: Component titles (20px, Semibold)
5. **Body**: Regular content (16px, Regular)
6. **Small**: Helper text, captions (14px, Regular)

### Spacing Guidelines
- Use the spacing scale utilities (4px base unit)
- Maintain consistent padding and margins
- Ensure adequate touch targets for mobile (44px minimum)

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Customization
The design system uses CSS custom properties for easy customization:

```css
:root {
  --color-primary: #0A3D62;
  --color-primary-light: #1E88E5;
  --color-background-light: #F5F6FA;
  /* ... more variables */
}
```

### Adding New Components
1. Create component file in appropriate directory (atoms/molecules/organisms)
2. Follow existing component patterns and props interface
3. Add component export to `src/components/index.js`
4. Update documentation

## 📱 Responsive Design

The design system is mobile-first with the following breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

### Grid System
- **Desktop**: 12-column grid
- **Mobile**: 4-column grid
- **Gutters**: Consistent spacing using spacing scale

## 🎨 Theme Support

The design system supports light/dark themes through CSS custom properties. Theme switching can be implemented by updating the root CSS variables.

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Ensure components are accessible and responsive
3. Add proper PropTypes documentation
4. Update documentation for new features
5. Test thoroughly across different devices and browsers

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For questions, issues, or feature requests, please create an issue in the repository.

---

Built with ❤️ for Professional Competency Certification System