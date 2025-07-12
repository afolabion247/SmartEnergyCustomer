# Troubleshooting Guide - Localhost Page Not Found

## Quick Fix Steps

### 1. Check if servers are running
Make sure both servers are running in separate terminals:

**Terminal 1 (Backend):**
```bash
npm run server
```
Should show: "Server running on port 4242"

**Terminal 2 (Frontend):**
```bash
npm run dev
```
Should show: "Local: http://localhost:5173/"

### 2. Check the correct URL
- Frontend: http://localhost:5173 (not 3000)
- Backend: http://localhost:4242

### 3. Clear browser cache
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Or open in incognito/private mode

### 4. Check for port conflicts
If ports are in use, try:
```bash
# Kill processes on port 5173
npx kill-port 5173
# Kill processes on port 4242
npx kill-port 4242
```

### 5. Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

## Common Issues

### Issue: "This site can't be reached"
**Solution:** Check if the development server is actually running
- Look for "Local: http://localhost:5173/" in terminal
- Check terminal for any error messages

### Issue: "Module not found" errors
**Solution:** The CSS file has been moved to the correct location
- CSS is now in `src/index.css` (not `server/index.css`)

### Issue: White screen
**Solution:** Check browser console for JavaScript errors
- Press F12 to open developer tools
- Look at Console tab for errors

## Test the Setup

1. **Start with the simplified version** (current App.js)
2. **If that works**, gradually add back components
3. **If it doesn't work**, check terminal output

## Expected Terminal Output

**Frontend (npm run dev):**
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

**Backend (npm run server):**
```
Server running on port 4242
```

## If Still Not Working

1. **Check file structure:**
   ```
   src/
   ├── main.jsx          ✅ Should exist
   ├── App.js            ✅ Should exist
   ├── index.css         ✅ Should exist
   └── components/       ✅ Should exist
   ```

2. **Verify package.json scripts:**
   ```json
   "scripts": {
     "dev": "vite",
     "server": "node server/index.js"
   }
   ```

3. **Check for any error messages in terminal**

4. **Try a different port:**
   - Edit `vite.config.js` to use port 3000
   - Or use `npm run dev -- --port 3000` 