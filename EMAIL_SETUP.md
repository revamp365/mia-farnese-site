# Email Notification System Setup & Testing

## Quick Setup for Testing

To test the email notification system, you need to set up EmailJS credentials. Here's how:

### 1. Get EmailJS Credentials

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up/login
2. Create a new service (Gmail, Outlook, etc.)
3. Create two email templates:
   - **Contact Form Template**: For contact form submissions
   - **Chat Template**: For chat messages
4. Get your credentials from the EmailJS dashboard

### 2. Set Environment Variables

Create a `.env` file in the root directory with your EmailJS credentials:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_CHAT_TEMPLATE_ID=your_chat_template_id
VITE_EMAILJS_USER_ID=your_user_id

# Optional: Slack Webhook
VITE_SLACK_WEBHOOK_URL=your_slack_webhook_url
```

### 3. Email Template Variables

#### Contact Form Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_email}}` - Recipient email (drew@revamp365.net)

#### Chat Template Variables:
- `{{from_name}}` - Chat user's name
- `{{from_email}}` - Chat user's email
- `{{message}}` - Chat message
- `{{phone}}` - Chat user's phone (optional)
- `{{to_email}}` - Recipient email (drew@revamp365.net)
- `{{chat_type}}` - "New Chat Started" or "Chat Message"
- `{{timestamp}}` - Message timestamp

### 4. Testing the System

1. Start the development server: `npm run dev`
2. Click the "Test Email System" button in the top-left corner (only visible in development)
3. Or visit: `http://localhost:5173?test=email`
4. Run the configuration check first
5. Test both contact form and chat email notifications

### 5. Expected Behavior

- **Contact Form**: Sends email to drew@revamp365.net when form is submitted
- **Chat System**: Sends email to drew@revamp365.net for each chat message
- **Success**: You should receive test emails at drew@revamp365.net
- **Error Handling**: Failed emails will show error messages in the test interface

### 6. Production Deployment

When deploying to Vercel:
1. Add the same environment variables to Vercel project settings
2. Remove the test button (it only shows in development mode)
3. The email system will work automatically in production

## Troubleshooting

- **"Configuration not found"**: Check that all environment variables are set correctly
- **"Email failed to send"**: Verify EmailJS service is active and templates are published
- **"Template not found"**: Ensure template IDs match exactly
- **No emails received**: Check spam folder and verify EmailJS service configuration
