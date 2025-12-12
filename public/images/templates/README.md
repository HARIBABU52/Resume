# Resume Template Images

This directory contains the template preview images for the resume builder. 

## Required Images

For the resume templates page to work properly, please add the following images:

- `professional.jpg` - Professional template preview
- `creative.jpg` - Creative template preview
- `minimalist.jpg` - Minimalist template preview
- `executive.jpg` - Executive template preview

## Image Guidelines

- Recommended size: 800x1000px (4:5 aspect ratio)
- File format: JPG or PNG
- File naming: Use lowercase with hyphens (e.g., `professional-template.jpg`)
- Quality: High resolution (min 72 DPI)

## Adding New Templates

1. Add your template image to this directory
2. Update the `templates` array in `app/resume-templates/page.jsx` to include your new template
3. Make sure to include all required fields: id, name, category, image path, and description
