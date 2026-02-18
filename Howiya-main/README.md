# Haweia Fashion Website

A modern, elegant static website for your fashion business featuring video backgrounds, smooth animations, and responsive design.

## 🎨 Features

- **Video Background Hero Section** - Eye-catching landing page with video background
- **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, elegant design with smooth animations
- **Product Showcase** - Beautiful grid layout for your fashion collection
- **Color Scheme** - Based on #0d122b (dark navy blue) with gold accents (#c9a961)

## 📁 Project Structure

```
Haweia/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── video/              # Place your hero video here
│   └── hero-video.mp4  # Your background video (ADD THIS)
├── logos/              # Your brand logos
│   ├── BNG-2.png
│   └── BNG-24.png
├── Produact 1/         # Product images
├── produact 2/         # Product images
└── Prudcot 3/          # Product images
```

## 🚀 Setup Instructions

### 1. Add Your Video

Place your hero video in the `video` folder and name it `hero-video.mp4`

**Video Requirements:**
- Format: MP4 (H.264 codec recommended)
- Recommended resolution: 1920x1080 or higher
- Keep file size under 10MB for faster loading
- Duration: 10-30 seconds (it will loop automatically)

**To optimize your video:**
```bash
# Using ffmpeg (if you have it installed)
ffmpeg -i your-video.mp4 -vcodec h264 -acodec aac -strict -2 -b:v 2M video/hero-video.mp4
```

### 2. Open the Website

Simply open `index.html` in your web browser:
- Double-click the `index.html` file, or
- Right-click and select "Open with" → Your preferred browser

### 3. Customize Content

**Update Text Content:**
- Edit `index.html` to change text, product names, and descriptions
- Update contact information in the Contact section

**Change Colors:**
- Edit `styles.css` and modify the CSS variables at the top:
  ```css
  :root {
      --primary-color: #0d122b;      /* Main dark blue */
      --secondary-color: #1a1f4d;    /* Secondary blue */
      --accent-color: #c9a961;       /* Gold accent */
  }
  ```

**Update Product Images:**
- The website automatically uses images from your product folders
- Make sure images are named consistently (e.g., 1.jpg, 2.jpg, etc.)

## 🎯 Features Breakdown

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero Section
- Full-screen video background
- Animated logo and text
- Call-to-action button
- Scroll indicator

### Collection Section
- Grid layout for products
- Hover effects with image transitions
- Quick view buttons (ready for modal implementation)

### About Section
- Brand story section
- Logo display

### Contact Section
- Contact information
- Social media links (update with your actual links)

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

## 🎨 Fonts Used

- **Headings:** Playfair Display (elegant serif)
- **Body Text:** Montserrat (modern sans-serif)

Both fonts are loaded from Google Fonts automatically.

## 🔧 Customization Tips

### Adding More Products

1. Add product folders with images
2. Copy a product card in `index.html`:
```html
<div class="product-card">
    <div class="product-image">
        <img src="your-folder/image.jpg" alt="Product" class="product-img-main">
        <img src="your-folder/image2.jpg" alt="Product Alt" class="product-img-hover">
        <div class="product-overlay">
            <button class="quick-view">Quick View</button>
        </div>
    </div>
    <div class="product-info">
        <h3 class="product-name">Product Name</h3>
        <p class="product-description">Description</p>
    </div>
</div>
```

### Updating Social Links

In `index.html`, find the social links section and update:
```html
<a href="https://instagram.com/your-handle" class="social-link">Instagram</a>
<a href="https://facebook.com/your-page" class="social-link">Facebook</a>
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Your site will be live instantly

### Option 3: Traditional Web Hosting
1. Upload all files to your web hosting via FTP
2. Ensure `index.html` is in the root directory

## 📝 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎬 Next Steps

1. **Add your video** to the `video` folder
2. **Update contact information** with your actual email and social media
3. **Customize colors** if needed
4. **Add more products** as your collection grows
5. **Test on mobile devices** to ensure everything looks perfect

## 💡 Tips

- Keep your video file optimized for web (under 10MB)
- Use high-quality product images (at least 800x1000px)
- Test the website on different devices and browsers
- Consider adding a favicon (small icon in browser tab)

---

**Need help?** The website is fully functional and ready to use. Just add your video and you're good to go!

