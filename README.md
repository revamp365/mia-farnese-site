# Mia Farnese — Official Artist Website

A professional website for Mia Farnese, a 13-year-old rising singer and guitarist. Built with React, Tailwind CSS, and Shadcn/UI components.

## 🎵 About Mia

Mia Farnese is a talented young artist who has been singing for several years and recently picked up acoustic guitar. Her musical journey includes:

- **6th Grade Talent Show**: First public performance
- **7th Grade Talent Show**: First place winner
- **Current**: Preparing for 8th grade talent show with guitar and vocals

## 🚀 Tech Stack

- **Frontend**: React 18 with JSX
- **Styling**: Tailwind CSS + Shadcn/UI components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Setup

```bash
pnpm install
pnpm run dev
```

### 📧 Email Notifications Setup

To enable email notifications for contact form and chat messages:

1. **Sign up for EmailJS** at https://www.emailjs.com/
2. **Create an Email Service** (Gmail, Outlook, etc.)
3. **Create Email Templates**:
   - Contact form template
   - Chat message template
4. **Get your credentials** from EmailJS dashboard
5. **Create a `.env` file** in the root directory:
```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_CHAT_TEMPLATE_ID=your_chat_template_id
VITE_EMAILJS_USER_ID=your_user_id

# Slack Webhook (Optional)
VITE_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

### 💬 Chat Integration (Optional)

To enable live chat with Slack notifications:

1. Create a Slack app in your workspace
2. Add an incoming webhook to your app
3. Copy the webhook URL
4. Add to your `.env` file (see above)

Open http://localhost:5173 to preview.

## 🌐 Deploy to Vercel

1. Push this project to GitHub (already linked to revamp365/mia-farnese-site)
2. Go to https://vercel.com/new
3. Import GitHub repo `revamp365/mia-farnese-site`
4. Framework preset → Vite
5. Build command → `pnpm run build`
6. Output directory → `dist`
7. Add environment variables from your `.env` file to Vercel settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID` 
   - `VITE_EMAILJS_CHAT_TEMPLATE_ID`
   - `VITE_EMAILJS_USER_ID`
   - `VITE_SLACK_WEBHOOK_URL` (optional)
8. Click Deploy 🎉

## 📱 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with Shadcn/UI components
- **Performance**: Optimized with Vite for fast loading
- **SEO Ready**: Meta tags and structured content
- **Social Integration**: YouTube and Instagram links
- **Contact Form**: Email notifications to drew@revamp365.net
- **Live Chat**: Real-time chat with email notifications
- **Email Notifications**: Automatic email alerts for all inquiries
- **Slack Integration**: Optional Slack notifications for chat messages

## 🎨 Customization

### Adding New Content

1. **Photos**: Replace placeholder images in the Gallery component
2. **Music**: Add YouTube embeds or audio players in the Music section
3. **Performances**: Update the achievements timeline in the About section

### Styling

The website uses Tailwind CSS with custom Shadcn/UI theme. Colors and styling can be modified in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - CSS variables and base styles

## 📞 Contact

- **Email**: contact@mia-farnese.com
- **YouTube**: [@MiaEF10](https://www.youtube.com/@MiaEF10)
- **Instagram**: [@miaamusic_](https://www.instagram.com/miaamusic_/)

## 📄 License

This project is private and created specifically for Mia Farnese's official website.

---

Made with ❤️ for music lovers
