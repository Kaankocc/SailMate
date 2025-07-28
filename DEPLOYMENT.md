# SeaMate Deployment Guide

This guide covers deploying the SeaMate application with:

- **Frontend**: Vercel (Static hosting)
- **Backend**: Render (Python web service)

## Prerequisites

- Vercel account
- Render account
- GitHub repository (recommended for automatic deployments)

## 🚀 Backend Deployment (Render)

### 1. Environment Variables

Set up the following environment variables in your Render dashboard:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENWEATHER_API_KEY=your_openweather_api_key_here
OPENCAGE_API_KEY=your_opencage_api_key_here
ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app
```

### 2. Deploy to Render

1. Connect your GitHub repository to Render
2. Select the `backend` directory as the root directory
3. Use the following settings:
   - **Runtime**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Python Version**: 3.11.0

Or use the provided `render.yaml` configuration file for automatic setup.

### 3. Update CORS Origins

After deployment, update the `ALLOWED_ORIGINS` environment variable with your actual Vercel domain:

```env
ALLOWED_ORIGINS=https://your-actual-frontend.vercel.app,http://localhost:8080
```

## 🌐 Frontend Deployment (Vercel)

### 1. Update API URL

In `frontend/assistant.html`, update the production API URL:

```javascript
// Replace 'your-backend-app.onrender.com' with your actual Render URL
return "https://your-backend-app.onrender.com";
```

### 2. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Select the `frontend` directory as the root directory
3. Vercel will automatically use the `vercel.json` configuration
4. No build step is required as these are static HTML files

### 3. Configure Custom Domain (Optional)

Add your custom domain in Vercel settings for a professional URL.

## 🔧 Configuration Files

### Backend Files Created:

- `backend/render.yaml` - Render deployment configuration
- `backend/Procfile` - Alternative deployment configuration
- `backend/requirements.txt` - Updated with specific versions

### Frontend Files Created:

- `frontend/vercel.json` - Vercel deployment configuration

## 🧪 Testing the Deployment

1. **Test backend health**: Visit `https://your-backend-app.onrender.com/ping`
2. **Test frontend**: Visit your Vercel URL and try the assistant
3. **Check CORS**: Ensure API calls work from the frontend

## 🔒 Security Notes

- Never commit API keys to version control
- Use environment variables for all sensitive data
- The frontend URL detection automatically switches between local and production APIs
- CORS is configured to only allow your specific domains

## 📝 Environment Variables Summary

### Required for Backend:

- `OPENAI_API_KEY` - Your OpenAI API key
- `OPENWEATHER_API_KEY` - OpenWeatherMap API key
- `OPENCAGE_API_KEY` - OpenCage Geocoding API key
- `ALLOWED_ORIGINS` - Comma-separated list of allowed frontend domains

### Optional:

- `PYTHON_VERSION` - Python version (default: 3.11.0)

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**: Update `ALLOWED_ORIGINS` with correct Vercel domain
2. **API Not Found**: Verify backend URL in frontend code
3. **Build Failures**: Check requirements.txt versions
4. **Environment Variables**: Ensure all required variables are set

### Logs:

- **Render**: Check deployment logs in Render dashboard
- **Vercel**: Check function logs in Vercel dashboard

## 📞 Support

For deployment issues, check:

1. Render deployment logs
2. Vercel deployment logs
3. Browser developer console for frontend errors
4. API endpoint responses for backend errors
