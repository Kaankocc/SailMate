# 🚀 Vercel Deployment Guide for SeaMate

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Environment Variables**: Get your OpenAI API key
3. **Git Repository**: Push your code to GitHub/GitLab/Bitbucket

## 📋 Deployment Steps

### 1. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

```
OPENAI_API_KEY=your_actual_openai_api_key
ENVIRONMENT=production
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: seamate (or your preferred name)
# - Directory: ./
# - Override settings? No
```

#### Option B: GitHub Integration

1. Connect your GitHub repository to Vercel
2. Import your project
3. Configure environment variables
4. Deploy

### 3. Verification

After deployment, test these endpoints:

- **Frontend**: `https://your-app.vercel.app/`
- **API Health**: `https://your-app.vercel.app/api/ping`
- **Assistant**: `https://your-app.vercel.app/assistant.html`

## 🔧 Configuration Details

### File Structure for Vercel:

```
SeaMate/
├── vercel.json          # Vercel configuration
├── api/                 # Serverless API functions
│   └── ask.py          # API endpoint wrapper
├── backend/             # FastAPI application
│   ├── main.py         # Main app with serverless handler
│   └── ...
├── frontend/           # Static frontend files
│   ├── index.html
│   ├── assistant.html  # Environment-aware API calls
│   └── ...
└── .env.example        # Environment variables template
```

### How It Works:

1. **Frontend**: Static files served from `/frontend/`
2. **API Routes**: `/api/*` routes to serverless functions
3. **Environment Detection**: Frontend auto-detects localhost vs production
4. **CORS**: Backend configured for both local and production domains

## 🔍 Troubleshooting

### Common Issues:

1. **API not working**: Check environment variables in Vercel dashboard
2. **CORS errors**: Verify your domain is in the CORS allow list
3. **404 on API**: Ensure `vercel.json` routing is correct

### Debug Steps:

1. Check Vercel function logs in dashboard
2. Test API endpoint directly: `https://your-app.vercel.app/api/ping`
3. Verify environment variables are set correctly

## 🌍 Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Domains" tab
3. Add your custom domain
4. Update CORS settings in `backend/main.py` if needed

## 📱 Features Enabled:

✅ **Environment-aware API URLs**  
✅ **User-friendly error messages**  
✅ **Graceful network error handling**  
✅ **Production-ready CORS configuration**  
✅ **Serverless backend deployment**  
✅ **Static frontend hosting**

## 🛠️ Local Development

```bash
# Backend (in backend/ directory)
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Frontend (serve static files)
python -m http.server 8080 -d frontend
# OR use any static file server
```

The frontend will automatically detect localhost and use the appropriate API URLs.
