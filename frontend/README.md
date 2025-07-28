# SailMate Frontend

A responsive landing page for the SailMate sailing assistant app, built with modern web technologies and a Docker-inspired design theme.

## 🎨 Design Features

### Color Scheme

- **Primary Blue**: `#0666D0` (Docker blue)
- **Accent Blue**: `#0B95E0` (Docker light blue)
- **Background**: White with soft gray sections (`#F9F9F9`)
- **Text**: Dark gray (`#1F2937`) with medium gray (`#6B7280`) for secondary text

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales from mobile to desktop seamlessly

### UI Elements

- **Buttons**: Pill-style with hover animations and elevation
- **Cards**: Clean white backgrounds with subtle shadows
- **Icons**: Heroicons (SVG) for consistent iconography
- **Animations**: Smooth fade-in effects and hover transitions

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: `< 768px` - Single column layout, hamburger menu
- **Tablet**: `768px - 1024px` - Two-column grids
- **Desktop**: `> 1024px` - Full three-column layouts

## 🏗️ Page Structure

### Navigation Bar

- Fixed position with backdrop blur
- Logo (SailMate) on the left
- Desktop navigation links
- Mobile hamburger menu
- "Try It Now" CTA button

### Hero Section

- Large headline: "Is it safe to sail today?"
- Subheadline explaining the value proposition
- CTA button linking to demo
- Gradient background with subtle ocean theme

### How It Works Section

- Three-step process explanation
- Icons for each step
- Responsive grid layout
- Fade-in animations

### Features Section

- Six key features with checkmarks
- Card-based layout
- Hover effects
- Color-coded safety levels

### Call to Action Banner

- Full-width blue background
- Bold messaging
- Primary CTA button

### About Section

- Mission statement
- Founder placeholder
- "Get in Touch" button

### Footer

- Social media links
- Navigation links
- Copyright information

## 🚀 Demo Page

The `demo.html` page showcases:

- Interactive chat interface
- Mock conversation flow
- Real-time data visualization
- Safety level indicators
- Responsive design

## 🛠️ Technical Stack

- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first styling
- **JavaScript**: Vanilla JS for interactions
- **Fonts**: Google Fonts (Inter)
- **Icons**: Heroicons (SVG)

## 📁 File Structure

```
frontend/
├── index.html          # Main landing page
├── demo.html           # Interactive demo page
└── README.md          # This documentation
```

## 🎯 Key Features

### Landing Page (`index.html`)

- ✅ Fully responsive design
- ✅ Mobile-optimized navigation
- ✅ Smooth scroll animations
- ✅ Intersection Observer for fade-ins
- ✅ Semantic HTML structure
- ✅ Accessibility considerations
- ✅ SEO-optimized meta tags

### Demo Page (`demo.html`)

- ✅ Interactive chat interface
- ✅ Animated message bubbles
- ✅ Mock data visualization
- ✅ Real-time typing indicators
- ✅ Responsive chat layout
- ✅ User input handling

## 🎨 Design Principles

1. **Clean & Minimal**: White backgrounds with strategic use of color
2. **Tech-Focused**: Docker-inspired blue color scheme
3. **Mobile-First**: Responsive design from the ground up
4. **Accessible**: High contrast ratios and semantic markup
5. **Performance**: Optimized images and minimal dependencies

## 🔧 Customization

### Colors

Update the Tailwind config in the `<script>` tag:

```javascript
colors: {
    'docker-blue': '#0666D0',
    'docker-light-blue': '#0B95E0',
    'soft-gray': '#F9F9F9'
}
```

### Content

- Update text content in the HTML
- Replace placeholder links with actual URLs
- Add real social media links
- Update contact information

### Styling

- Modify Tailwind classes for layout changes
- Update CSS custom properties for animations
- Adjust breakpoints for different responsive behavior

## 🚀 Getting Started

1. **View the landing page**: Open `index.html` in a web browser
2. **Try the demo**: Navigate to `demo.html` for interactive experience
3. **Customize**: Edit HTML content and Tailwind classes as needed
4. **Deploy**: Upload files to any web server or static hosting

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, Intersection Observer

## 🎯 Performance

- **Lightweight**: No heavy frameworks
- **Fast Loading**: Optimized images and minimal CSS
- **SEO Ready**: Proper meta tags and semantic structure
- **Accessible**: ARIA labels and keyboard navigation

## 🔗 Integration

The landing page is designed to integrate with:

- Backend API endpoints (update `/ask` links)
- Analytics tracking
- Contact forms
- Social media platforms
- Email marketing tools

## 📞 Support

For questions or customization requests, refer to the main project documentation or contact the development team.
