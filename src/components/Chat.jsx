import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import emailjs from '@emailjs/browser'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help with any questions about Mia's music or performances. How can I assist you?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [visitorInfo, setVisitorInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [showContactForm, setShowContactForm] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendToSlack = async (message, visitorData) => {
    const slackWebhookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL || 'YOUR_SLACK_WEBHOOK_URL_HERE'
    
    const slackMessage = {
      text: `🎵 New inquiry from Mia Farnese website`,
      attachments: [
        {
          color: "#e94560",
          fields: [
            {
              title: "Message",
              value: message,
              short: false
            },
            {
              title: "Visitor Info",
              value: `Name: ${visitorData.name || 'Not provided'}\nEmail: ${visitorData.email || 'Not provided'}\nPhone: ${visitorData.phone || 'Not provided'}`,
              short: false
            },
            {
              title: "Timestamp",
              value: new Date().toLocaleString(),
              short: true
            },
            {
              title: "Website",
              value: "mia-farnese.com",
              short: true
            }
          ]
        }
      ]
    }

    try {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage)
      })
    } catch (error) {
      console.error('Error sending to Slack:', error)
    }
  }

  const sendEmailNotification = async (message, visitorData, isNewChat = false) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CHAT_TEMPLATE_ID,
        {
          from_name: visitorData.name || 'Anonymous',
          from_email: visitorData.email || 'No email provided',
          message: message,
          phone: visitorData.phone || 'Not provided',
          to_email: 'drew@revamp365.net',
          chat_type: isNewChat ? 'New Chat Started' : 'Chat Message',
          timestamp: new Date().toLocaleString()
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
    } catch (error) {
      console.error('Error sending email notification:', error)
    }
  }

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    
    // Send to Slack and Email
    await Promise.all([
      sendToSlack(newMessage, visitorInfo),
      sendEmailNotification(newMessage, visitorInfo, false)
    ])
    
    // Auto-reply
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        text: "Thanks for your message! I've forwarded it to Mia's team. They'll get back to you soon! 🎵",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botReply])
    }, 1000)

    setNewMessage('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const openChat = () => {
    setIsOpen(true)
    if (!visitorInfo.name && !visitorInfo.email) {
      setShowContactForm(true)
    }
  }

  const closeChat = () => {
    setIsOpen(false)
  }

  const submitContactInfo = async () => {
    setShowContactForm(false)
    // Send initial greeting with contact info to both Slack and Email
    await Promise.all([
      sendToSlack(`New visitor started chat: ${visitorInfo.name} (${visitorInfo.email})`, visitorInfo),
      sendEmailNotification(`New visitor started chat: ${visitorInfo.name} (${visitorInfo.email})`, visitorInfo, true)
    ])
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={openChat}
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-fuchsia-950/40 ring-2 ring-white/10 hover:scale-105 transition-all duration-300"
          aria-label="Open chat with Mia’s team"
        >
          <MessageCircle className="h-6 w-6" aria-hidden />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-1.5rem)] max-w-sm sm:max-w-none sm:w-96 h-[calc(100vh-5rem)] max-h-[500px] glass-effect rounded-2xl shadow-2xl border border-white/15"
          role="dialog"
          aria-label="Chat with Mia’s team"
        >
          <Card className="h-full bg-transparent border-0">
            <CardHeader className="pb-3 bg-gradient-to-r from-fuchsia-600/25 to-pink-600/20 rounded-t-2xl border-b border-white/10">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-white text-base font-semibold flex items-center font-sans">
                  <MessageCircle className="h-5 w-5 mr-2 shrink-0 text-fuchsia-200" aria-hidden />
                  Chat with Mia&apos;s team
                </CardTitle>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={closeChat}
                  className="text-white hover:bg-white/15 rounded-lg p-1 h-8 w-8 shrink-0"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex flex-col h-full">
              {/* Contact Form Modal */}
              {showContactForm && (
                <div className="absolute inset-0 bg-black/80 rounded-2xl flex items-center justify-center z-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 m-4 w-full">
                    <h3 className="text-white text-lg font-bold mb-4">Let's get to know you!</h3>
                    <div className="space-y-3">
                      <div>
                        <Input
                          placeholder="Your name"
                          value={visitorInfo.name}
                          onChange={(e) => setVisitorInfo(prev => ({ ...prev, name: e.target.value }))}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={visitorInfo.email}
                          onChange={(e) => setVisitorInfo(prev => ({ ...prev, email: e.target.value }))}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Phone (optional)"
                          value={visitorInfo.phone}
                          onChange={(e) => setVisitorInfo(prev => ({ ...prev, phone: e.target.value }))}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <Button
                        onClick={submitContactInfo}
                        className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
                        disabled={!visitorInfo.name || !visitorInfo.email}
                      >
                        Start Chatting
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-primary text-black'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex space-x-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/15 border-white/25 text-white placeholder:text-white/55 rounded-lg"
                    aria-label="Message text"
                  />
                  <Button
                    type="button"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 rounded-lg"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-white/60 mt-2 text-center">
                  Messages are sent to Mia's team in real-time
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
