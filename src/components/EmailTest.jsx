import { useState } from 'react'
import { Mail, Send, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import emailjs from '@emailjs/browser'

export default function EmailTest() {
  const [testResults, setTestResults] = useState([])
  const [isTesting, setIsTesting] = useState(false)
  const [config, setConfig] = useState({
    serviceId: '',
    templateId: '',
    chatTemplateId: '',
    userId: ''
  })

  const addTestResult = (type, success, message, details = '') => {
    const result = {
      id: Date.now(),
      type,
      success,
      message,
      details,
      timestamp: new Date().toLocaleString()
    }
    setTestResults(prev => [result, ...prev])
  }

  const testEmailJSConfig = () => {
    const results = []
    
    // Check environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const chatTemplateId = import.meta.env.VITE_EMAILJS_CHAT_TEMPLATE_ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID

    if (!serviceId || serviceId === 'your_service_id_here') {
      results.push({
        type: 'Configuration',
        success: false,
        message: 'VITE_EMAILJS_SERVICE_ID not configured',
        details: 'Please set your EmailJS service ID in environment variables'
      })
    } else {
      results.push({
        type: 'Configuration',
        success: true,
        message: 'VITE_EMAILJS_SERVICE_ID configured',
        details: `Service ID: ${serviceId.substring(0, 8)}...`
      })
    }

    if (!templateId || templateId === 'your_contact_template_id_here') {
      results.push({
        type: 'Configuration',
        success: false,
        message: 'VITE_EMAILJS_TEMPLATE_ID not configured',
        details: 'Please set your EmailJS contact template ID'
      })
    } else {
      results.push({
        type: 'Configuration',
        success: true,
        message: 'VITE_EMAILJS_TEMPLATE_ID configured',
        details: `Template ID: ${templateId.substring(0, 8)}...`
      })
    }

    if (!chatTemplateId || chatTemplateId === 'your_chat_template_id_here') {
      results.push({
        type: 'Configuration',
        success: false,
        message: 'VITE_EMAILJS_CHAT_TEMPLATE_ID not configured',
        details: 'Please set your EmailJS chat template ID'
      })
    } else {
      results.push({
        type: 'Configuration',
        success: true,
        message: 'VITE_EMAILJS_CHAT_TEMPLATE_ID configured',
        details: `Chat Template ID: ${chatTemplateId.substring(0, 8)}...`
      })
    }

    if (!userId || userId === 'your_user_id_here') {
      results.push({
        type: 'Configuration',
        success: false,
        message: 'VITE_EMAILJS_USER_ID not configured',
        details: 'Please set your EmailJS user ID'
      })
    } else {
      results.push({
        type: 'Configuration',
        success: true,
        message: 'VITE_EMAILJS_USER_ID configured',
        details: `User ID: ${userId.substring(0, 8)}...`
      })
    }

    setTestResults(results)
    return results.every(r => r.success)
  }

  const testContactFormEmail = async () => {
    setIsTesting(true)
    
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: 'Test User',
          from_email: 'test@example.com',
          subject: 'Email Test - Contact Form',
          message: 'This is a test message from the email notification system. If you receive this, the contact form email system is working correctly!',
          to_email: 'drew@revamp365.net'
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )

      addTestResult(
        'Contact Form Email',
        true,
        'Contact form email sent successfully!',
        `Status: ${result.status}, Text: ${result.text}`
      )
    } catch (error) {
      addTestResult(
        'Contact Form Email',
        false,
        'Failed to send contact form email',
        `Error: ${error.message || error}`
      )
    } finally {
      setIsTesting(false)
    }
  }

  const testChatEmail = async () => {
    setIsTesting(true)
    
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CHAT_TEMPLATE_ID,
        {
          from_name: 'Test Chat User',
          from_email: 'test@example.com',
          message: 'This is a test chat message from the email notification system. If you receive this, the chat email system is working correctly!',
          phone: '555-123-4567',
          to_email: 'drew@revamp365.net',
          chat_type: 'Test Chat Message',
          timestamp: new Date().toLocaleString()
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )

      addTestResult(
        'Chat Email',
        true,
        'Chat email sent successfully!',
        `Status: ${result.status}, Text: ${result.text}`
      )
    } catch (error) {
      addTestResult(
        'Chat Email',
        false,
        'Failed to send chat email',
        `Error: ${error.message || error}`
      )
    } finally {
      setIsTesting(false)
    }
  }

  const runAllTests = async () => {
    setIsTesting(true)
    
    // First check configuration
    const configOk = testEmailJSConfig()
    
    if (!configOk) {
      addTestResult(
        'System Check',
        false,
        'EmailJS configuration incomplete',
        'Please configure all required environment variables before testing'
      )
      setIsTesting(false)
      return
    }

    // Test contact form email
    await testContactFormEmail()
    
    // Wait a moment between tests
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Test chat email
    await testChatEmail()
    
    setIsTesting(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center">
            <Mail className="h-6 w-6 mr-3 text-primary" />
            Email Notification System Test
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-yellow-200 font-semibold mb-2">Setup Required</h4>
                <p className="text-yellow-100 text-sm">
                  Before testing, you need to configure EmailJS credentials in your environment variables:
                </p>
                <ul className="text-yellow-100 text-sm mt-2 space-y-1">
                  <li>• VITE_EMAILJS_SERVICE_ID</li>
                  <li>• VITE_EMAILJS_TEMPLATE_ID</li>
                  <li>• VITE_EMAILJS_CHAT_TEMPLATE_ID</li>
                  <li>• VITE_EMAILJS_USER_ID</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={testEmailJSConfig}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Check Configuration
            </Button>
            <Button
              onClick={testContactFormEmail}
              disabled={isTesting}
              className="bg-primary hover:bg-primary/90 text-black"
            >
              Test Contact Form Email
            </Button>
            <Button
              onClick={testChatEmail}
              disabled={isTesting}
              className="bg-primary hover:bg-primary/90 text-black"
            >
              Test Chat Email
            </Button>
            <Button
              onClick={runAllTests}
              disabled={isTesting}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {isTesting ? 'Testing...' : 'Run All Tests'}
            </Button>
          </div>

          {testResults.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-white text-lg font-semibold">Test Results</h3>
              {testResults.map((result) => (
                <div
                  key={result.id}
                  className={`p-4 rounded-lg border ${
                    result.success
                      ? 'bg-green-500/20 border-green-500/50'
                      : 'bg-red-500/20 border-red-500/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {result.success ? (
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-semibold ${
                          result.success ? 'text-green-200' : 'text-red-200'
                        }`}>
                          {result.type}
                        </h4>
                        <span className="text-xs text-white/60">{result.timestamp}</span>
                      </div>
                      <p className={`text-sm mt-1 ${
                        result.success ? 'text-green-100' : 'text-red-100'
                      }`}>
                        {result.message}
                      </p>
                      {result.details && (
                        <p className="text-xs text-white/70 mt-2 font-mono bg-black/20 p-2 rounded">
                          {result.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
