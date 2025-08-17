# Image Placement Guide for Basement Underpinning Site

## Directory Structure

Place your images in the following directories:

### `/public/images/hero/`
- **hero-basement.jpg** - Main hero background image (1920x1080 recommended)
- **underpinning-work.jpg** - Secondary hero image showing work in progress

### `/public/images/gallery/`
Gallery images for the proof section (800x600 recommended):
- **before-1.jpg** - Before underpinning photo 1
- **after-1.jpg** - After underpinning photo 1
- **before-2.jpg** - Before underpinning photo 2
- **after-2.jpg** - After underpinning photo 2
- **before-3.jpg** - Before underpinning photo 3
- **after-3.jpg** - After underpinning photo 3
- **before-4.jpg** - Before underpinning photo 4
- **after-4.jpg** - After underpinning photo 4

### `/public/images/process/`
Process step images (600x400 recommended):
- **step-1-assessment.jpg** - Site assessment photo
- **step-2-engineering.jpg** - Engineering drawings
- **step-3-permits.jpg** - Permit documents
- **step-4-excavation.jpg** - Excavation work
- **step-5-concrete.jpg** - Concrete pouring
- **step-6-waterproofing.jpg** - Waterproofing application
- **step-7-backfill.jpg** - Backfilling
- **step-8-completion.jpg** - Completed basement

### `/public/images/methods/`
Method comparison images (800x600 recommended):
- **full-underpinning.jpg** - Full underpinning diagram/photo
- **bench-footing.jpg** - Bench footing diagram/photo
- **lowering-slab.jpg** - Slab lowering diagram/photo

## Image Optimization Guidelines

1. **Format**: Use JPEG for photos, PNG for diagrams/illustrations
2. **Compression**: Optimize images to be under 200KB each
3. **Dimensions**: Follow recommended sizes above
4. **Naming**: Use descriptive, lowercase filenames with hyphens

## Usage in Components

Images are referenced in the components as:
```jsx
// Example in Gallery.tsx
<img src="/images/gallery/before-1.jpg" alt="Before underpinning" />

// Example in Process.tsx
<img src="/images/process/step-1-assessment.jpg" alt="Site assessment" />
```

## Recommended Image Sources

- Real project photos from completed underpinning jobs
- Professional architectural diagrams
- Licensed stock photos showing basement construction
- Before/after comparisons from actual Toronto projects

## Note

All images in the `/public` directory are served directly. Ensure you have proper rights to use all images and include appropriate alt text for accessibility.